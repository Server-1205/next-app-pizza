import { mapPizzaType, PizzaSize, PizzaType } from '@/constants/pizza';
import { CartStateItem } from './get-cart-details';

export const getCartItemDetails = (
  pizzaType: PizzaType,
  pizzaSizes: PizzaSize,
  ingredients: CartStateItem['ingredients']
): string => {
  const details: string[] = [];

  if (pizzaSizes && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName} ${pizzaSizes} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }
  return details.join(', ');
};
