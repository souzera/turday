from django.contrib import admin
from .models import *

@admin.register(Imagem)
class ImagemAdmin(admin.ModelAdmin):
    pass

@admin.register(Info)
class InfoAdmin(admin.ModelAdmin):
    pass

@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    pass

@admin.register(Cidade)
class CidadeAdmin(admin.ModelAdmin):
    pass

@admin.register(PontoTuristico)
class PontoTuristicoAdmin(admin.ModelAdmin):
    pass
    
@admin.register(Evento)
class EventoAdmin(admin.ModelAdmin):
    pass

@admin.register(Guia)
class GuiaAdmin(admin.ModelAdmin):
    pass

@admin.register(Servico)
class ServicoAdmin(admin.ModelAdmin):
    pass

