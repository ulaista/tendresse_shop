import React from 'react';
import heartIcon from '../../img/heartsolid.svg'; // Path to the heart icon
import heartSolidIcon from '../../img/heartsolid.svg'; // Path to the filled heart icon
import compareIcon from '../../img/comparesolid.svg'; // Path to the compare icon
import compareSolidIcon from '../../img/comparesolid.svg'; // Path to the filled compare icon
import foto1 from '../../img/3.jpg';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Комплект ',
    details: 'бюстгальтер и трусики',
    price: '800 €',
    imageUrl: foto1,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#000000','#000100','#02100'],
  },
  {
    id: 1,
    name: 'Комплект ',
    details: 'бюстгальтер и трусики',
    price: '800 €',
    imageUrl: foto1,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#000000','#000100','#02100'],
  },
  {
    id: 1,
    name: 'Комплект ',
    details: 'бюстгальтер и трусики',
    price: '800 €',
    imageUrl: foto1,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#000000','#000100','#02100'],
  },
  {
    id: 1,
    name: 'Комплект ',
    details: 'бюстгальтер и трусики',
    price: '800 €',
    imageUrl: foto1,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#000000','#000100','#02100'],
  },
  
];


export const ProductCard = ({ product }) => {
    const [selectedSize, setSelectedSize] = React.useState(product.sizes[0]); // По умолчанию выбран первый размер
    const [selectedColor, setSelectedColor] = React.useState(product.colors[0]); // По умолчанию выбран первый цвет
  
    return (
      <div className="group max-w-sm relative">
        <div className="relative z-10">
          <div className="absolute top-0 left-0 flex space-x-2 p-2">
            <button className="bg-[#F6F2E7] p-2 rounded-3xl">
              <img src={heartIcon} alt="Add to Wishlist" width="17" height="17" />
            </button>
            <button className="bg-[#F6F2E7] p-2 rounded-3xl">
              <img src={compareIcon} alt="Add to Compare" width="17" height="17" />
            </button>
          </div>
          <img className="w-full" src={product.imageUrl} alt={product.name} />
        </div>
        <div className="px-6 py-4">
          <div className="font-medium text-lg mb-2 flex justify-center">{product.name}</div>
          <div className="mb-2 flex justify-center">{product.details}</div>
          <p className="text-gray-700 flex justify-center text-base">{product.price}</p>
        </div>
      </div>
    );
  };

  const ProductCatalog = () => {
    return (
      <>
      <h1 className="text-3xl pl-20 mx-auto px-4 pt-16 font-medium mb-8">КАТАЛОГ ТОВАРОВ</h1>
      <div className="container mx-auto px-4 flex justify-center sm:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5">
          {products.map((product, index) => (
            <div key={index} className="mb-16"> {/* Add negative margin-bottom */}
              <Link to='/product1'><ProductCard product={product} /></Link>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  };
  
export default ProductCatalog;
