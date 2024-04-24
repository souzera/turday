from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseRedirect
from django.views.generic import View
from django.conf import settings
from rest_framework import viewsets

from .serializers import *
import os

# Create your views here.

from magic import magic
magic = magic.Magic(mime=True)

class MediaView(View):
    def get(self, request, *args, **kwargs):

        print(f'kwargs: {kwargs}')

        try:
            path = request.GET['path']
        except KeyError:
            return HttpResponseBadRequest("You must provide a 'path' parameter.")

        media_path = os.path.join(settings.MEDIA_ROOT, path)
        print(f'media_path: {media_path}')

        try:
            with open(media_path, 'rb') as file:
                content_type = mime.from_file(media_path)
                print(f'content_type: {content_type}')
                response = HttpResponse(file.read(), content_type=content_type)
                return response
        except:
            print(f'Error: {path}')
            return HttpResponseRedirect(path)

class CidadeViewSet(viewsets.ModelViewSet):
    serializer_class = CidadeSerializer
    queryset = Cidade.objects.all()
        
class PontoTuristicoViewSet(viewsets.ModelViewSet):
    serializer_class = PontoTuristicoSerializer
    queryset = PontoTuristico.objects.all()

class EventoViewSet(viewsets.ModelViewSet):
    serializer_class = EventoSerializer
    queryset = Evento.objects.all()

class GuiaViewSet(viewsets.ModelViewSet):
    serializer_class = GuiaSerializer
    queryset = Guia.objects.all()

class ServicoViewSet(viewsets.ModelViewSet):
    serializer_class = ServicoSerializer
    queryset = Servico.objects.all()
    