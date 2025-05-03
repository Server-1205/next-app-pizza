import { PizzaSize, PizzaType } from '@/constants/pizza';
import { getAvailablePizzaSizes } from '@/lib/get-available-sizes';
import { ProductItem } from '@prisma/client';
import { useEffect, useState } from 'react';
import { useSet } from 'react-use';

export const usePizzaOptions = (items: ProductItem[]) => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);

  const [selectedIngredients, { toggle: toggleIngredient }] = useSet<number>(
    new Set([])
  );

  const availablePizzaSizes = getAvailablePizzaSizes(type, items);

  const currentItemId = items.find(
    (item) => item.pizzaType === type && item.size === size
  )?.id;

  useEffect(() => {
    const isAvailableSize = availablePizzaSizes.find(
      (item) => Number(item.value) === size && !item.disabled
    );

    const availableSize = availablePizzaSizes.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [availablePizzaSizes, size, type]);

  return {
    size,
    setSize,
    type,
    currentItemId,
    setType,
    availablePizzaSizes,
    selectedIngredients,
    toggleIngredient,
  };
};
