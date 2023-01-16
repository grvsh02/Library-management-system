from django.conf import settings
from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('add/', views.add, name='add'),
]