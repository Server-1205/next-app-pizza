'use client';
import { cn } from '@/lib/utils';
import { ChangeEvent, useState } from 'react';
import { Input } from '../ui/input';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Skeleton } from '../ui/skeleton';

type Item = FilterChecboxProps;

type Props = {
  className?: string;

  title: string;
  items: Item[];
  defaultItems?: Item[];
  loading?: boolean;
  limit: number;
  name: string;
  selectedIds: Set<string>;
  searchInputPlaceholder?: string;
  onClickChecbox?: (id: string) => void;
  defaultValue?: string;
};

export const CheckboxFilterGroup = ({
  className,
  title,
  items,
  defaultItems,
  loading,
  name,
  limit = 5,
  selectedIds,
  searchInputPlaceholder = 'Поиск...',
  onClickChecbox,
}: Props) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : (defaultItems || items).slice(0, limit);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (loading) {
    return (
      <div className={cn('', className)}>
        <p className="font-bold mb-3">{title}</p>
        {...Array(limit)
          .fill(0)
          .map((_, index) => <Skeleton key={index} className="h-6 mb-2" />)}
        <Skeleton className="h-6 mb-2 w-[100px]" />
      </div>
    );
  }

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
            onCheckedChange={() => onClickChecbox?.(item.value)}
            checked={selectedIds.has(item.value)}
            value={item.value}
            endAdornment={item.endAdornment}
            text={item.text}
            name={name}
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
