from .views import MediaView
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

from .views import *

router = DefaultRouter()

router.register(r'cidade', CidadeViewSet, basename='cidade')
router.register(r'pontoturistico', PontoTuristicoViewSet, basename='pontoturistico')
router.register(r'evento', EventoViewSet, basename='evento')
router.register(r'guia', GuiaViewSet, basename='guia')
router.register(r'servico', ServicoViewSet, basename='servico')

urlpatterns = [
    path('', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)