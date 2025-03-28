from django.contrib.auth.models import User
from django.db import models

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    phone_number = models.CharField(max_length=15)

    def __str__(self):
        return self.user.username


class FoundItem(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    date_found = models.DateField()
    found_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="found_items")

    def __str__(self):
        return self.title


class LostItem(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    date_lost = models.DateField()
    lost_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="lost_items")

    def __str__(self):
        return self.title