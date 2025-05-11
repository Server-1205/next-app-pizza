import { WhiteBlock } from "../white-block";
import { cn } from "@/lib/utils";
import { FormInput } from "../form-components/form-input";

type Props = {
  className?: string;
};

const CheckoutPersonalForm = ({ className }: Props) => {
  return (
    <WhiteBlock
      title="2. Персональная информация"
      className={cn("", className)}
    >
      <div className="grid grid-cols-2 gap-5">
        <FormInput
          label="Имя"
          name="firstName"
          className="text-base"
          placeholder="Имя"
        />
        <FormInput
          label="Фамилия"
          name="lastName"
          className="text-base"
          placeholder="Фамилия"
        />
        <FormInput
          label="E-Mail"
          name="email"
          className="text-base"
          placeholder="E-Mail"
        />
        <FormInput
          label="Телефон"
          name="phone"
          className="text-base"
          placeholder="Телефон"
        />
      </div>
    </WhiteBlock>
  );
};

export default CheckoutPersonalForm;
