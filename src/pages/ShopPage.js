import React, { useEffect, useState } from "react";
import ShopCategories, { CategoryGrid } from '../components/homePageComponents/ShopCategories';
import PageHeader from "../components/shopPageComponents/PageHeader";
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import {ProductCard} from '../components/shopPageComponents/Product';
import instanceApi  from "../hooks/axiosConfig";



const DropdownFilter = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-500 mb-3">
      <button
        className="flex justify-between items-center w-full text-left mt-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-700">{label}</span>
        <svg
          className={`fill-current text-gray-700 h-4 w-4 transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.25,8L10,12.75L14.75,8H5.25Z" />
        </svg>
      </button>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <div className="mt-2 pl-2">
          {children}
        </div>
      </Transition>
    </div>
  );
};

const FilterSidebar = () => {
  const filters = ['Цена', 'Производитель', 'Цвет', 'Размер'];

  // Состояние, которое хранит выбранные значения фильтров
  const [selectedFilters, setSelectedFilters] = useState({});

  // Эта функция будет обрабатывать изменения для каждого фильтра
  const handleFilterChange = (filter, value) => {
    setSelectedFilters(prev => ({ ...prev, [filter]: value }));
  };
  const [priceFilter, setPriceFilter] = useState({ min: 300, max: 1300 });
  const [colorFilter, setColorFilter] = useState([]);
  const [manfuckFilter, setManfuckFilter] = useState([]);
  const [sizeFilter, setSizeFilter] = useState([]);

  const handlePriceChange = (value) => {
    setPriceFilter(value);
  };

  const handleColorChange = (color) => {
    setColorFilter(prevColors =>
      prevColors.includes(color)
        ? prevColors.filter(c => c !== color)
        : [...prevColors, color]
    );
  };

  const handleManfuckChange = (manfuck) => {
    setManfuckFilter(prevManfucks =>
      prevManfucks.includes(manfuck)
        ? prevManfucks.filter(m => m !== manfuck)
        : [...prevManfucks, manfuck]
    );
  };

  const handleSizeChange = (size) => {
    setSizeFilter(prevSizes =>
      prevSizes.includes(size)
        ? prevSizes.filter(s => s !== size)
        : [...prevSizes, size]
    );
  };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    instanceApi.get('/all_categories/')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.error("Ошибка загрузки категорий:", error));
  }, []);

  const [colors, setColors] = useState([]);
  useEffect(() => {
    instanceApi.get('/colors/')
      .then((response) => {
        setColors(response.data);
      })
      .catch((error) => console.error("Ошибка загрузки категорий:", error));
  }, []);

  const [sizies, setSizies] = useState([]);
  useEffect(() => {
    instanceApi.get('/sizes/')
      .then((response) => {
        setSizies(response.data);
      })
      .catch((error) => console.error("Ошибка загрузки категорий:", error));
  }, []);

  const [manfucks, setManfucks] = useState([]);
  useEffect(() => {
    instanceApi.get('/manufacturers/')
      .then((response) => {
        setManfucks(response.data);
      })
      .catch((error) => console.error("Ошибка загрузки категорий:", error));
  }, []);

  return (
    <div className="border border-orange-950 p-4 rounded-lg">
      <ol className=''>
        {categories.map((category) => (
          <li key={category.id} className='flex justify-between items-center w-full text-left mb-2'><Link to={`/shop/category/${category.name}/`}>{category.name}</Link></li>
        ))}
      </ol>      
      {/* <h3 className="font-semibold text-lg mb-4">Фильтры</h3>
      <div>
      {filters.map(filter => (
  <DropdownFilter key={filter} label={filter}>
    {filter === 'Цена' && (
            <PriceSlider
              min={100}
              max={2000}
              onPriceChange={handlePriceChange}
            />
    )}
    {filter === 'Производитель' && manfucks.map(manfuck => (
      <label key={manfuck.id} className="block">
        <input
          type="checkbox"
          checked={manfuckFilter.includes(manfuck.id)}
          onChange={() => handleManfuckChange(manfuck.id)}
        />
        {manfuck.name}
      </label>
    ))}
    {filter === 'Цвет' && colors.map(color => (
      <label key={color.id} className="block">
        <input
          type="checkbox"
          checked={colorFilter.includes(color.id)}
          onChange={() => handleColorChange(color.id)}
        />
        {color.name}
      </label>
    ))}
    {filter === 'Размер' && sizies.map(size => (
      <label key={size.id} className="block">
        <input
          type="checkbox"
          checked={sizeFilter.includes(size.id)}
          onChange={() => handleSizeChange(size.id)}
        />
        {size.name}
      </label>
    ))}
  </DropdownFilter>
))}
      </div> */}
    </div>
  );
};

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



const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('popular');

  useEffect(() => {
    instanceApi.get('/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error("Ошибка загрузки продуктов:", error));
  }, []);

  const handleSortChange = (option) => {
    setSortOption(option);
  };

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

  return (
    <div className="py-40 text-[#40312C]">
      <PageHeader/>
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap -mx-4">
          {/* Фильтры */}
          <div className="w-full md:w-1/4 px-4 mb-4">
            <FilterSidebar />
          </div>

          {/* Контентная часть */}
          <div className="w-full md:w-3/4 px-4">
            <div className="md:flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">МАГАЗИН</h2>
              <SortingSelect onSortChange={handleSortChange} />
            </div>
            <div className='py-5'><CategoryGrid /></div>
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
};

export default ShopPage;

