from django.shortcuts import render , redirect
from django.contrib.auth import login,logout, authenticate
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import PasswordChangeForm,update_session_auth_hash
from django.contrib.auth.models import User
from .forms import CreateUserForm ,UpdateUserForm
from .models import UserProfile
from django.contrib import messages

# Create your views here.

@login_required
def Profile(request):
    context ={}
    template_name = 'profile.html'
    context['title'] = "Profile"
    return render(request,template_name,context)

def Login(request):
    context = {}
    context['title'] = 'Login'
    if request.user.is_authenticated:
        messages.info(request,'You have been already logged in')
        return redirect('/')
    if request.method == 'GET':
        global nxt
        nxt = request.GET.get('next')
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request,username=username, password=password)
        if user is not None:
            login(request,user)
            try:
                if nxt:
                    return redirect(nxt)
                else:
                    return redirect('dashboard')
            except:
                pass
        else:
            messages.error(request,'Username or maybe Password is incorrect')
    return render(request,'login.html',context)


@login_required
def Logout(request):
    logout(request)
    return redirect('/')


def SignUp(request):
    context = {}
    context['title'] = 'Create Account'
    if request.user.is_authenticated:
        messages.info(request,'You have been already registered')
        return redirect('index')
    form = CreateUserForm()
    context['form'] = form
    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            email = form.cleaned_data.get('email')
            password = form.cleaned_data.get('password')
            user_created = User.objects.get(email=email)
            user = authenticate(request,username=user_created.username, password=password)
            login(request,user_created)
            messages.success(request,'Account succesfully created')
            return redirect('dashboard')
        else:
            context['form'] = form
            print(form.errors)
            return render(request, 'login.html',context)
    return render(request, 'login.html',context)

@login_required
def EditProfile(request):
    context = {}
    template_name = 'edit-profile.html'
    context['title'] = 'Edit Profile'
    form=UpdateUserForm(request.POST or None,instance=request.user)
    context['form'] = form
    if request.method=='POST':
        form = UpdateUserForm(request.POST,instance=request.user)
        if form.is_valid():
            form.save()
            messages.success(request,'Profilen blev opdateret')
            return redirect('profile')
        else:
            context['form']=form
            return redirect('edit-profile')
    return render(request,template_name,context)


@login_required
def ChangePassword(request):
    context = {}
    template_name = 'changepassword.html'
    context['title'] = 'Change Password'
    form = PasswordChangeForm(request.user)
    context['form'] = form
    if request.method == 'POST':
        form = PasswordChangeForm(request.user,request.POST)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request,user)
            messages.success(request,'Your password was successfully updated!')
            return redirect('profile')
    return render(request,template_name,context)