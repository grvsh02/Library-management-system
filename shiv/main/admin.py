from django.contrib import admin
from .models import Books, Library, UserVisit, UserRole

admin.site.register(Books)
admin.site.register(UserRole)
admin.site.register(Library)
admin.site.register(UserVisit)

