import { updateCartTotalAmount } from '@/lib/update-cart-total-amount';
import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    console.log(params);
    const id = params.id;
    const data = await req.json();
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json(
        { message: 'Необходимо авторизоваться' },
        { status: 500 }
      );
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!cartItem) {
      return NextResponse.json(
        { message: 'Товар в корзине не найден' },
        { status: 404 }
      );
    }

    await prisma.cartItem.update({
      where: {
        id: Number(id),
      },
      data: {
        quantity: data.quantity,
      },
    });

    const updatedUserCart = await updateCartTotalAmount(token);
    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.log('[CARTPATCH] Server Error', error);
    return NextResponse.json(
      { message: 'Не удалось обновить корзину' },
      { status: 500 }
    );
  }
}
