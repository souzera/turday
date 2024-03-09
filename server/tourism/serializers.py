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
    
class PontoTuristicoSerializer(serializers.ModelSerializer):
    
    imagens = ImagemSerializer(many=True, read_only=True)
    
    class Meta:
        model = PontoTuristico
        fields = ('id', 'nome', 'cidade', 'descricao', 'endereco', 'latitude', 'longitude', 'infos', 'imagens')