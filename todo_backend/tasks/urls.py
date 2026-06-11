from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView
from .views import register_user, GoogleLogin, FacebookLogin, XLogin

urlpatterns = [
    # Standard Login/Signup Routes
    path('auth/signup/', register_user, name='signup'),
    path('auth/login/', TokenObtainPairView.as_view(), name='login'),
    
    # Social Authorization Connections
    path('auth/google/', GoogleLogin.as_view(), name='google_login'),
    path('auth/facebook/', FacebookLogin.as_view(), name='facebook_login'),
    path('auth/x/', XLogin.as_view(), name='x_login'),
]
