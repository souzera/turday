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
    imagem = models.ImageField(upload_to=RenomearComUUID(''), null=True, blank=True)
    url = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.legenda

class Turista(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    login = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=100, unique=True)
    token = models.CharField(max_length=100, unique=True)
    avatar = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.login

class Info(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    title = models.CharField(max_length=100, null=True, blank=True)
    descricao = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title + ": " + self.descricao

class Like(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    turista = models.ForeignKey(Turista, on_delete=models.CASCADE)
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.turista.login + ": " + str(self.status)

class Comentario(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    turista = models.ForeignKey(Turista, on_delete=models.CASCADE)
    texto = models.TextField()
    data = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.turista.login + ": " + self.texto

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
    likes = models.ManyToManyField(Like, blank=True, related_name='pontos_turisticos')
    comentarios = models.ManyToManyField(Comentario, blank=True, related_name='pontos_turisticos')

    def __str__(self):
        return self.nome + ' - ' + self.cidade.nome
    
class Evento(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=100)
    cidade = models.ForeignKey(Cidade, on_delete=models.CASCADE)
    descricao = models.TextField()
    abertura = models.DateTimeField(null=True, blank=True)
    encerramento = models.DateTimeField(null=True, blank=True)
    infos = models.ManyToManyField(Info, blank=True, related_name='eventos')
    imagens = models.ManyToManyField(Imagem, blank=True, related_name='eventos')
    likes = models.ManyToManyField(Like, blank=True, related_name='eventos')
    comentarios = models.ManyToManyField(Comentario, blank=True, related_name='eventos')

    def __str__(self):
        return self.nome + ' - ' + self.cidade.nome
    
class Guia(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=100)
    cidade = models.ForeignKey(Cidade, on_delete=models.CASCADE)
    contato = models.CharField(max_length=100)
    rating = models.FloatField(null=False, blank=False, default=0.0)
    avatar = models.ForeignKey(Imagem, on_delete=models.CASCADE, null=True, blank=True)
    likes = models.ManyToManyField(Like, blank=True, related_name='guias')
    comentarios = models.ManyToManyField(Comentario, blank=True, related_name='guias')

    def __str__(self):
        return self.nome + ' - ' + self.cidade.nome
    
class Servico(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=100)
    cidade = models.ForeignKey(Cidade, on_delete=models.CASCADE)
    descricao = models.TextField(null=True, blank=True)
    endereco = models.CharField(max_length=512, null=True, blank=True)
    latitude = models.FloatField(null=False, blank=False, default=0.0)
    longitude = models.FloatField(null=False, blank=False, default=0.0)
    contato = models.CharField(max_length=100)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    infos = models.ManyToManyField(Info, blank=True, related_name='servicos')
    imagens = models.ManyToManyField(Imagem, blank=True, related_name='servicos')
    likes = models.ManyToManyField(Like, blank=True, related_name='servicos')
    comentarios = models.ManyToManyField(Comentario, blank=True, related_name='servicos')

    def __str__(self):
        return self.nome + ' - ' + self.cidade.nome

    