from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class UserProfile(models.Model):
  user = models.OneToOneField(User,on_delete=models.CASCADE,related_name='userprofile')
  phone = models.CharField(max_length=20)
  country = models.CharField(max_length=100)
  gender = models.CharField(max_length=10,null=True,blank=True)
  city = models.CharField(max_length=50,null=True,blank=True)
  address = models.CharField(max_length=100,null=True,blank=True)
  paid = models.BooleanField(default=False)

  def __str__(self):
    return self.user.username