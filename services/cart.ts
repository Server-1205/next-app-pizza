import { axiosInstanse } from './axios-instans';
import { CartDTO, CreateCartItemValues } from './dto/cart.dto';

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

export const removeCartItem = async (id: number): Promise<CartDTO> => {
  const { data } = await axiosInstanse.delete<CartDTO>(`/cart/${id}`);

  return data;
};

export const addCartItem = async (
  values: CreateCartItemValues
): Promise<CartDTO> => {
  const { data } = await axiosInstanse.post<CartDTO>('/cart', values);

  return data;
};
