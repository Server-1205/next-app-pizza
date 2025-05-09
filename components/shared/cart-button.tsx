"use client";

import { ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import CartDrawer from "./cart-drawer";
import { useCart } from "@/hooks/use-cart";

type Props = {
  className?: string;
};

export const CartButton = ({ className }: Props) => {
  const { totalAmount, items, loading } = useCart();

  const totalQuantity = items.reduce((acc, item) => {
    return (acc += item.quantity);
  }, 0);
  return (
    <CartDrawer>
      <div className={cn("group relative", className)}>
        <Button loading={loading} className={cn({ "w-[140px]": loading })}>
          <b>{totalAmount} р</b>
          <span className="h-full w-[1px] bg-white/30 mx-3"></span>
          <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
            <ShoppingCart className="h-4 w-4 relative" strokeWidth={3} />
            <b>{totalQuantity}</b>
          </div>
          <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
        </Button>
      </div>
    </CartDrawer>
  );
};
