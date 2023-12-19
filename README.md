<h3 align="center">Basic Todo app</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/Nikhil-18/django-react-todo-app.svg)](https://github.com/Nikhil-18/django-react-todo-app/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Nikhil-18/django-react-todo-app.svg)](https://github.com/Nikhil-18/django-react-todo-app/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">Simple Todo app using Django, ReactJS and Bootstrap.
  <br>
</p>

## Table of Contents

- [About](#about)
- [Front-End (ReactJS)](#front-end-reactjs)
- [Back-End (Django)](#back-end-django)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)

## About

- **User-Friendly Interface:** Create, update, and delete tasks effortlessly with a clean and intuitive UI.
- **Filter Tasks:** Use the filter or dropdown to sort tasks by status, including options like "All," "To Do," "In Progress," and "Done."
- **Responsive Design:** The application is designed to work seamlessly on both desktop and mobile devices.
- **Smooth User Experience:** Enjoy smooth and responsive interactions, including form validation to ensure data integrity.
- **Styling:** The application is styled using Bootstrap for a modern and visually appealing look.

## Front-End (ReactJS)

1. **User Interface:**
    - **Form for Creating Tasks:** Fill in the title, description, and status to create a new task.
    - **List of Tasks:** View tasks and update their status or delete them.
    - **Filter Dropdown:** Filter tasks by status, including "All," "To Do," "In Progress," and "Done."

2. **User Experience:**
    - **Form Validation:** Ensure tasks cannot be created without a title.

3. **Styling:**
    - **CSS Framework:** Bootstrap is used for styling.
    - **Responsive Design:** The application is designed to work well on desktop and mobile devices.

## Back-End (Django)

1. **API Development:**
    - **RESTful API:** Handle CRUD operations for tasks.

2. **Data Storage:**
    - **Database:** Utilize Django's built-in SQLite for data storage.

3. **Validation:**
    - **Server-Side Validation:** Ensure task data is valid before saving it to the database.

4. **Error Handling:**
    - **Appropriate Responses:** Handle errors by sending appropriate messages and status codes.

## Prerequisites

- Node and npm
- Python/conda environment

## Getting Started

To get started with the Task Management Application, follow these steps:

1. Clone the repository: `git clone https://github.com/Nikhil-18/django-react-todo-app.git`
2. Go to `frontend` directory
3. Install dependencies: `npm install`
4. Go to `backend` directory
5. Install dependencies: `pip install -r requirements.txt` (This will require setup of python environment)
6. Set up the database: `python manage.py migrate`
7. Start the development server: `npm start` (for React) and `python manage.py runserver` (for Django)

## Usage

1. Open the application in your web browser. The server should be reachable on `http://localhost:3000/`
2. Use the form to create new tasks, update task statuses, and delete tasks.
3. Filter tasks by status using the dropdown menu.

## Testing

A basic test has been written to check the correctness of GET and POST APIs. Use the following commands to run the tests:

```sh
python manage.py test
```

## ⛏️ Built Using <a name = "built_using"></a>

- [Django](https://www.djangoproject.com/) - Web Server
- [SQLite](https://www.sqlite.org/) - Database
- [ReactJS](https://react.dev/) - Frontend UI
- [Bootstrap](https://getbootstrap.com/) - CSS Framework

## License

This project is licensed under the [MIT License](LICENSE).
