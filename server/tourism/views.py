from django.shortcuts import render
from django.http import JsonResponse, HttpResponse, HttpResponseBadRequest, HttpResponseRedirect
from django.views.generic import View
from django.conf import settings
from rest_framework import viewsets
from rest_framework.decorators import action
import json

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

class TuristaViewSet(viewsets.ModelViewSet):
    serializer_class = TuristaSerializer

    def get_queryset(self):
        queryset = Turista.objects.all()
        token = self.request.query_params.get('token', None)
        if token is not None:
            queryset = queryset.filter(token=token)
        return queryset

class ComentarioViewSet(viewsets.ModelViewSet):
    serializer_class = ComentarioSerializer
    queryset = Comentario.objects.all()

class LikeViewSet(viewsets.ModelViewSet):
    serializer_class = LikeSerializer

    def get_queryset(self):
        queryset = Like.objects.all()
        turista_id = self.request.query_params.get('turista', None)
        if turista_id is not None:
            turista = Turista.objects.get(id=turista_id)
            queryset = queryset.filter(turista=turista)
        return queryset
    

class CidadeViewSet(viewsets.ModelViewSet):
    serializer_class = CidadeSerializer
    queryset = Cidade.objects.all()
        
class PontoTuristicoViewSet(viewsets.ModelViewSet):
    serializer_class = PontoTuristicoSerializer
    queryset = PontoTuristico.objects.all()

    @action(methods=['post'], detail=True)
    def add_comment(self, request, pk=None):
        ponto_turistico = self.get_object()
        body =  request.body.decode('utf-8')
        comment_id = json.loads(body)['comment_id']
        comment = Comentario.objects.get(id=comment_id)
        ponto_turistico.comentarios.add(comment)
        ponto_turistico.save()
        return JsonResponse({'status': 'comment created'})

    @action(methods=['post'], detail=True)
    def toggle_like(self, request, pk=None):
        pontoturistico = self.get_object()
        body =  request.body.decode('utf-8')
        like_id = json.loads(body)['like_id']
        try:
            like = Like.objects.get(id=like_id)
            response = {}
            if pontoturistico.likes.filter(id=like_id).exists():
                pontoturistico.likes.remove(like)
                response = {'status': 'like removed'}
            else:
                pontoturistico.likes.add(like)
                response = {'status': 'like added'}
            pontoturistico.save()
            return JsonResponse(response)
        except:
            return JsonResponse({'status': 'like not updated'})

class EventoViewSet(viewsets.ModelViewSet):
    serializer_class = EventoSerializer
    queryset = Evento.objects.all()

    @action(methods=['post'], detail=True)
    def add_comment(self, request, pk=None):
        evento = self.get_object()
        body =  request.body.decode('utf-8')
        comment_id = json.loads(body)['comment_id']
        comment = Comentario.objects.get(id=comment_id)
        evento.comentarios.add(comment)
        evento.save()
        return JsonResponse({'status': 'comment created'})

    @action(methods=['post'], detail=True)
    def toggle_like(self, request, pk=None):
        evento = self.get_object()
        body =  request.body.decode('utf-8')
        like_id = json.loads(body)['like_id']
        try:
            like = Like.objects.get(id=like_id)
            response = {}
            if evento.likes.filter(id=like_id).exists():
                evento.likes.remove(like)
                response = {'status': 'like removed'}
            else:
                evento.likes.add(like)
                response = {'status': 'like added'}
            evento.save()
            return JsonResponse(response)
        except:
            return JsonResponse({'status': 'like not updated'})

class GuiaViewSet(viewsets.ModelViewSet):
    serializer_class = GuiaSerializer
    queryset = Guia.objects.all()

    @action(methods=['post'], detail=True)
    def toggle_like(self, request, pk=None):
        guia = self.get_object()
        body =  request.body.decode('utf-8')
        like_id = json.loads(body)['like_id']
        try:
            like = Like.objects.get(id=like_id)
            response = {}
            if guia.likes.filter(id=like_id).exists():
                guia.likes.remove(like)
                response = {'status': 'like removed'}
            else:
                guia.likes.add(like)
                response = {'status': 'like added'}
            guia.save()
            return JsonResponse(response)
        except:
            return JsonResponse({'status': 'like not updated'})

class ServicoViewSet(viewsets.ModelViewSet):
    serializer_class = ServicoSerializer
    queryset = Servico.objects.all()

    @action(methods=['post'], detail=True)
    def add_comment(self, request, pk=None):
        servico = self.get_object()
        body =  request.body.decode('utf-8')
        comment_id = json.loads(body)['comment_id']
        comment = Comentario.objects.get(id=comment_id)
        servico.comentarios.add(comment)
        servico.save()
        return JsonResponse({'status': 'comment created'})

    @action(methods=['post'], detail=True)
    def toggle_like(self, request, pk=None):
        servico = self.get_object()
        body =  request.body.decode('utf-8')
        like_id = json.loads(body)['like_id']
        try:
            like = Like.objects.get(id=like_id)
            response = {}
            if servico.likes.filter(id=like_id).exists():
                servico.likes.remove(like)
                response = {'status': 'like removed'}
            else:
                servico.likes.add(like)
                response = {'status': 'like added'}
            servico.save()
            return JsonResponse(response)
        except:
            return JsonResponse({'status': 'like not updated'})

class CategoriaViewSet(viewsets.ModelViewSet):
    serializer_class = CategoriaSerializer
    queryset = Categoria.objects.all()
    