from django.http.response import HttpResponse
from django.shortcuts import render
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from django.conf import settings
from .models import Plan
from users.models import UserProfile
import json

# Create your views here.


def Index(request):
    context = {}
    basic = Plan.objects.filter(valid="basic")
    pro = Plan.objects.filter(valid="professional")
    context["title"] = "Home"
    context["basic"] = basic
    context["pro"] = pro
    return render(request, "main/index.html", context)


def Products(request):
    context = {}
    context["title"] = "Products"
    return render(request, "Products.html", context)


def BusinessServices(request):
    context = {}
    context["title"] = "Business Services"
    return render(request, "main/services.html", context)


def Contact(request):
    context = {}
    context["title"] = "Contact"
    return render(request, "main/contact-us.html", context)


def About(request):
    return render(request, "main/about-us.html", {})


def Account(request):
    if request.user.is_authenticated:
        messages.info(request, "You have been already logged in")
        return redirect("dashboard")
    if request.method == "GET":
        global nxt
        nxt = request.GET.get("next")
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            try:
                if nxt:
                    return redirect(nxt)
                else:
                    return redirect("dashboard")
            except:
                return redirect("dashboard")
        else:
            messages.error(request, "Username or maybe Password is incorrect")
    return render(request, "account.html", {})

@csrf_exempt
def AccountWithPay(request,id):
    plan = Plan.objects.get(id=id)
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        data = data.get('data')
        user_created = User.objects.create(username=data.get('username'),
                password=data.get('password'),
                email=data.get('email'),
                first_name=data.get('name'),
                )
        user_profile , _ = UserProfile.objects.get_or_create(user=user_created)
        user_profile.gender = data.get('gender')
        user_profile.city = data.get('city')
        user_profile.address = data.get('address')
        user_profile.country = data.get('country')
        user_profile.save()
        user = authenticate(request,username=user_created.username, password=data.get('password'))
        login(request,user_created)
        return JsonResponse("acccount created",status=200,safe=False)
    return render(request, "accountwithpay.html", {'plan':plan})
