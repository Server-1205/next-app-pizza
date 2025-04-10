import { Container } from '@/components/shared/container';
import { GroupVariants } from '@/components/shared/group-variants';
import { PizzaImage } from '@/components/shared/pizza-image';
import { Title } from '@/components/ui/title';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

interface Props {
  className?: string;
  params: {
    id: string;
  };
}

const Product = async ({ params: { id } }: Props) => {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <PizzaImage size={30} imageUrl={product.imageUrl} className="" />

        <div className="w-[490px] bg-[#FCFCFC] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />

          <p className="text-gray-400">Lorem ipsum dolor sit amet.</p>

          <GroupVariants items={[]} />
        </div>
      </div>
    </Container>
  );
};

export default Product;
