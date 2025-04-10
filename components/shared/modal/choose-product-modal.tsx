'use client';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../choos-product-form';
import { ProductWithRelations } from '@/@types/prisma';
import { ChoosePizzaForm } from '../choose-pizza-form';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal = ({ className, product }: Props) => {
  const router = useRouter();

  const isPizzaForm = Boolean(product.items[0].pizzaType);
  return (
    <Dialog open={Boolean(product)} onOpenChange={router.back}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px]  min-h-[500px] bg-white overflow-hidden sm:max-w-[1060px]',
          className
        )}
      >
        <DialogTitle className="hidden" />
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            ingredients={product.ingredients}
            items={product.items}
            name={product.name}
          />
        ) : (
          <ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
        )}
      </DialogContent>
    </Dialog>
  );
};
