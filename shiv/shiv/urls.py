from django.contrib import admin
from django.urls import path, include, re_path as url

urlpatterns = [
    url(r'^api/', include('main.urls')),
    url(r'^accounts/', include('allauth.urls')),
    path('admin/', admin.site.urls),
    path('dj-rest-auth/', include('dj_rest_auth.urls'))
]