from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username','first_name','last_name','email','password1','password2']
        widgets = {
            'username':forms.TextInput(attrs={'required':True,'placeholder':'Username'}),
            'first_name':forms.TextInput(attrs={'required':True,'placeholder':'First Name'}),
            'last_name':forms.TextInput(attrs={'required':True,'placeholder':'Last Name'}),
            'email':forms.TextInput(attrs={'required':True,'placeholder':'Email'}),
            'password1':forms.PasswordInput(attrs={'id':'password1','required':True}),
            'password2':forms.PasswordInput(attrs={'id':'password2','required':True}),
        }
    def __init__(self, *args, **kwargs):
        super(CreateUserForm, self).__init__(*args, **kwargs)
        self.fields['password1'].widget = forms.PasswordInput(attrs={'placeholder':'Password','minlength':'10'})
        self.fields['password2'].widget = forms.PasswordInput(attrs={'placeholder':'Password Confirm','minlength':'10'})

class UpdateUserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username','first_name','last_name','email']
        widgets = {
            'username':forms.TextInput(attrs={'required':True}),
            'first_name':forms.TextInput(attrs={'required':True}),
            'last_name':forms.TextInput(attrs={'required':True}),
            'email':forms.TextInput(attrs={'required':True}),
        }
