import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
} from '@/constants/pizza';
import { Ingredient } from '@prisma/client';

export const getCartItemDetails = (
  type: PizzaType,
  size: PizzaSize,
  ingredients: Ingredient[]
): string => {
  const details: string[] = [];

  if (pizzaSizes && type) {
    const typeName = mapPizzaType[type];
    details.push(`${typeName} ${pizzaSizes} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }
  return details.join(', ');
};
