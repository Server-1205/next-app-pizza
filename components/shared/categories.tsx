'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import { Button } from '../ui/button';
import { Category } from '@prisma/client';

interface Props {
  className?: string;
  items: Category[];
}

export const Categories = ({ className, items }: Props) => {
  const activeIndex = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {items.map((cat) => (
        <a
          key={cat.id}
          href={`#${cat.name}`}
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
