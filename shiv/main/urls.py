from django.urls import re_path as url, path, include
from . import views

urlpatterns = [
    url(r'^books/add/$', views.add_book, name="add_book"),
    url(r'^books/remove/$', views.remove_book, name="remove_book"),
    url(r'^books/update/$', views.update_book, name="update_book"),
    url(r'^books/get/$', views.get_books, name="get_books"),
    url(r'^book/get/$', views.get_book, name="get_book"),
    url(r'^book/issue/$', views.issue_book, name="issue_book"),
    url(r'^book/return/$', views.return_book, name="return_book"),
    url(r'^book/history/$', views.get_book_history, name="get_book_history"),
    url(r'^user/visit/in/$', views.user_visit_in, name="user_visit_in"),
    url(r'^user/visit/out/$', views.user_visit_out, name="user_visit_out"),
    url(r'^user/visit/history/$', views.get_user_history, name="get_user_history"),
]