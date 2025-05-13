"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Container } from "./container";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";
import { useSession } from "next-auth/react";
import { ProfileButton } from "./profile-button";
import { AuthModal } from "./auth-modal/auth-modal";
import { useState } from "react";

interface Props {
  hasCart?: boolean;
  hasSearch?: boolean;
  className?: string;
}

export const Header = ({
  className,
  hasSearch = true,
  hasCart = true,
}: Props) => {
  const { data: session } = useSession();
  console.log(session);

  const [openAuthModal, setOpenAuthModal] = useState(false);

  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="logo" width={35} height={35} />
          <Link href="/">
            <div>
              <div>
                <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                <p className="text-sm text-gray-400 leading-3">
                  вкусней уже некуда
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="mx-10 flex-1">{hasSearch && <SearchInput />}</div>
        <div className="flex items-center gap-3">
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />
          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
