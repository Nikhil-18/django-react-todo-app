import json

from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views import View

from .forms import TaskForm
from .models import Task


class TaskListView(View):
    # CREATE
    def post(self, request):
        form = TaskForm(request.POST)
        if form.is_valid():
            data = form.cleaned_data
        else:
            data = json.loads(form.errors.as_json())
            return JsonResponse({"error": data}, status=400)

        task = Task(**data)
        task.save()
        data["id"] = task.id
        return JsonResponse({"data": data, "message": "Task created successfully"})

    # READ all
    def get(self, request):
        offset = request.GET.get("offset")
        limit = request.GET.get("limit")
        offset = offset and int(offset)
        limit = limit and int(limit)
        tasks = Task.objects.filter(is_deleted=False).order_by("-id")
        if isinstance(offset, int) and isinstance(limit, int):
            tasks = tasks[offset : offset + limit]

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
            return JsonResponse({"error": str(e)}, status=500)
        return JsonResponse({"data": data})


class TaskDetailView(View):
    # READ by id
    def get(self, request, task_id):
        task = get_object_or_404(Task, id=task_id, is_deleted=False)
        data = {
            "id": task.id,
            "title": task.title,
            "description": task.description,
            "status": task.status,
        }
        return JsonResponse({"data": data})

    # UPDATE by id
    def post(self, request, task_id):
        form = TaskForm(request.POST)
        if form.is_valid():
            data = form.cleaned_data
        else:
            data = json.loads(form.errors.as_json())
            return JsonResponse({"error": data}, status=400)

        task = get_object_or_404(Task, id=task_id, is_deleted=False)
        task.title = data["title"]
        task.description = data["description"]
        task.status = data["status"]
        task.save()
        data["id"] = task.id
        return JsonResponse({"data": data, "message": "Task updated successfully"})

    # DELETE by id
    def delete(self, request, task_id):
        task = get_object_or_404(Task, id=task_id, is_deleted=False)
        task.is_deleted = True
        task.save()
        return JsonResponse({"data": task.id, "message": "Task deleted successfully"})
