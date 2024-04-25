import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../ProductsContext';
import { serverURL } from "../../hooks/axiosConfig";


export const ProductCard = ({ product }) => {
    const [selectedSize, setSelectedSize] = React.useState(product.sizes[0]); 
    const [selectedColor, setSelectedColor] = React.useState(product.colors[0]); 
    const imageUrl1 = `${serverURL}${product.main_photo}`
    const imageUrl2 = `${serverURL}${product.secondary_photo}`
    const src = `/product/${product.title_en}/`
  
    return (
      <div className="group hover:shadow-md max-w-sm relative">
        <div className="relative z-10">
            <Link
              to={src}
            >
              <div className="relative h-72"> {/* Adjust height as needed */}
              {/* Primary Image */}
                <img
                  src={imageUrl1}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                />
                {/* Secondary Image */}
                <img
                  src={imageUrl2}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                />
              </div>
            </Link>
        </div>
        <Link
          to={src}
        >
        <div className="px-6 py-4">
          <div className="font-medium text-sm mb-2 flex justify-center">{product.name}</div>
          <div className="mb-2 text-xs flex justify-center">{product.details}</div>
          <p className="text-gray-700 flex justify-center text-base">{product.price * 1} €</p>
        </div>
        </Link>
        <div className="absolute inset-x-0 px-6 py-4 bg-[#F6F2E7] shadow-lg hidden group-hover:block z-50">
        <div className='flex flex-col'>
        <div className="flex space-x-2 mt-2">
          {product.colors.map((color) => (
            <button
              key={color.id}
              className={`h-9 w-9 rounded-md border border-white
                          ${color.hex_color === selectedColor ? 'ring-2 ring-[#6D5B4F]' : ''} 
                          hover:brightness-95 focus:outline-none focus:ring`}
              style={{ backgroundColor: color.hex_color }}
              onClick={() => setSelectedColor(color.hex_color)}
            >
            </button>
          ))}
        </div>
        <div className="flex-col mt-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`border mr-1 border-[#6D5B4F] px-3 py-2 my-1 rounded-md text-sm font-semibold 
                          ${size === selectedSize ? 'bg-[#6D5B4F] text-white' : 'bg-white text-gray-700'} 
                          hover:bg-[#6D5B4F] hover:text-white`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>   
        </div>
        <Link to={src}>
          <button className="w-full border border-[#6D5B4F] bg-[#6D5B4F] text-white hover:text-[#6D5B4F] py-2 mt-4 rounded hover:bg-orange-50 transition duration-300 ease-in-out">
            Купить
          </button>
        </Link>
        </div>
      </div>
    );
  };

  const Product = () => {
    const { products } = useProducts();
    return (
      <div className="container mx-auto px-4 pt-16">
        <h1 className="text-3xl font-bold mb-8">КАТАЛОГ</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
          {products.map((product, index) => (
            <div key={index} className="mb-16"> {/* Add negative margin-bottom */}
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default Product;
