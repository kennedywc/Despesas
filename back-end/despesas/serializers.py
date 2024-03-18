from rest_framework import serializers
from .models import Expenses, Category


class CategorySerializer(serializers.ModelSerializer):
    """
        Serializador para o modelo de Categoria.
    """

    class Meta:
        model = Category
        fields = '__all__'

class ExpensesSerializer(serializers.ModelSerializer):
    """
        Serializador para o modelo de Despesas.

        Atributos:
            category (SlugRelatedField): Campo para representar a relação com o modelo Category através do nome.
    """

    category = serializers.SlugRelatedField(slug_field='name', queryset=Category.objects.all())

    class Meta:
        model = Expenses
        fields = '__all__'