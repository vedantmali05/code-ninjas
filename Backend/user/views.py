from django.shortcuts import render

# Create your views here.
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework_simplejwt.tokens import RefreshToken
from .models import UserProfile
from .serializers import UserSerializer
from django.contrib.auth.models import User
from .models import FoundItem, LostItem
from .serializers import FoundItemSerializer, LostItemSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView

# User Registration API


class RegisterUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Generate JWT Token for Login


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

# User Login API


class LoginUserView(GenericAPIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        
        user = authenticate(username=email, password=password)
        if user is not None:
            # Use the UserSerializer to serialize the user object
            user_serializer = UserSerializer(user)
            tokens = get_tokens_for_user(user)
            # Return the serialized user data along with the tokens
            return Response({
                "message": "Login Successful", 
                "tokens": tokens,
                "user": user_serializer.data  # Add serialized user data here
            })
        return Response({"error": "Invalid Credentials"}, status=status.HTTP_401_UNAUTHORIZED)


class FoundItemListView(generics.ListAPIView):
    queryset = FoundItem.objects.all()
    # return Response({"hello":"hello"})
    serializer_class = FoundItemSerializer
    

# Post a new found item


class PostFoundItemView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        print(request.data)
        serializer = FoundItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(found_by=request.user)
            return Response({"message": "Found item posted successfully"}, status=201)
        return Response(serializer.errors, status=400)
    
class LostItemListView(generics.ListAPIView):
    queryset = LostItem.objects.all()
    serializer_class = LostItemSerializer

# Post a new lost item
class PostLostItemView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = LostItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(lost_by=request.user)
            return Response({"message": "Lost item posted successfully"}, status=201)
        return Response(serializer.errors, status=400)