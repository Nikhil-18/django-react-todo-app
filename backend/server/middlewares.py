from django.middleware.csrf import get_token


class CSRFTokenMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Attaching CSRF token as a cookie here
        response = self.get_response(request)
        response.set_cookie("csrftoken", get_token(request))
        return response
