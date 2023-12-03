from django.urls import path
from . import views

urlpatterns = [
    path("", views.TaskListView.as_view(), name="task-list"),
    path("<int:task_id>/", views.TaskDetailView.as_view(), name="task-detail"),
]
