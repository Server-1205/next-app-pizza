import { CartItem, Ingredient, Product, ProductItem } from '@prisma/client';

export type CartItemDTO = CartItem & {
  productItem: ProductItem & {
    product: Product;
  };

  ingredients: Ingredient[];
};

export interface CartDTO {
  items: CartItemDTO[];
  totalAmount: number;
}
