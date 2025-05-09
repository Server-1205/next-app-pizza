import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  value?: string;
  className?: string;
};

export const CheckoutItemDetails = ({ title, value, className }: Props) => {
  return (
    <div className={cn("flex items-center mb-5", className)}>
      <div className="flex flex-1 text-lg text-neutral-500">
        {title}
        <div className="flex-1 border-b border-dashed border-neutral-200 relative -top-1 mx-2" />
      </div>
      <span className="font-bold text-lg">{value}</span>
    </div>
  );
};
