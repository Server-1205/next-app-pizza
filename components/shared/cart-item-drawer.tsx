import { cn } from '@/lib/utils';
import * as CartItem from './cart-item-details';
import type { CartItemProps } from './cart-item-details/cart-item-details.types';
import { TrashIcon } from 'lucide-react';
import { CountButton } from './count-button';

type Props = CartItemProps & {
  className?: string;
};

const CartDrawerItem = ({
  details,
  imageUrl,
  name,
  price,
  quantity,

  className,
}: Props) => {
  return (
    <div className={cn('flex bg-white p-5 gap-6', className)}>
      <CartItem.Image src={imageUrl} />

      <div className="flex-1">
        <CartItem.Info name={name} details={details} />

        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <CountButton />

          <div className="flex items-center gap-3">
            <CartItem.Price value={price} />
            <TrashIcon
              className="text-gray-400 cursor-pointer hover:text-gray-600"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawerItem;
