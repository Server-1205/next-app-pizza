import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { LoginForm } from "./forms/login-form";
import { DialogTitle } from "@radix-ui/react-dialog";

interface Props {
  open: boolean;
  onClose: () => void;
  className?: string;
}

export const AuthModal = ({ open, onClose, className }: Props) => {
  const [type, setType] = useState<"login" | "register">("login");
  const handleClose = () => {
    onClose();
  };

  const onSwitchType = () => {
    setType(type === "login" ? "register" : "login");
  };

  return (
    <div className={cn("", className)}>
      <Dialog open={open} onOpenChange={handleClose}>

        <DialogTitle/>
        <DialogContent>
          {type === "login" ? <LoginForm onClose={onClose} /> : "Register"}
          <hr />
          <Button
            variant="secondary"
            onClick={() =>
              signIn("github", {
                callbackUrl: "/",
                redirect: true,
              })
            }
            type="button"
            className="gap-2 h-12 p-2 flex-1"
          >
            GitHub
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              signIn("google", {
                callbackUrl: "/",
                redirect: true,
              })
            }
            type="button"
            className="gap-2 h-12 p-2 flex-1"
          >
            Google
          </Button>
          <Button variant="outline" onClick={onSwitchType}>
            {type === "register" ? "Войти" : "Регистрация"}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};
