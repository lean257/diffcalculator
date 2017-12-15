from django.db import models
# Currently only store the input number and the occurence in the db. 
# Calculating the result per request "on the fly" is constant time and efficient enough that we don't need to store result in the db. 
class Difference(models.Model):
  number = models.IntegerField(primary_key=True)
  occurence = models.IntegerField(default=0)
