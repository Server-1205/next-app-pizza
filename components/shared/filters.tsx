'use client';

import { cn } from '@/lib/utils';
import { Input } from '../ui/input';
import { RangeSlider } from '../ui/range-slider';
import { Title } from '../ui/title';
import { CheckboxFilterGroup } from './checbox-filter-group';
import { FilterCheckbox } from './filter-checkbox';
import { useFelterIngredients } from '../../hooks/useFilterIngredients';

type Props = {
  className?: string;
};

export const Filters = ({ className }: Props) => {
  const { ingredients, loading, onAddId, selectedIds } = useFelterIngredients();

  const items = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }));

  return (
    <div className={cn('', className)}>
      <Title size="sm" text="Фильтрация" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно забирать" value="asdf" />
        <FilterCheckbox text="Новинки" value="asdf" />
        <FilterCheckbox text="Тест" value="" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>
        <RangeSlider max={1000} min={0} step={10} value={[0, 1000]} />
      </div>

      <CheckboxFilterGroup
        title="Ингредиенты"
        name="Ингредиенты"
        items={items}
        defaultItems={items}
        limit={5}
        loading={loading}
        searchInputPlaceholder="Поиск размеров"
        defaultValue="small"
        onClickChecbox={onAddId}
        selectedIds={selectedIds}
      />
    </div>
  );
};
