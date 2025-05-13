import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { formLoginSchema, TLoginValues } from "./schema";
import { FormInput } from "../../form-components/form-input";
import { Title } from "@/components/ui/title";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

interface Props {
  onClose: VoidFunction;
}

export const LoginForm = ({ onClose }: Props) => {
  const form = useForm<TLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: TLoginValues) => {
    try {
      const resp = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (!resp?.ok) {
        throw Error();
      }
      toast.success("Вы вошли в аккаунт");
      onClose();
    } catch (error) {
      toast.error("Не удалось войти в аккаунт");
      console.error("Error [LOGIN]", error);
    }
  };
  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center">
          <div className="mr2">
            <Title text="Вход в аккаунт" />
            <p className=""></p>
          </div>
        </div>

        <FormInput label="E-Mail" name="email" />
        <FormInput label="Пароль" name="password" />

        <Button
          loading={form.formState.isSubmitting}
          type="submit"
          className="h-12 text-base"
        >
          {form.formState.isSubmitting ? "Вход" : "Войти"}
        </Button>
      </form>
    </FormProvider>
  );
};
