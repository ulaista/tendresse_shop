import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import instanceApi from '../hooks/axiosConfig';
import { useMemo } from 'react';
import {ProductCard} from '../components/shopPageComponents/Product';
import ShopCategories, { CategoryGrid } from '../components/homePageComponents/ShopCategories';





function SearchPage() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('none');
  const location = useLocation();

  const sortedProducts = useMemo(() => {
    switch (sortOption) {
      case 'priceAsc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'new':
        return [...products].filter(product => product.new);
      case 'sale':
        return [...products].filter(product => product.sale > 0);
      case 'popular':
      default:
        return products;
    }
  }, [products, sortOption]);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');
    if (query) {
      instanceApi.get(`/search/?q=${encodeURIComponent(query)}`)
        .then(response => {
          setProducts(response.data);
        }).catch(error => console.error("Search error:", error));
    }
  }, [location.search]);


  if (!products) {
    return <div>Не найдено...</div>;
  }
  
  const SortingSelect = ({ onSortChange }) => {
    return (
      <div className="relative flex">
        <div className='mr-5 flex flex-wrap items-center'>Сортировка:</div>
        <select
          className="text-white w-56 transition duration-500 ease-in-out hover:text-[#6D5B4F] block appearance-none bg-[#6D5B4F] border border-[#6D5B4F]  hover:bg-[#F6F2E7] px-2 py-2 pr-8 rounded leading-none focus:outline-none focus:shadow-outline"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="none">Без сортировки</option>
          <option value="popular">Популярные</option>
          <option value="priceAsc">Цена: по возрастанию</option>
          <option value="priceDesc">Цена: по убыванию</option>
          <option value="new">Новинки</option>
          <option value="sale">Скидки</option>
        </select>
      </div>
    );
  };
  
  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <div className="py-40 text-[#40312C]">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-3/4 px-4">
            <div className="flex justify-between items-center mb-4">
              <SortingSelect onSortChange={handleSortChange} />
            </div>
            <div className="container mx-auto px-4 pt-16">
              <h1 className="text-3xl font-bold mb-8">КАТАЛОГ</h1>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
                {sortedProducts.map((product, index) => (
                  <div key={index} className="mb-16"> 
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
