from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import CategoryViewSet, ExpensesViewSet

app_name = 'despesas'

router = DefaultRouter()
router.register(r'expenses', ExpensesViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]