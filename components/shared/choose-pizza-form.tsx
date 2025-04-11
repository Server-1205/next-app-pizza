import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from '@/constants/pizza';
import { Ingredient as IngredientType, ProductItem } from '@prisma/client';
import { useEffect, useState } from 'react';
import { useSet } from 'react-use';
import { Button } from '../ui/button';
import { Title } from '../ui/title';
import { GroupVariants } from './group-variants';
import { Ingredient } from './ingredient';
import { PizzaImage } from './pizza-image';
import { cn } from '@/lib/utils';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: IngredientType[];
  items: ProductItem[];
  onClickAddCard?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm = ({
  imageUrl,
  name,
  className,
  ingredients,
  items,
  onClickAddCard,
}: Props) => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);

  const [selectedIngredients, { toggle: toggleIngredient }] = useSet<number>(
    new Set([])
  );

  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0;

  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  const totalPrice = pizzaPrice + totalIngredientsPrice;
  const textDetails = `${size} см ${mapPizzaType[type]} пицца`;

  const hendleClick = () => {
    onClickAddCard?.();
    console.log({
      size,
      type,
      ingredients: selectedIngredients,
    });
  };

  const availablePizzas = items.filter((item) => item.pizzaType === type);

  const availablePizzaSizes = pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !availablePizzas.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));

  useEffect(() => {
    const isAvailableSize = availablePizzaSizes.find(
      (item) => Number(item.value) === size && !item.disabled
    );

    const availableSize = availablePizzaSizes.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [availablePizzaSizes, size, type]);

  console.log(availablePizzas);

  return (
    <div className={cn('flex flex-1', className)}>
      <div
        className={cn(
          'flex items-center justify-center flex-1 relative w-full',
          className
        )}
      >
        <PizzaImage imageUrl={imageUrl} size={size} />
      </div>

      <div className="w-[490px] p-7 bg-accent/55">
        <Title text={name} className="font-extrabold mb-1" />

        <p className="text-gray-500 mb-2">{textDetails}</p>

        <GroupVariants
          className="mb-2"
          items={availablePizzaSizes}
          value={String(size)}
          onClick={(value) => setSize(Number(value) as PizzaSize)}
        />

        <GroupVariants
          className="mb-2"
          items={pizzaTypes}
          value={String(type)}
          onClick={(value) => setType(Number(value) as PizzaType)}
        />

        <div className="mt-10 bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar">
          <div className="grid grid-cols-3 gap-3 mb-3">
            {ingredients.map((ingredient) => (
              <Ingredient
                key={ingredient.id}
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                price={ingredient.price}
                active={selectedIngredients.has(ingredient.id)}
                onClick={() => toggleIngredient(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          onClick={hendleClick}
          className="h-[55px] px-10 text-base rounded-[18px] w-full"
        >
          Добавить в корзину за {totalPrice}
        </Button>
      </div>
    </div>
  );
};
