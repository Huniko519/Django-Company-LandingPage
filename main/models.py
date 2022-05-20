from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Plan(models.Model):
    plan_name = models.CharField(max_length=100)
    stripe_id = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    time = models.CharField(max_length=100,default='month')
    valid = models.CharField(max_length=100,default='monthly')

    def __str__(self):
        return self.plan_name

class StripeCustomer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,related_name='userstripe')
    stripeCustomerId = models.CharField(max_length=255)
    stripeSubscriptionId = models.CharField(max_length=255)

    def __str__(self):
        return self.user.username