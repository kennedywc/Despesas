from django.contrib import admin
from .models import Category, Expenses

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = 'id', 'name',
    list_editable = 'name',
    list_display_links = 'id',


@admin.register(Expenses)
class ExpensesAdmin(admin.ModelAdmin):
    list_display = 'id', 'description', 'value', 'date_expenser',
    list_editable = 'description', 'value', 'date_expenser',
    list_display_links = 'id',