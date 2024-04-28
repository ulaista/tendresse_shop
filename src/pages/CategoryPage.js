import React, { useEffect, useState } from "react";
import PageHeader from "../components/shopPageComponents/PageHeader";
import {ProductCard} from '../components/shopPageComponents/Product';
import instanceApi  from "../hooks/axiosConfig";
import { getCategoryByCategoryId } from "../utils/getProductsByCategoryId";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';







const FilterSidebar = ({ name }) => {
  return (
    <div className="border border-orange-950 p-4 rounded-lg">
      <ol className=''>
        <li className='flex justify-between items-center w-full text-left mb-2'><Link to={'/shop'}>{`< ${name}`}</Link></li>
      </ol>      

    </div>
  );
};

// Сортировка (пока без функциональности)
const SortingSelect = ({ onSortChange }) => {
  return (
    <div className="relative flex">
      <div className='mr-5 flex flex-wrap items-center'>Сортировка:</div>
      <select
        className="text-white w-56 transition duration-500 ease-in-out hover:text-[#6D5B4F] block appearance-none bg-[#6D5B4F] border border-[#6D5B4F]  hover:bg-[#F6F2E7] px-4 py-2 pr-8 rounded leading-none focus:outline-none focus:shadow-outline"
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


const CategoryPage = () => {
  const { categoryName } = useParams();
  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
      console.log(`Product name from URL: ${categoryName}`);
      if (categoryName) {
        getCategoryByCategoryId(categoryName)
          .then(id => {
            setCategoryId(id);
          })
          .catch(error => {
            console.error(error);
          });
      }
  }, [categoryId]);

  const [products, setProducts] = useState([]);
  const [productsId, setProductsId] = useState(null);

  useEffect(() => {
    if (categoryId) {
        instanceApi.get(`/categories_by_id/${categoryId}/`)
            .then((response) => {
                const categoryIds = response.data.map(category => category.id);
                return Promise.all(categoryIds.map(id =>
                    instanceApi.get(`/product_by_id/${id}/`).then(res => res.data)
                ));
            })
            .then((productResponses) => {
                setProducts(productResponses); 
            })
            .catch((error) => {
                console.error("Ошибка при загрузке информации о продукте:", error);
            });
    }
}, [categoryId]);

const [sortOption, setSortOption] = useState('popular');

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
            <FilterSidebar name={categoryName}/>
          </div>

          {/* Контентная часть */}
          <div className="w-full md:w-3/4 px-4">
            <div className="md:flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">МАГАЗИН</h2>
              <SortingSelect onSortChange={handleSortChange} />
            </div>
            <div className="container mx-auto px-4 pt-16">
              <h1 className="text-3xl font-bold mb-8">{categoryName}</h1>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
                {sortedProducts.map((product, index) => (
                  <div key={index} className="mb-16"> {/* Add negative margin-bottom */}
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

export default CategoryPage;

