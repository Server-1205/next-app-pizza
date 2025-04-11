import { pizzaSizes, PizzaType } from '@/constants/pizza';
import { ProductItem } from '@prisma/client';

export function getAvailablePizzaSizes(type: PizzaType, items: ProductItem[]) {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);
  const availablePizzaSizes = pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));
  return availablePizzaSizes;
}
