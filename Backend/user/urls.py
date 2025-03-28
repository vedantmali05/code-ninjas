from django.urls import path
from .views import RegisterUserView, LoginUserView, FoundItemListView, LostItemListView, PostFoundItemView, PostLostItemView


urlpatterns = [
    # Authentication APIs
    path('auth/register/', RegisterUserView.as_view(), name='register'),
    path('auth/login/', LoginUserView.as_view(), name='login'),

    
    # Found Item URLs
    path('items/found/', FoundItemListView.as_view(), name='found-items'),  # List all found items
    path('items/found/post/', PostFoundItemView.as_view(), name='post-found-item'),  # Post a found item

    # Lost Item URLs
    path('items/lost/', LostItemListView.as_view(), name='lost-items'),  # List all lost items
    path('items/lost/post/', PostLostItemView.as_view(), name='post-lost-item'),  # Post a lost item

]
