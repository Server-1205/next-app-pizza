"use client";

import { CheckoutAddress } from "@/components/shared/checkout/checkout-address";
import { CheckoutCart } from "@/components/shared/checkout/checkout-cart";
import CheckoutPersonalForm from "@/components/shared/checkout/checkout-personal-form";
import { CheckoutTotal } from "@/components/shared/checkout/checkout-total";
import {
  CheckoutFormValues,
  checkoutFormSchema,
} from "@/components/shared/checkout/schemas/checkout-form-schema";
import { Container } from "@/components/shared/container";
import { Title } from "@/components/ui/title";
import { useCart } from "@/hooks/use-cart";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createOrder } from "@/app/actions";
import toast from "react-hot-toast";
import { useState } from "react";

export default function CheckoutPage() {
  const [submitting, setSubmitting] = useState(false);
  const { items, updateItemQuantity, loading, removeCartItem, totalAmount } =
    useCart();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: "",
      email: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    try {
      setSubmitting(true);
      const url = await createOrder(data);
      toast.error("Заказ успешно оформлен");

      if (url) {
        location.href = url;
      }
    } catch (error) {
      toast.error("Не удалось создать заказ");
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

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

  return (
    <Container>
      <Title
        className="text-amber-950 mt-5"
        text="Оформление заказа"
        size="xl"
      />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart
                items={items}
                onClickCountButton={onClickCountButton}
                onClickRemove={onClickRemove}
                disabled={loading}
              />

              <CheckoutPersonalForm />

              <CheckoutAddress />
            </div>

            <div className="w-[300px]">
              <CheckoutTotal loading={submitting} totalAmount={totalAmount} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
