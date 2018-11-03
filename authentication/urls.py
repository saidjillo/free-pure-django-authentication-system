from django.conf.urls import url

from authentication import views


app_name = 'accounts'


urlpatterns = [
    url(r'^login/', views.login_user, name='login'),
    url(r'^logout/', views.logout_user, name='logout'),
    url(r'^register/', views.register_user, name='register'),
    url(r'^settings/', views.edit_user_profile, name='settings'),
    url(r'^password/', views.change_password, name='change_password'),
    url(r'^author/', views.author, name='author'),
    url(r'^education', views.education, name='education'),
    url(r'^contact/saidjillo', views.contact_me, name='contacts'),
    url(r'^vision/', views.my_vision, name='vision'),
]