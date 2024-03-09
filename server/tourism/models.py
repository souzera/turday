from django.db import models
from  uuid import uuid4
from core.utils import RenomearComUUID

# Create your models here.

# TODO: (Ver depois) https://studygyaan.com/django/how-to-secure-media-files-in-django#google_vignette
class Imagem(models.Model):
    class Meta:
        verbose_name_plural = 'Imagens'
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    legenda = models.CharField(max_length=100)
    imagem = models.ImageField(upload_to=RenomearComUUID('images/'), null=True, blank=True)
    url = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.legenda

class Info(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    title = models.CharField(max_length=100)
    descricao = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title + ": " + self.descricao

class Categoria(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=100)
    descricao = models.TextField(null=True, blank=True)
    icon = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.nome
    
class Cidade(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=100)
    estado = models.CharField(max_length=100)
    pais = models.CharField(max_length=100)
    latitude = models.FloatField(null=False, blank=False, default=0.0)
    longitude = models.FloatField(null=False, blank=False, default=0.0)
    raio = models.FloatField(null=False, blank=False, default=20.0)

    def __str__(self):
        return self.nome + ' - ' + self.estado + ' - ' + self.pais
    
class PontoTuristico(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=100)
    cidade = models.ForeignKey(Cidade, on_delete=models.CASCADE)
    descricao = models.TextField()
    endereco = models.CharField(max_length=512, default='N/A')
    latitude = models.FloatField(null=False, blank=False, default=0.0)
    longitude = models.FloatField(null=False, blank=False, default=0.0)
    infos = models.ManyToManyField(Info, blank=True, related_name='pontos_turisticos')
    imagens = models.ManyToManyField(Imagem, blank=True, related_name='pontos_turisticos')

    def __str__(self):
        return self.nome + ' - ' + self.cidade.nome
    
class Evento(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=100)
    cidade = models.ForeignKey(Cidade, on_delete=models.CASCADE)
    descricao = models.TextField()
    data_inicio = models.DateTimeField()
    data_fim = models.DateTimeField(null=True, blank=True)
    infos = models.ManyToManyField(Info, blank=True, related_name='eventos')
    imagens = models.ManyToManyField(Imagem, blank=True, related_name='eventos')

    def __str__(self):
        return self.nome + ' - ' + self.cidade.nome
    
class Guia(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=100)
    cidade = models.ForeignKey(Cidade, on_delete=models.CASCADE)
    contato = models.CharField(max_length=100)
    rating = models.FloatField(null=False, blank=False, default=0.0)

    def __str__(self):
        return self.nome + ' - ' + self.cidade.nome
    
class Servico(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=100)
    cidade = models.ForeignKey(Cidade, on_delete=models.CASCADE)
    descricao = models.TextField(null=True, blank=True)
    endereco = models.CharField(max_length=512, null=True, blank=True)
    contato = models.CharField(max_length=100)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    infos = models.ManyToManyField(Info, blank=True, related_name='servicos')
    imagens = models.ManyToManyField(Imagem, blank=True, related_name='servicos')

    def __str__(self):
        return self.nome + ' - ' + self.cidade.nome

    