'use client';

import { useIngredients, useFilters, useQueryFilters } from '@/hooks';
import { cn } from '@/lib/utils';
import { Title } from '../ui/title';
import { Input } from '../ui/input';
import { RangeSlider } from '../ui/range-slider';
import { CheckboxFilterGroup } from './checbox-filter-group';

interface Props {
  className?: string;
}

export const Filters = ({ className }: Props) => {
  const { ingredients, loading } = useIngredients();

  const filters = useFilters();
  useQueryFilters(filters);

  const items = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  };

  return (
    <div className={cn('', className)}>
      <Title size="sm" text="Фильтрация" className="mb-5 font-bold" />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(filters.prices.priceFrom)}
            onChange={(e) =>
              filters.setPrices('priceFrom', Number(e.target.value))
            }
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={String(filters.prices.priceTo)}
            onChange={(e) =>
              filters.setPrices('priceTo', Number(e.target.value))
            }
          />
        </div>
        <RangeSlider
          max={1000}
          min={0}
          step={10}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 1000,
          ]}
          onValueChange={updatePrices}
        />
      </div>
      <CheckboxFilterGroup
        title="Размеры"
        name="sizes"
        items={[
          { text: '20см', value: '20' },
          { text: '30см', value: '30' },
          { text: '40см', value: '40' },
        ]}
        limit={5}
        loading={loading}
        className="mb-5"
        searchInputPlaceholder="Поиск размеров"
        defaultValue="small"
        onClickChecbox={filters.toggleSizes}
        selectedIds={filters.sizes}
      />

      <CheckboxFilterGroup
        title="Тип теста"
        name="pizzaType"
        items={[
          { text: 'Толстое', value: '0' },
          { text: 'Тонкое', value: '1' },
        ]}
        limit={5}
        loading={loading}
        searchInputPlaceholder="Поиск типа теста"
        defaultValue="small"
        onClickChecbox={filters.togglePizzaTypes}
        selectedIds={filters.pizzaTypes}
        className="mb-5"
      />

      <CheckboxFilterGroup
        title="Ингредиенты"
        name="ingridients"
        items={items}
        defaultItems={items}
        limit={5}
        loading={loading}
        searchInputPlaceholder="Поиск ингредиентов"
        defaultValue="small"
        onClickChecbox={filters.toggleIngredients}
        selectedIds={filters.selectedIngredients}
      />
    </div>
  );
};
