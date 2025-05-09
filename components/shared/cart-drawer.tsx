"use client";

import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, CroissantIcon } from "lucide-react";
import CartDrawerItem from "./cart-item-drawer";
import { getCartItemDetails } from "@/lib/get-cart-item-details";
import { PizzaSize, PizzaType } from "@/constants/pizza";
import { Title } from "../ui/title";
import { useCart } from "@/hooks/use-cart";

type Props = PropsWithChildren & {
  className?: string;
};

const CartDrawer = ({ className, children }: Props) => {
  const { items, totalAmount, updateItemQuantity, removeCartItem } = useCart();

  const totalQuantity = items.reduce((acc, item) => (acc += item.quantity), 0);

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <div className={cn("", className)}>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
          {totalAmount > 0 && (
            <SheetHeader>
              <SheetTitle>
                В корзине{" "}
                <span className="font-bold">{totalQuantity} товара</span>
              </SheetTitle>
            </SheetHeader>
          )}

          {!totalAmount && (
            <div className="flex flex-col items-center justify-center w-72 mx-auto">
              <Title text="Корзина пуста" />
              <CroissantIcon size={50} />
            </div>
          )}

          {totalAmount > 0 && (
            <>
              <div className="flex-1 mt-5 overflow-auto">
                {items.map((item) => (
                  <CartDrawerItem
                    key={item.id}
                    className="mb-3"
                    id={item.id}
                    imageUrl={item.imageUrl || "/pizza.png"}
                    details={getCartItemDetails(
                      item.pizzaType as PizzaType,
                      item.pizzaSizes as PizzaSize,
                      item.ingredients
                    )}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    onClickCountButton={(type) =>
                      onClickCountButton(item.id, item.quantity, type)
                    }
                    onClickRemove={() => removeCartItem(item.id)}
                  />
                ))}
              </div>
            </>
          )}

          {totalAmount > 0 && (
            <SheetFooter className="bg-white p-8">
              <div className="w-full">
                <div className="flex mb-4">
                  <span className="flex flex-1 text-lg text-neutral-500">
                    Итого
                    <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"></div>
                  </span>

                  <span className="font-bold text-lg">{totalAmount} р</span>
                </div>

                <Link href="/checkout">
                  <Button type="submit" className="w-full h-12 text-base">
                    Оформить заказ
                    <ArrowRight className="w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartDrawer;
