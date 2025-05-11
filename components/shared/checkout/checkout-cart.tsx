import { PizzaType, PizzaSize } from "@/constants/pizza";
import { getCartItemDetails } from "@/lib/get-cart-item-details";
import { CheckoutItem } from "../checkout-item";
import { WhiteBlock } from "../white-block";
import { CartStateItem } from "@/lib/get-cart-details";

type Props = {
  items: CartStateItem[];
  onClickCountButton: (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => void;
  onClickRemove: (id: number) => void;
  disabled: boolean;
};

export const CheckoutCart = ({
  items,
  onClickCountButton,
  onClickRemove,
  disabled,
}: Props) => {
  return (
    <WhiteBlock title="1. Корзина">
      {items.map((item) => (
        <CheckoutItem
          key={item.id}
          details={getCartItemDetails(
            item.pizzaType as PizzaType,
            item.pizzaSizes as PizzaSize,
            item.ingredients
          )}
          imageUrl={item.imageUrl}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          disabled={disabled}
          id={item.id}
          onClickCountButton={(type) =>
            onClickCountButton(item.id, item.quantity, type)
          }
          onClickRemove={() => onClickRemove(item.id)}
        />
      ))}
    </WhiteBlock>
  );
};
