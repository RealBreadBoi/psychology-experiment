from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('consent', views.consent, name='consent'),
    path('upload', views.uploadData, name='upload')
]