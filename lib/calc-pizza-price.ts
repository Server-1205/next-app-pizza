import { PizzaSize, PizzaType } from '@/constants/pizza';
import { Ingredient, ProductItem } from '@prisma/client';

/**
 * @param items список вариаций
 * @param ingredients список ингредиентов
 * @param type тип теста выбранной пиццы
 * @param size размер пиццы
 * @param selectedIngredients - выбраные ингредиенты
 * @returns number общая стоимость
 * @
 */

export const calcPizzaPrice = (
  items: ProductItem[],
  ingredients: Ingredient[],
  type: PizzaType,
  size: PizzaSize,
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0;

  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};
