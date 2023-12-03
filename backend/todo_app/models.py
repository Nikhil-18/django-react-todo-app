from django.db import models

# Create your models here.


class Task(models.Model):
    STATUS_CHOICES = (
        ("To Do", "To Do"),
        ("In Progress", "In Progress"),
        ("Done", "Done"),
    )

    title = models.CharField(max_length=255)
    description = models.TextField()
    status = models.CharField(
        max_length=100,
        choices=STATUS_CHOICES,
    )
    is_deleted = models.BooleanField(default=False)
    creation_time = models.DateTimeField(auto_created=True, auto_now=True)
    modification_time = models.DateTimeField(auto_created=True, auto_now_add=True)

    def __str__(self):
        return self.title
