import { cn } from '@/lib/utils';
import { Title } from '../ui/title';
import { Button } from '../ui/button';
import { PizzaImage } from './pizza-image';
import { GroupVariants } from './group-variants';
import {
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from '@/constants/pizza';
import { useState } from 'react';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: any[];
  items: any[];

  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm = ({
  imageUrl,
  name,
  className,
  ingredients,
  items,
}: Props) => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);

  const textDetails = 'Lorem ipsum dolor sit amet.';
  const totalPrice = 350;
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
          items={pizzaSizes}
          value={String(size)}
          onClick={(value) => setSize(Number(value) as PizzaSize)}
        />

        <GroupVariants
          items={pizzaTypes}
          value={String(type)}
          onClick={(value) => setSize(Number(value) as PizzaType)}
        />

        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full">
          Добавить в корзину за {totalPrice}
        </Button>
      </div>
    </div>
  );
};
