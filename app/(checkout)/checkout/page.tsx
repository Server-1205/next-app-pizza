"use client";

import { CheckoutItem } from "@/components/shared/checkout-item";
import { CheckoutItemDetails } from "@/components/shared/checkout-item-details";
import { Container } from "@/components/shared/container";
import { WhiteBlock } from "@/components/shared/white-block";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Title } from "@/components/ui/title";
import { PizzaSize, PizzaType } from "@/constants/pizza";
import { useCart } from "@/hooks/use-cart";
import { getCartItemDetails } from "@/lib/get-cart-item-details";
import { ArrowRight } from "lucide-react";

const VAT = 15;
const DELIVERY_PRICE = 250;

export default function CheckoutPage() {
  const { items, updateItemQuantity, loading, removeCartItem, totalAmount } =
    useCart();

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  const onClickRemove = (id: number) => {
    removeCartItem(id);
  };

  const vatPrice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;

  return (
    <Container>
      <Title
        className="text-amber-950 mt-5"
        text="Оформление заказа"
        size="xl"
      />
      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
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
                disabled={loading}
                id={item.id}
                onClickCountButton={(type) =>
                  onClickCountButton(item.id, item.quantity, type)
                }
                onClickRemove={() => onClickRemove(item.id)}
              />
            ))}
          </WhiteBlock>

          <WhiteBlock title="2. Персональная информация">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Имя" />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Фамилия"
              />
              <Input name="email" className="text-base" placeholder="E-Mail" />
              <Input name="phone" className="text-base" placeholder="Телефон" />
            </div>
          </WhiteBlock>

          <WhiteBlock title="3. Адрес доставки">
            <div className="flex flex-col gap-5">
              <Input className="text-base" placeholder="Введите адресс" />
              <Textarea
                rows={5}
                className="text-base"
                placeholder="Комментарий к заказу"
              />
            </div>
          </WhiteBlock>
        </div>

        <div className="w-[300px]">
          <WhiteBlock>
            <div className="flex flex-col gap-4">
              <span className="text-xl">Итого:</span>
              <span className="text-[34px] font-extrabold">{totalPrice} р</span>
            </div>

            <CheckoutItemDetails
              title="Стоимость товаров"
              value={`${totalAmount} р`}
            />
            <CheckoutItemDetails title="Налоги:" value={`${vatPrice} р`} /> 
            <CheckoutItemDetails
              title="Доставка: "
              value={`${DELIVERY_PRICE} р`}
            />

            <Button
              type="submit"
              className="w-full rounded-2xl mt-6 text-base font-bold"
            >
              Перейти к оплате
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
