"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../choose-product-form";
import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaForm } from "../choose-pizza-form";
import { useCartStore } from "@/store/cart";
import toast from "react-hot-toast";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal = ({ className, product }: Props) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const { addCartItem, loading } = useCartStore((state) => state);

  const isPizzaForm = Boolean(firstItem.pizzaType);

  const onAddProduct = async () => {
    try {
      await addCartItem({
        productItemId: firstItem.id,
      });
      toast.success("Товар добавлена в корзину");
      router.back();
    } catch (error) {
      console.error(error);
      toast.error("Не удалось добавить в корзину");
    }
  };

  const onAddPizza = async (productItemId: number, ingredients: number[]) => {
    try {
      await addCartItem({
        productItemId,
        ingredients: ingredients,
      });

      router.back();

      toast.success("Пицца добавлена в корзину");
    } catch (error) {
      console.error(error);
      toast.error("Не удалось добавить в корзину");
    }
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={router.back}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px]  min-h-[500px] bg-white overflow-hidden sm:max-w-[1060px]",
          className
        )}
      >
        <DialogTitle className="hidden" />
        {isPizzaForm ? (
          <ChoosePizzaForm
            onSubmit={onAddPizza}
            imageUrl={product.imageUrl}
            ingredients={product.ingredients}
            items={product.items}
            name={product.name}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            onSubmit={onAddProduct}
            imageUrl={product.imageUrl}
            name={product.name}
            price={firstItem.price}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
