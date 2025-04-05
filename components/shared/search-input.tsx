'use client';
import { cn } from '@/lib/utils';
import { SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useClickAway, useDebounce } from 'react-use';
import { Api } from '../../services/api-client';
import { Product } from '@prisma/client';

interface Props {
  className?: string;
}

export const SearchInput = ({ className }: Props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  const onClikItem = () => {
    setFocused(false);
    setSearchQuery('');
    setProducts([]);
  };

  useDebounce(
    () => {
      Api.products.search(searchQuery).then((data) => setProducts(data));
    },
    500,
    [searchQuery]
  );

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-30" />
      )}
      <div ref={ref} className={cn('relative rounded-xl z-30', className)}>
        <SearchIcon className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-red-500-400" />
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          onFocus={() => setFocused(true)}
          placeholder="Найти пиццу..."
          className="w-full bg-gray-100 p-2 pl-10 rounded-xl"
        />

        {products.length > 0 && (
          <div
            className={cn(
              'absolute w-full bg-white rounded-xl top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30 p-2',
              focused && 'visible opacity-100 top-12'
            )}
          >
            {products.map((product) => (
              <Link
                onClick={onClikItem}
                key={product.id}
                href={`/product/${product.id}`}
                className="flex items-center gap-3 px-3 py-2 hover:bg-primary/10 rounded-sm"
              >
                <img
                  width={30}
                  height={30}
                  src={product.imageUrl}
                  alt={product.name}
                />

                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
