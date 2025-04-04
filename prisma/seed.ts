import { hashSync } from 'bcrypt';
import { prisma } from './prisma-client';

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User Test',
        email: 'user@test.ru',
        password: hashSync('1111', 10),
        verefied: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin Admin',
        email: 'admin@admin.ru',
        password: hashSync('1111', 10),
        verefied: new Date(),
        role: 'ADMIN',
      },
    ],
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.error(error);
  }
}

main().then(async () => {
  await prisma.$disconnect().catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
});
