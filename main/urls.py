from django.urls import path
from . import views

urlpatterns = [
  path('',views.Index,name='index'),
  path('services/',views.BusinessServices,name='services'),
  path('about/',views.About,name='about'),
  path('contact/',views.Contact,name='contact'),
  path('account',views.Account,name='account'),
  path('register/<int:id>/',views.AccountWithPay,name='register'),
]
