import json

from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views import View

from .forms import TaskForm
from .models import Task


class TaskListView(View):
    """
    Handle the creation and retrieval of tasks
    """

    def post(self, request):
        """
        Create a new task from the POST form data and save it to the database.
        It returns a JSON response with the task data and a success/error message.
        """

        form = TaskForm(request.POST)

        # Validate the form, and return 400 in case of the form is invalid
        if form.is_valid():
            data = form.cleaned_data
        else:
            data = json.loads(form.errors.as_json())
            return JsonResponse({"error": data}, status=400)

        # Create a new task instance and save in db, return after adding the id
        task = Task(**data)
        task.save()
        data["id"] = task.id
        return JsonResponse({"data": data, "message": "Task created successfully"})

    def get(self, request):
        """
        Retrieve all the tasks from the database.
        It returns a JSON response with a list of tasks.
        It supports pagination by using the offset and limit query params.
        """

        # Get the offset and limit query params
        offset = request.GET.get("offset")
        limit = request.GET.get("limit")
        offset = offset and int(offset)
        limit = limit and int(limit)

        # Get all the tasks and apply pagination, if required
        tasks = Task.objects.filter(is_deleted=False).order_by("-id")
        if isinstance(offset, int) and isinstance(limit, int):
            total = tasks.count()
            tasks = tasks[total - offset - limit : total - offset]

        # Create data list of all tasks and return
        data = []
        try:
            for task in tasks:
                data.append(
                    {
                        "id": task.id,
                        "title": task.title,
                        "description": task.description,
                        "status": task.status,
                    }
                )
        except Exception as e:
            # Return 500 in case of any error during resolving db object
            return JsonResponse({"error": str(e)}, status=500)
        return JsonResponse({"data": data})


class TaskDetailView(View):
    """
    Handle retrieval, updation and deletion of single task object by id.

    Params:
    task_id: int
        The id of the task to be retrieved.
    """

    def get(self, request, task_id):
        """
        Retrieve a task by its id from db.
        It returns JSON response with data of the task or an error message if the task does not exist or is deleted.
        """

        # Get the task object and return serialized JSON or raise a 404 error if not found or deleted
        task = get_object_or_404(Task, id=task_id, is_deleted=False)
        data = {
            "id": task.id,
            "title": task.title,
            "description": task.description,
            "status": task.status,
        }
        return JsonResponse({"data": data})

    def post(self, request, task_id):
        """
        Update a task by id.
        It returns the updated task with success message or an error with status 400 if the POST data is invalid.
        """

        form = TaskForm(request.POST)
        if form.is_valid():
            data = form.cleaned_data
        else:
            data = json.loads(form.errors.as_json())
            return JsonResponse({"error": data}, status=400)

        # Get the task object and update the db or raise a 404 error if not found or deleted
        task = get_object_or_404(Task, id=task_id, is_deleted=False)
        task.title = data["title"]
        task.description = data["description"]
        task.status = data["status"]
        task.save()

        # Return a JSON response with the updated task data and task id
        data["id"] = task.id
        return JsonResponse({"data": data, "message": "Task updated successfully"})

    def delete(self, request, task_id):
        """
        Delete a task by id.
        It returns id of the deleted task or raise 404 incase the task is not found or is already deleted.
        """

        task = get_object_or_404(Task, id=task_id, is_deleted=False)
        task.is_deleted = True
        task.save()
        return JsonResponse({"data": task.id, "message": "Task deleted successfully"})
