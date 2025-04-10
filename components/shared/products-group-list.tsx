'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import { RefObject, useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { Title } from '../ui/title';
import { ProductCard } from './product-card';

type Props = {
  className?: string;

  items: any[];
  title: string;
  categoryId: number;
  listClassName?: string;
};

export const ProductsListGroup = ({
  className,
  items,
  title,
  categoryId,
  listClassName,
}: Props) => {
  const intersectionRef = useRef<HTMLDivElement>(
    null
  ) as RefObject<HTMLDivElement>;

  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(title, categoryId);
      setActiveCategoryId(categoryId);
    }
  }, [intersection, title, categoryId, setActiveCategoryId]);

  return (
    <div className={cn('', className)} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
