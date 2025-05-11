"use server";

import { CheckoutFormValues } from "@/components/shared/checkout/schemas/checkout-form-schema";
import { PayOrderTemplate } from "@/components/shared/email-templates/pay-order";
import { sendEmail } from "@/lib/send-email";
import { prisma } from "@/prisma/prisma-client";
import { OrderStatus } from "@prisma/client";
import { cookies } from "next/headers";

export const createOrder = async (data: CheckoutFormValues) => {
  try {
    const cookie = cookies();
    const cartToken = (await cookie).get("cartToken")?.value;

    if (!cartToken) {
      throw new Error("Cart token not found");
    }

    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            ingredients: true,
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    });

    if (!userCart) {
      throw new Error("Cart not found");
    }

    if (userCart?.totalAmount === 0) {
      throw new Error("Cart is empty");
    }

    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
        totalAmount: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.items),
      },
    });

    await prisma.cart.update({
      where: {
        token: cartToken,
      },
      data: {
        totalAmount: 0,
      },
    });

    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    });

    // TODO:сделать создание ссылки оплаты

    sendEmail(
      data.email,
      "Next-Pizza Оплата заказа",
      await PayOrderTemplate({
        orderId: order.id,
        totalAmount: userCart.totalAmount,
        paymentUrl: "https://google.com",
      }),
    );
  } catch (error) {
    console.error("[CreateOrder] Server error", error);
  }

  return "https://google.com";
};
