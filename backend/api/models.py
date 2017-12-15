from django.db import models

class Difference(models.Model):
  number = models.IntegerField(primary_key=True)
  occurence = models.IntegerField(default=0)
