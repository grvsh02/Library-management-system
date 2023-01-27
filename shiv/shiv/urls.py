from django.contrib import admin
from django.urls import path, include, re_path as url

urlpatterns = [
    url(r'^api/', include('main.urls')),
    path('admin/', admin.site.urls),
]