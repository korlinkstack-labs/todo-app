from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

# Social Login Adaption Classes
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.twitter_oauth2.views import TwitterOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView

@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    """Handles standard 'Create One' account registration."""
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response({"error": "Username and password are required."}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already taken."}, status=status.HTTP_400_BAD_REQUEST)

    User.objects.create_user(username=username, password=password)
    return Response({"message": "Registration successful!"}, status=status.HTTP_201_CREATED)

# Social Endpoint Connectors
class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter

class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter

class XLogin(SocialLoginView):
    adapter_class = TwitterOAuth2Adapter
