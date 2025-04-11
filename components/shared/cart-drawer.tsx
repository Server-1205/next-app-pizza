'use client';

import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import CartDrawerItem from './cart-item-drawer';

type Props = PropsWithChildren & {
  className?: string;
};

const CartDraver = ({ className, children }: Props) => {
  return (
    <div className={cn('', className)}>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
          <SheetHeader>
            <SheetTitle>
              В корзине <span className="font-bold">3 товара</span>
            </SheetTitle>
          </SheetHeader>
          <div className="flex-1 mt-5 overflow-auto">
            <CartDrawerItem
              className="mb-3"
              id={0}
              imageUrl={
                'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp'
              }
              details={'Тест'}
              name={'Fresh'}
              price={419}
              quantity={1}
            />

            <CartDrawerItem
              id={0}
              imageUrl={
                'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp'
              }
              details={'Тест'}
              name={'Fresh'}
              price={419}
              quantity={1}
            />
          </div>

          <SheetFooter className="bg-white p-8">
            <div className="w-full">
              <div className="flex mb-4">
                <span className="flex flex-1 text-lg text-neutral-500">
                  Итого
                  <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"></div>
                </span>

                <span className="font-bold text-lg">500 р</span>
              </div>

              <Link href="/cart">
                <Button type="submit" className="w-full h-12 text-base">
                  Оформить заказ
                  <ArrowRight className="w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartDraver;
