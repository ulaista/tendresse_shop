import React from 'react';
import heartIcon from '../../img/heartsolid.svg'; // Path to the heart icon
import heartSolidIcon from '../../img/heartsolid.svg'; // Path to the filled heart icon
import compareIcon from '../../img/comparesolid.svg'; // Path to the compare icon
import compareSolidIcon from '../../img/comparesolid.svg'; // Path to the filled compare icon
import foto1 from '../../img/3.jpg';

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
        <div className="absolute inset-x-0 px-6 py-4 bg-orange-50 shadow-lg hidden group-hover:block z-50">
        <div className='flex flex-col'>
        <div className="flex space-x-2 mt-2">
          {product.colors.map((color) => (
            <button
              key={color}
              className={`h-6 w-6 rounded-md border border-white
                          ${color === selectedColor ? 'ring-2 ring-[#6D5B4F]' : ''} 
                          hover:brightness-95 focus:outline-none focus:ring`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            >
            </button>
          ))}
        </div>
        <div className="flex space-x-2 mt-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`border px-3 py-1 rounded-md text-sm font-semibold 
                          ${size === selectedSize ? 'bg-[#6D5B4F] text-white' : 'bg-white text-gray-700'} 
                          hover:bg-[#6D5B4F] hover:text-white`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>   
        </div>
          <button className="w-full border border-[#6D5B4F] bg-[#6D5B4F] text-white hover:text-[#6D5B4F] py-2 mt-4 rounded hover:bg-orange-50 transition duration-300 ease-in-out">
            Купить
          </button>
        </div>
      </div>
    );
  };

  const ProductList = () => {
    return (
      <div className="container mx-auto px-4 pt-16">
        <h1 className="text-3xl font-bold mb-8">ПОХОЖИЕ ТОВАРЫ</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="mb-16"> {/* Add negative margin-bottom */}
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default ProductList;
