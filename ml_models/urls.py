from django.contrib import admin
from django.urls import path, include
from .views import Register, Login, GetUser, Logout, Test

urlpatterns = [
    path("/assetmanger", AM),
    path("/")
]