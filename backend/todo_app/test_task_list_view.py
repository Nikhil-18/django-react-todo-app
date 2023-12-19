from django.test import TestCase
from django.urls import reverse
from .models import Task


class TaskListViewTest(TestCase):
    def setUp(self):
        Task.objects.create(title="Task 1", description="Test task 1", status="To Do")
        Task.objects.create(title="Task 2", description="Test task 2", status="Done")

    def test_post_valid_data(self):
        """
        Test creation of tasks with valid data.
        Response received should have: status=200 and id=3.
        Database should have the id=3 present.
        Database should have title="Task 3" where id=3.
        """

        form_data = {
            "title": "Task 3",
            "description": "Test task 3",
            "status": "In Progress",
        }
        response = self.client.post(reverse("task-list"), form_data)

        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(
            response.content,
            {
                "data": {
                    "id": 3,
                    "title": "Task 3",
                    "description": "Test task 3",
                    "status": "In Progress",
                },
                "message": "Task created successfully",
            },
        )

        task_3 = Task.objects.filter(id=3)
        self.assertTrue(task_3.exists())
        self.assertTrue(task_3[0].title, "Task 3")

    def test_post_invalid_data(self):
        """
        Test creation of tasks with invalid data.
        Response received should have: status=400.
        Database should have the 2 records present.
        """

        form_data = {
            "title": "",
            "description": "Test task 3",
            "status": "In Progress",
        }
        response = self.client.post(reverse("task-list"), form_data)
        self.assertEqual(response.status_code, 400)

        self.assertJSONEqual(
            response.content,
            {
                "error": {
                    "title": [
                        {"message": "This field is required.", "code": "required"}
                    ]
                }
            },
        )
        self.assertEqual(Task.objects.count(), 2)

    def test_get_all_tasks(self):
        """
        Test retrival of all tasks.
        Response code should be 200.
        Response data should contain the 2 tasks created in setup.
        """

        response = self.client.get(reverse("task-list"))
        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(
            response.content,
            {
                "data": [
                    {
                        "id": 2,
                        "title": "Task 2",
                        "description": "Test task 2",
                        "status": "Done",
                    },
                    {
                        "id": 1,
                        "title": "Task 1",
                        "description": "Test task 1",
                        "status": "To Do",
                    },
                ]
            },
        )

    def test_get_paginated_tasks(self):
        """
        Test retrival of all tasks with pagination.
        Response code should be 200.
        Response data should contain the first task created in setup when
        offset is 0 and limit 1.
        """

        response = self.client.get(reverse("task-list") + "?offset=0&limit=1")
        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(
            response.content,
            {
                "data": [
                    {
                        "id": 1,
                        "title": "Task 1",
                        "description": "Test task 1",
                        "status": "To Do",
                    }
                ]
            },
        )
