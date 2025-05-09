import { useCartStore } from "@/store/cart";
import { useEffect } from "react";

export const useCart = () => {
  const {
    fetchCartItems,
    items,
    totalAmount,
    updateItemQuantity,
    removeCartItem,
    addCartItem,
    loading,
  } = useCartStore((state) => state);

  const totalQuantity = items.reduce((acc, item) => (acc += item.quantity), 0);

  
  useEffect(() => {
    fetchCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    items,
    totalAmount,
    updateItemQuantity,
    removeCartItem,
    addCartItem,
    loading,
    totalQuantity,
  };
};
