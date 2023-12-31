from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    name  = models.CharField(max_length=255)
    email  = models.CharField(unique=True, max_length=255)
    password  = models.CharField(max_length=255)
    usertype = models.CharField(max_length=255, default="employee")
    username = None
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []