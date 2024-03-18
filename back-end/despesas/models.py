from django.db import models

class Category(models.Model):
    """
        Representa uma categoria para classificar despesas.

        Atributos:
            name (str): Nome da categoria.
    """

    name = models.CharField(max_length=50, help_text='Nome da categoria')

    class Meta:
        verbose_name = 'Categoria'
        verbose_name_plural = 'Categorias'

    def __str__(self) -> str:
        """
            Retorna uma representação em string do objeto Category.
        """
        return f'{self.name}'
    
class Expenses(models.Model):
    """
        Representa uma despesa.

        Atributos:
            description (str): Descrição da despesa.
            value (float): Valor da despesa.
            date_expenser (date): Data da despesa.
            category (Category): Categoria à qual a despesa pertence.
    """

    description = models.CharField(max_length=100, help_text='Nome da descrição')
    value = models.DecimalField(max_digits=10, decimal_places=2, help_text='Valor da despesa')
    date_expenser = models.DateField(help_text='data da descrição')
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Despesa'
        verbose_name_plural = 'Despesas'

    def __str__(self) -> str:
        """
            Retorna uma representação em string do objeto Expenses.
        """
        return f'{self.description}'
