import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const RequiredSymbol = ({ className }: Props) => {
  return <span className={cn("text-red-500", className)}>*</span>;
};
