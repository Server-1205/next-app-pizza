﻿import { prisma } from '@/prisma/prisma-client';
import { cartCalcItemTotalPrice } from './cart-calc-item-total-price';
import { CartItemDTO } from '@/services/dto/cart.dto';

export const updateCartTotalAmount = async (token: string) => {
  const userCart = await prisma.cart.findFirst({
    where: {
      token,
    },
    include: {
      items: {
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          productItem: {
            include: {
              product: true,
            },
          },
          ingredients: true,
        },
      },
    },
  });

  if (!userCart) return;

  const totalAmount = userCart.items.reduce((acc, item) => {
    return acc + cartCalcItemTotalPrice(item as CartItemDTO);
  }, 0);

  return await prisma.cart.update({
    where: {
      id: userCart.id,
    },
    data: {
      totalAmount,
    },

    include: {
      items: {
        orderBy: {
          createdAt: 'desc',
        },

        include: {
          productItem: {
            include: {
              product: true,
            },
          },
          ingredients: true,
        },
      },
    },
  });
};
