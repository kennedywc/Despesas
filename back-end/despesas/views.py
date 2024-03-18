from rest_framework import viewsets
from .models import Expenses, Category
from .serializers import ExpensesSerializer, CategorySerializer

class ExpensesViewSet(viewsets.ModelViewSet):
    """
        ViewSet para operações CRUD em despesas.
    """
    queryset = Expenses.objects.all().order_by('-id')
    serializer_class = ExpensesSerializer

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """
        ViewSet para exibição de categorias.
        
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer