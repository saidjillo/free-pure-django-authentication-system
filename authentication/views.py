from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm, UserChangeForm, PasswordChangeForm

from .forms import UserSignUpForm, EditProfileForm
# Create your views here.

def login_user(request):
    if request.method == 'POST':
        username      = request.POST['username']
        password      = request.POST['password']

        user = authenticate(request , username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, ('You have been logged in successfully'))

            return redirect('home')
        else:
            messages.success(request, ('username or password is incorrect'))
            return redirect('accounts:login')



    else:
        return render(request, 'authentication/login.html')

    
def logout_user(request):
    logout(request)
    messages.success(request, ('You have been logged out successfully... Thank you for spending time on our site'))
    return redirect('home')
    

def register_user(request):
    # check if form is posted
    if request.method == 'POST':
        # set up the form and pass whatever the user has  posted
        form   =  UserSignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username  = form.cleaned_data['username']
            password  = form.cleaned_data['password1']

            user = authenticate(request, username=username, password=password)
            login(request, user)
            messages.success(request, ('You have been registere successfully...'))

            return redirect('home')

    else:
        # just return an empty form because has not posted anything
        form   = UserSignUpForm() 

    context    = {'form': form}
    return render(request, 'authentication/signup.html', context)


def edit_user_profile(request):
    if request.method == 'POST':
        form  = EditProfileForm(request.POST, instance=request.user)

        if form.is_valid():
            form.save()
   
            messages.success(request, ('Account has been edited...'))

            return redirect('home')
    else:
        form  = EditProfileForm(instance=request.user)

    context = {'form': form}   
    return render(request, 'authentication/edit_profile.html', context)


def change_password(request):
    
    if request.method == 'POST':
        form = PasswordChangeForm(data=request.POST, user=request.user)

        if form.is_valid():
            form.save()
            update_session_auth_hash(request, form.user)
            messages.success(request, ('You have edited your password'))

            return redirect('home')

    else:
        form  = PasswordChangeForm(user=request.user)

  
    context = {'form': form}
    return render(request, 'authentication/change_password.html', context)


def author(request):
    
    return render(request, 'authentication/author.html')


def education(request):
    
    return render(request, 'authentication/education.html')


def contact_me(request):
    
    return render(request, 'authentication/contacts.html')


def my_vision(request):
    return render(request, 'authentication/vision.html')
    
