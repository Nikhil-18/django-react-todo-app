# Generated by Django 4.2.7 on 2023-12-03 13:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('modification_time', models.DateTimeField(auto_created=True, auto_now_add=True)),
                ('creation_time', models.DateTimeField(auto_created=True, auto_now=True)),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, null=True)),
                ('status', models.CharField(choices=[('To Do', 'To Do'), ('In Progress', 'In Progress'), ('Done', 'Done')], max_length=100)),
                ('is_deleted', models.BooleanField(default=False)),
            ],
        ),
    ]
