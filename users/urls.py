from django.contrib import admin
from django.urls import path, include
from .views import Register, Login, GetUser, Logout, Test

urlpatterns = [
    path("register", Register),
    path("login", Login),
    path("user", GetUser),
    path("logout", Logout),
    path("test", Test)
]