import { cn } from '@/lib/utils';
import { Title } from '../ui/title';
import { Button } from '../ui/button';

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  loading: boolean;
  onSubmit: () => void;
  className?: string;
}

export const ChooseProductForm = ({
  imageUrl,
  name,
  price,
  loading,
  onSubmit,
  className,
}: Props) => {
  return (
    <div className={cn('flex flex-1', className)}>
      <div
        className={cn(
          'flex items-center justify-center flex-1 relative w-full',
          className
        )}
      >
        <img
          src={imageUrl}
          alt=""
          className={cn(
            'relative left-2 top-2 transition-all z-10 duration-300 w-[350] h-[350]'
          )}
        />
      </div>

      <div className="w-[490px] p-7 bg-accent/55">
        <Title text={name} className="font-extrabold mb-1" />

        <p className="text-gray-500 mb-2">{}</p>

        <Button
          loading={loading}
          onClick={onSubmit}
          className="h-[55px] px-10 text-base rounded-[18px] w-full"
        >
          Добавить в корзину за {price}
        </Button>
      </div>
    </div>
  );
};
