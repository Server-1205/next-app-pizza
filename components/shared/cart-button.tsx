import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import CartDraver from './cart-drawer';

type Props = {
  className?: string;
};

export const CartButton = ({ className }: Props) => {
  return (
    <CartDraver>
      <div className={cn('group relative', className)}>
        <Button>
          <b>520$</b>
          <span className="h-full w-[1px] bg-white/30 mx-3"></span>
          <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
            <ShoppingCart className="h-4 w-4 relative" strokeWidth={3} />
            <b>3</b>
          </div>
          <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
        </Button>
      </div>
    </CartDraver>
  );
};
