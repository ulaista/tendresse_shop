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


const ProductCard = ({ product }) => {
    const [selectedSize, setSelectedSize] = React.useState(product.sizes[0]); // По умолчанию выбран первый размер
    const [selectedColor, setSelectedColor] = React.useState(product.colors[0]); // По умолчанию выбран первый цвет
  
    return (
      <div className="group max-w-sm  shadow-lg relative">
        <div className="relative z-10">
          <div className="absolute top-0 right-0 flex space-x-2 p-2">
            <button className="bg-gray-200 p-2 rounded-md">
              <img src={heartIcon} alt="Add to Wishlist" width="25" height="25" />
            </button>
            <button className="bg-gray-200 p-2 rounded-md">
              <img src={compareIcon} alt="Add to Compare" width="25" height="25" />
            </button>
          </div>
          <img className="w-full" src={product.imageUrl} alt={product.name} />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 flex justify-center">{product.name}</div>
          <div className="mb-2 flex justify-center">{product.details}</div>
          <p className="text-gray-700 flex justify-center text-base">{product.price}</p>
        </div>
      </div>
    );
  };

  const ProductCatalog = () => {
    return (
      <>
      <h1 className="text-3xl pl-16 mx-auto px-4 pt-16 font-bold mb-8">ПОХОЖИЕ ТОВАРЫ</h1>
      <div className="container mx-auto px-4 flex justify-center sm:block">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
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
