from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseRedirect
from django.views.generic import View
from django.conf import settings
from rest_framework import viewsets

from .serializers import *


import os

# Create your views here.

import magic
mime = magic.Magic(mime=True)

class MediaView(View):
    def get(self, request):

        try:
            path = request.GET['path']
        except KeyError:
            return HttpResponseBadRequest("You must provide a 'path' parameter.")

        media_path = os.path.join(settings.MEDIA_ROOT, path)

        try:
            with open(media_path, 'rb') as file:
                content_type = mime.from_file(media_path)
                response = HttpResponse(file.read(), content_type=content_type)
                return response
        except:
            return HttpResponseRedirect(path)
        
class PontoTuristicoViewSet(viewsets.ModelViewSet):
    
    serializer_class = PontoTuristicoSerializer
    
    queryset = PontoTuristico.objects.all()

    