import { Header } from "@/components/shared/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Pizza | Корзина",
  description: "Заказ",
};

export default function ChekcoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header className="border-gray-200" hasSearch={false} hasCart={false} />
      {children}
    </main>
  );
}
