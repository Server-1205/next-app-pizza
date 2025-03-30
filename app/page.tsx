import { Container } from '@/components/shared/container';
import { Filters } from '@/components/shared/filters';
import { ProductsListGroup } from '@/components/shared/products-group-list';
import { TopBar } from '@/components/shared/top-bar';
import { Title } from '@/components/ui/title';

export default async function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={[]} />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsListGroup
                items={[
                  {
                    id: 1,
                    name: 'Пепперони',
                    price: 500,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11ef8bb162a0170eb13139c2398f20b9.avif',
                  },
                  {
                    id: 2,
                    name: 'Пепперони',
                    price: 500,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11ef8bb162a0170eb13139c2398f20b9.avif',
                  },
                  {
                    id: 3,
                    name: 'Пепперони',
                    price: 500,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11ef8bb162a0170eb13139c2398f20b9.avif',
                  },
                  {
                    id: 4,
                    name: 'Пепперони',
                    price: 500,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11ef8bb162a0170eb13139c2398f20b9.avif',
                  },
                  {
                    id: 5,
                    name: 'Пепперони',
                    price: 500,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11ef8bb162a0170eb13139c2398f20b9.avif',
                  },
                  {
                    id: 6,
                    name: 'Пепперони',
                    price: 500,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11ef8bb162a0170eb13139c2398f20b9.avif',
                  },
                ]}
                title="Пиццы"
                categoryId={1}
                listClassName="gap-[50px]"
                className="mb-10"
              />
              <ProductsListGroup
                items={[
                  {
                    id: 1,
                    name: 'Пепперони',
                    price: 500,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11ef8bb162a0170eb13139c2398f20b9.avif',
                  },
                  {
                    id: 2,
                    name: 'Пепперони',
                    price: 500,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11ef8bb162a0170eb13139c2398f20b9.avif',
                  },
                  {
                    id: 3,
                    name: 'Пепперони',
                    price: 500,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11ef8bb162a0170eb13139c2398f20b9.avif',
                  },
                  {
                    id: 4,
                    name: 'Пепперони',
                    price: 500,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11ef8bb162a0170eb13139c2398f20b9.avif',
                  },
                  {
                    id: 5,
                    name: 'Пепперони',
                    price: 500,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11ef8bb162a0170eb13139c2398f20b9.avif',
                  },
                  {
                    id: 6,
                    name: 'Пепперони',
                    price: 500,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11ef8bb162a0170eb13139c2398f20b9.avif',
                  },
                ]}
                title="Комбо"
                categoryId={2}
                listClassName="gap-[50px]"
                className="mb-10"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
