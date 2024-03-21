from django.urls import include, path
from django.contrib import admin
from rest_framework import routers
from tasks import views


router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'task')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    
]

