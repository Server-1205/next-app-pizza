'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import { Button } from '../ui/button';

interface Props {
  className?: string;
  items: any;
}

const cats = [
  { id: 1, name: 'Пиццы' },
  { id: 2, name: 'Комбо' },
  { id: 3, name: 'Закуски' },
  { id: 4, name: 'Коктейли' },
  { id: 5, name: 'Кофе' },
  { id: 6, name: 'Напитки' },
  { id: 7, name: 'Десерты' },
  { id: 8, name: 'Десерты' },
];

export const Categories = ({ className }: Props) => {
  const activeIndex = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {cats.map((cat) => (
        <a
          key={cat.id}
          href=""
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl hover:bg-white hover:shadow-md shadow-gray-200 text-primary',
            activeIndex === cat.id &&
              'bg-white shadow-md shadow-gray-200 text-primary',
            className
          )}
        >
          <Button variant="link" className="font-bold ">
            {cat.name}
          </Button>
        </a>
      ))}
    </div>
  );
};
