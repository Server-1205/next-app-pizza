import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { Title } from '../ui/title';
import Link from 'next/link';
import { Ingredient } from '@prisma/client';

interface Props {
  id: number;
  name: string;
  price: number;
  ingredients: Ingredient[];
  imageUrl: string;
  className?: string;
}

export const ProductCard = ({
  id,
  name,
  price,
  ingredients,
  imageUrl,
  className,
}: Props) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Link href={`/product/${id}`} className="flex flex-col gap-4">
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          {ingredients.map(ingredient => (
            ingredient.name
          ))}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
