import { axiosInstanse } from './axios-instans';
import { CartDTO } from './dto/cart.dto';

export const getCart = async (): Promise<CartDTO> => {
  const { data } = await axiosInstanse.get<CartDTO>('/cart');

  return data;
};

export const updateItemQuantity = async (
  itemId: number,
  quantity: number
): Promise<CartDTO> => {
  const { data } = await axiosInstanse.patch<CartDTO>(`/cart/${itemId}`, {
    quantity,
  });

  return data;
};
