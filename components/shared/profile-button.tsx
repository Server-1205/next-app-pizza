import { CircleUser, User } from "lucide-react";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  onClickSignIn?: () => void;
  className?: string;
}

export const ProfileButton = ({ onClickSignIn, className }: Props) => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className={cn("", className)}>
      {!session ? (
        <Button
          onClick={onClickSignIn}
          variant="outline"
          className="flex items-center gap-1"
        >
          <User size={16} />
          <span>Войти</span>
        </Button>
      ) : (
        <Link href="/profile">
          <Button>
            <CircleUser size={18} />
            Профиль
          </Button>
        </Link>
      )}
    </div>
  );
};
