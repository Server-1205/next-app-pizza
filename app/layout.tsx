﻿import { Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/shared/providers";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${nunito.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
