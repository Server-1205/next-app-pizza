import { WhiteBlock } from "../white-block";
import { cn } from "@/lib/utils";
import { FormTextarea } from "../form-components/form-textarea";
import { AddressInput } from "../form-components/address-input";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  className?: string;
};

export const CheckoutAddress = ({ className }: Props) => {
  const { control } = useFormContext();
  return (
    <WhiteBlock title="3. Адрес доставки" className={cn("", className)}>
      <div className="flex flex-col gap-5">
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <>
              <AddressInput onChange={field.onChange} />
              {fieldState.error && (
                <span className="text-red-500">{fieldState.error.message}</span>
              )}
            </>
          )}
        />

        <FormTextarea
          label="Комментарий"
          name="comment"
          rows={5}
          className="text-base"
          placeholder="Комментарий к заказу"
        />
      </div>
    </WhiteBlock>
  );
};
