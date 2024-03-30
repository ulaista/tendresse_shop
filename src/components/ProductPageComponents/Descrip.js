import React from 'react';

const ProductDetails = ({ product }) => {
  const [activeTab, setActiveTab] = React.useState('description');
  const [selectedSize, setSelectedSize] = React.useState(product.sizes[0]); 
  const [selectedColor, setSelectedColor] = React.useState(product.colors[0]); 

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-5 font-semibold">{product.name}</h1>
      
      <div className="flex items-center my-2 mb-4">
        <span className="text-gray-700 mr-2">Артикул:</span>
        <span className="font-medium">{product.sku}</span>
      </div>
      
      <div className="flex items-center my-2">
        <span className="text-gray-700 mr-2">Производитель:</span>
        <a href={product.manufacturerLink} className="text-blue-600 hover:text-blue-800">
          {product.manufacturer}
        </a>
      </div>
      
      <div className="my-4">
        {product.isAvailable ? (
          <span className="text-xl ">В наличии</span>
        ) : (
          <span className="text-xl my-3">Ожидается</span>
        )}
      </div>

      <div className='flex flex-col'>
        <p>Цвет</p>
        <div className="flex space-x-2 mt-2">
          {product.colors.map((color) => (
            <button
              key={color}
              className={`h-12 w-12 rounded-md border border-white
                          ${color === selectedColor ? 'ring-2 ring-[#6D5B4F]' : ''} 
                          hover:brightness-95 focus:outline-none focus:ring`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            >
            </button>
          ))}
        </div>
        <p>Размер</p>
        <div className="flex flex-wrap space-x-2 mt-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`h-12 w-13 border px-3 py-1 rounded-md text-sm font-semibold 
                          ${size === selectedSize ? 'bg-[#6D5B4F] text-white' : 'bg-white text-gray-700'} 
                          hover:bg-[#6D5B4F] hover:text-white`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>   
        </div>

      <div className="my-4">
        <div
          className={`cursor-pointer ${activeTab === 'description' ? 'font-bold' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Описание
        </div>
        {activeTab === 'description' && (
          <div className="my-2">
            <p>{product.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};


export default ProductDetails;