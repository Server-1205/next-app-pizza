import { Ingredient } from '@prisma/client';
import { axiosInstanse } from './axios-instans';
import { ApiRoutes } from './constants';

export const getAll = async (): Promise<Ingredient[]> => {
  const { data } = await axiosInstanse.get<Ingredient[]>(ApiRoutes.INGREDIENTS);

  return data;
};
