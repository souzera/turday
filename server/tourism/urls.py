from .views import MediaView
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import *

router = DefaultRouter()

router.register(r'cidade', CidadeViewSet, basename='cidade')
router.register(r'pontoturistico', PontoTuristicoViewSet, basename='pontoturistico')
router.register(r'evento', EventoViewSet, basename='evento')
router.register(r'guia', GuiaViewSet, basename='guia')
router.register(r'servico', ServicoViewSet, basename='servico')

urlpatterns = [
    path('uploads/', MediaView.as_view()),
    path('', include(router.urls)),
]