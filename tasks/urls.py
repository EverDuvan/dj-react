from django.urls import include, path
from django.contrib import admin
from rest_framework import routers
from tasks import views
from rest_framework.documentation import include_docs_urls


router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'task')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title='Tasks API')),
    
]

