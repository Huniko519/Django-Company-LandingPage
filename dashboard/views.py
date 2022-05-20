from django.shortcuts import render , redirect
from django.contrib import messages
from users.models import UserProfile
from django.contrib.auth.decorators import login_required
from .models import (CompanyInformation
,YourBusinessRecommendation
,YourCurrentTradelines
,VudokeBusinessIntelligenceScore
,BusinessReports
,UpdateYourCompanyInformation,
Dispute,VukodeScore)

# Create your views here.

def index(request):
  score = VukodeScore.objects.filter(user=request.user).first()
  recommendation = YourBusinessRecommendation.objects.filter(user=request.user)
  context = {}
  context['score'] = score
  context['recommendation'] = recommendation
  return render(request, 'index.html',context)

@login_required
def Profile(request):
  context = {}
  user_profile, _ = UserProfile.objects.get_or_create(user=request.user)
  context['user_profile'] = user_profile
  if request.method == 'POST':
    full_name = request.POST.get('full_name')
    email = request.POST.get('email')
    phone = request.POST.get('phone')
    password = request.POST.get('password')
    country = request.POST.get('country')
    user = request.user
    user.first_name = full_name
    user.email = email
    user_profile.phone = phone
    user_profile.country = country
    user.set_password(password)
    user_profile.save()
    user.save()
    messages.success(request, 'Your profile has been updated.')
  return render(request, 'userprofile.html',context)

# @login_required
# def YourBusinessReport(request):
#   context = {}
#   reports = BusinessReports.objects.filter(user=request.user)
#   context['reports'] = reports
#   return render(request, 'business-credit-report.html',context)

@login_required
def BusinessCreditReports(request):
  reports = BusinessReports.objects.filter(user=request.user)
  context = {}
  context['reports'] = reports
  score = VudokeBusinessIntelligenceScore.objects.filter(user=request.user).first()
  context['score'] = score
  company = CompanyInformation.objects.filter(user=request.user).first()
  context['company'] = company
  tradelines = YourCurrentTradelines.objects.filter(user=request.user)
  context['tradelines'] = tradelines
  return render(request, 'business-credit-report.html',context)

@login_required
def YourCompanyInformation(request):
  company = CompanyInformation.objects.filter(user=request.user).first()
  context = {}
  context['company'] = company
  return render(request, 'view-company-information.html',context)

@login_required
def AddBusinessTradelines(request):
  tradelines = YourCurrentTradelines.objects.filter(user=request.user)
  context = {}
  context['tradelines'] = tradelines
  return render(request, 'dashboard/addbusinesstradelines.html',context)

@login_required
def DisputeView(request):
  context = {}
  if request.method == 'POST':
    business_name = request.POST.get('business_name')
    business_email = request.POST.get('business_email')
    business_phone = request.POST.get('business_phone')
    reason_of_dispute = request.POST.get('reason_of_dispute')
    Dispute.objects.create(
      business_name = business_name,
      business_email = business_email,
      business_phone = business_phone,
      reason_of_dispute = reason_of_dispute)
  tradelines = YourCurrentTradelines.objects.filter(user=request.user)
  context['tradelines'] = tradelines
  return render(request, 'dispute-business-report.html',context)

@login_required
def UpdateCompanyInformation(request):
  context = {}
  company  = UpdateYourCompanyInformation.objects.filter(user=request.user).first()
  context['company'] = company
  return render(request, 'update-company-information.html',context)


@login_required
def CurrentBusinessTradelines(request):
  context = {}
  tradelines = YourCurrentTradelines.objects.filter(user=request.user)
  context['tradelines'] = tradelines
  return render(request, 'view-current-business-tradelines.html',context)

@login_required
def CancelMembership(request):
  request.user.userprofile.paid = False
  request.user.userprofile.save()
  return redirect('/dashboard/')

@login_required
def UpgradeMembership(request):
  return redirect('/')