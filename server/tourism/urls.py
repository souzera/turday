from .views import MediaView
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import *

router = DefaultRouter()

router.register(r'pontoturistico', PontoTuristicoViewSet, basename='pontoturistico')

urlpatterns = [
    path('uploads/', MediaView.as_view()),
    path('', include(router.urls)),
]