import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';

export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

export async function POST(reg: NextRequest) {
  const data = await reg.json();

  prisma.user.create({
    data,
  });
}
