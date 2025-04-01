'use client';
import { cn } from '@/lib/utils';
import { ChangeEvent, useState } from 'react';
import { Input } from '../ui/input';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';

type Item = FilterChecboxProps;

type Props = {
  className?: string;

  title: string;
  items: Item[];
  defaultItems: Item[];
  limit: number;
  searchInputPlaceholder?: string;
  onChange?: (value: string[]) => void;
  defaultValue?: string;
};

export const CheckboxFilterGroup = ({
  className,
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
}: // onChange,
// defaultValue,
Props) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems.slice(0, limit);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={cn('', className)}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            value={searchValue}
            onChange={handleSearch}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            onCheckedChange={(ids) => console.log(ids)}
            checked={false}
            value={item.value}
            endAdornment={item.endAdornment}
            text={item.text}
          />
        ))}
      </div>
      {items.length > limit && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="text-primary font-bold mt-5"
        >
          {showAll ? 'Скрыть' : `+Показать все ${items.length - limit}`}
        </button>
      )}
    </div>
  );
};
