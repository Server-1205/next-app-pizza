import { CartItemDTO } from '@/services/dto/cart.dto';

export const cartCalcItemTotalPrice = (item: CartItemDTO): number => {
  if (!item) {
    throw new Error('Item is null');
  }
  const ingredientsPrice = item.ingredients.reduce(
    (acc, ing) => acc + ing.price,
    0
  );

  return (item?.productItem?.price + ingredientsPrice) * item.quantity;
};
