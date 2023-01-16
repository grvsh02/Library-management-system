from django.conf import settings
from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path, include

from . import views

urlpatterns = [
    path('add_user/', views.add_user, name='adduser'),
]