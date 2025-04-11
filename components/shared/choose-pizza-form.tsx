import {
  mapPizzaType,
  PizzaSize,
  PizzaType,
  pizzaTypes,
} from '@/constants/pizza';
import { Ingredient as IngredientType, ProductItem } from '@prisma/client';
import { Button } from '../ui/button';
import { Title } from '../ui/title';
import { GroupVariants } from './group-variants';
import { Ingredient } from './ingredient';
import { PizzaImage } from './pizza-image';
import { cn } from '@/lib/utils';
import { calcPizzaPrice } from '@/lib/calc-pizza-price';
import { usePizzaOptions } from '@/hooks/use-pizza-optios';

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
  const {
    size,
    setSize,
    type,
    setType,
    availablePizzaSizes,
    selectedIngredients,
    toggleIngredient,
  } = usePizzaOptions(items);

  const totalPrice = calcPizzaPrice(
    items,
    ingredients,
    type,
    size,
    selectedIngredients
  );

  const textDetails = `${size} см ${mapPizzaType[type]} пицца`;

  const hendleClick = () => {
    onClickAddCard?.();
    console.log({
      size,
      type,
      ingredients: selectedIngredients,
    });
  };

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
