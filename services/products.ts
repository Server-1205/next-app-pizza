import { Product } from '@prisma/client';
import { axiosInstanse } from './axios-instans';
import { ApiRoutes } from './constants';

export const search = async (query: string): Promise<Product[]> => {
  const { data } = await axiosInstanse.get<Product[]>(
    ApiRoutes.SEARCH_PRODUCTS,
    {
      params: { query },
    }
  );

  return data;
};
