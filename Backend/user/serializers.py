from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UserProfile ,FoundItem, LostItem


class UserSerializer(serializers.ModelSerializer):
    phone_number = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)  # To confirm password
    full_name = serializers.SerializerMethodField()  # To return full name

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'phone_number', 'full_name', 'password', 'password2']
        extra_kwargs = {'password': {'write_only': True}}

    def get_full_name(self, obj):
        # Ensure first_name and last_name are populated
        return f"{obj.first_name or ''} {obj.last_name or ''}".strip()  

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError("Passwords do not match")
        return data

    def create(self, validated_data):
        phone_number = validated_data.pop('phone_number')
        validated_data.pop('password2')  # Remove password2 field
        user = User.objects.create_user(**validated_data)  # Create user
        UserProfile.objects.create(user=user, phone_number=phone_number)  # Create profile
        return user

class FoundItemSerializer(serializers.ModelSerializer):
    found_by = serializers.ReadOnlyField(source='found_by.username')

    class Meta:
        model = FoundItem
        fields = ['id', 'title', 'description', 'location', 'date_found', 'found_by']


class LostItemSerializer(serializers.ModelSerializer):
    lost_by = serializers.ReadOnlyField(source='lost_by.username')

    class Meta:
        model = LostItem
        fields = ['id', 'title', 'description', 'location', 'date_lost', 'lost_by']