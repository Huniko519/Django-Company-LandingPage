from django.urls import path
from django.contrib.auth.views import (PasswordResetView,PasswordResetDoneView,PasswordResetConfirmView,PasswordResetCompleteView)
from . import views

urlpatterns = [
    path('logout/',views.Logout,name='logout'),
    path('login/',views.Login,name='login'),
    path('sign-up/',views.SignUp,name='signup'),
    path('edit-profile/',views.EditProfile,name='edit-profile'),
    path('change-password/',views.ChangePassword,name='change-password'),
    path('reset_password/',PasswordResetView.as_view(template_name='reset_password.html'),name='reset_password'),
    path('reset_password_sent/',PasswordResetDoneView.as_view(template_name='password_reset_done.html'),name='password_reset_done'),
    path('reset/<uidb64>/<token>/',PasswordResetConfirmView.as_view(),name='password_reset_confirm'),
    path('reset_password_complete/',PasswordResetCompleteView.as_view(),name='password_reset_complete'),
]