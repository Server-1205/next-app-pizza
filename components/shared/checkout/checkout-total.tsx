import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CheckoutItemDetails } from "../checkout-item-details";
import { WhiteBlock } from "../white-block";
import { cn } from "@/lib/utils";

interface Props {
  totalAmount: number;
  className?: string;
  loading?: boolean;
}

const VAT = 15;
const DELIVERY_PRICE = 250;

export const CheckoutTotal = ({ totalAmount, loading, className }: Props) => {
  const vatPrice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;
  return (
    <WhiteBlock className={cn("", className)}>
      <div className="flex flex-col gap-4">
        <span className="text-xl">Итого:</span>
        <span className="text-[34px] font-extrabold">{totalPrice} р</span>
      </div>

      <CheckoutItemDetails
        title="Стоимость товаров"
        value={`${totalAmount} р`}
      />
      <CheckoutItemDetails title="Налоги:" value={`${vatPrice} р`} />
      <CheckoutItemDetails title="Доставка: " value={`${DELIVERY_PRICE} р`} />

      <Button
        loading={loading}
        type="submit"
        className="w-full rounded-2xl mt-6 text-base font-bold"
      >
        Перейти к оплате
        <ArrowRight className="ml-2" size={16} />
      </Button>
    </WhiteBlock>
  );
};
