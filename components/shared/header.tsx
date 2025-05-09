import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Container } from "./container";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";

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
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            <span>Войти</span>
          </Button>

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
