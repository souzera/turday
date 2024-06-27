from rest_framework import serializers
from .models import *

class ImagemSerializer(serializers.ModelSerializer):
    
    url = serializers.SerializerMethodField()
    
    class Meta:
        model = Imagem
        fields = ('id', 'legenda', 'url')
    
    
    def get_url(self, obj):
        if obj.imagem:
            return obj.imagem.url
        return obj.url

class InfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Info
        fields = ('id', 'title', 'descricao')

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ('id', 'nome', 'descricao', 'icon')

class CidadeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cidade
        fields = ('id', 'nome', 'estado', 'pais', 'latitude', 'longitude', 'raio')

class PontoTuristicoSerializer(serializers.ModelSerializer):
    
    imagens = ImagemSerializer(many=True, read_only=True)
    infos = InfoSerializer(many=True, read_only=True)
    cidade = CidadeSerializer(read_only=True)
    
    class Meta:
        model = PontoTuristico
        fields = ('id', 'nome', 'cidade', 'descricao', 'endereco', 'latitude', 'longitude', 'infos', 'imagens')

class EventoSerializer(serializers.ModelSerializer):
    cidade = CidadeSerializer(read_only=True)
    infos = InfoSerializer(many=True, read_only=True)
    imagens = ImagemSerializer(many=True, read_only=True)
    
    class Meta:
        model = Evento
        fields = ('id', 'nome', 'cidade', 'descricao', 'abertura', 'encerramento', 'infos', 'imagens')

class GuiaSerializer(serializers.ModelSerializer):

    avatar = ImagemSerializer(read_only=True)
    cidade = CidadeSerializer(read_only=True)

    class Meta:
        model = Guia
        fields = ('id', 'nome', 'cidade', 'contato', 'rating', 'avatar')

class ServicoSerializer(serializers.ModelSerializer):

    cidade = CidadeSerializer(read_only=True)
    categoria = CategoriaSerializer(read_only=True)
    infos = InfoSerializer(many=True, read_only=True)
    imagens = ImagemSerializer(many=True, read_only=True)

    class Meta:
        model = Servico
        fields = ('id', 'nome', 'descricao', 'cidade', 'endereco', 'latitude', 'longitude', 'contato', 'categoria', 'infos', 'imagens')