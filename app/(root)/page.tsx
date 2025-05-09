import { Container } from '@/components/shared/container';
import { Filters } from '@/components/shared/filters';
import { ProductsListGroup } from '@/components/shared/products-group-list';
import { TopBar } from '@/components/shared/top-bar';
import { Title } from '@/components/ui/title';
import { findPizzas, GetSearchParams } from '@/lib/find-pizzas';

export default async function Home({
  searchParams,
}: {
  searchParams: GetSearchParams;
}) {
  const categories = await findPizzas(searchParams);

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={categories} />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.length > 0 &&
                categories.map(
                  (category) =>
                    category.products.length > 0 && (
                      <ProductsListGroup
                        key={category.id}
                        items={category.products}
                        title={category.name}
                        categoryId={category.id}
                        listClassName="gap-[50px]"
                        className="mb-10"
                      />
                    )
                )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
