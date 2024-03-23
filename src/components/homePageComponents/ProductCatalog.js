import React from 'react';
import foto_1 from '../../img/2.jpg';
// Компонент для иконок действий (например, "Добавить в избранное" и "Поделиться")
const ActionIcons = () => (
  <div className="absolute top-2 left-3 flex space-x-2">
    <button aria-label="Добавить в избранное" className="p-2 rounded-full bg-slate-50">
      <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
      </svg>
    </button>
    <button aria-label="Поделиться" className="p-2 rounded-full bg-slate-50">
      {/* Иконка поделиться (замените svg на вашу иконку) */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
      </svg>

    </button>
  </div>
);

// Компонент для карточки товара
const ProductCard = ({ image, title, description, price }) => (
  <div className="relative overflow-hidden">
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <ActionIcons />
    <div className="p-4 grid grid-rows-1 justify-center">
      <h3 className="text-lg font-bold text-center">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{description}</p>
      <div className="text-center mt-4">
        <span className="text-lg font-bold">{price}</span>
      </div>
    </div>
  </div>
);

// Компонент для каталога товаров
const ProductCatalog = () => {
  // Здесь должны быть данные о товарах, но для примера просто повторяем один и тот же товар
  const products = [
    { image: foto_1, title: 'КОМПЛЕКТ', description: 'Бюстгальтер и трусики', price: '800 е / шт' },
    { image: foto_1, title: 'КОМПЛЕКТ', description: 'Бюстгальтер и трусики', price: '800 е / шт' },
    { image: foto_1, title: 'КОМПЛЕКТ', description: 'Бюстгальтер и трусики', price: '800 е / шт' },
    { image: foto_1, title: 'КОМПЛЕКТ', description: 'Бюстгальтер и трусики', price: '800 е / шт' },
    // ... добавьте другие товары
  ];

  return (
    <div className="p-16">
      <h2 className="text-2xl font-bold mb-6">КАТАЛОГ ТОВАРОВ</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="mt-4 bg-black text-white px-5 py-2 shadow-lg rounded-lg hover:bg-gray-700">
            В КАТАЛОГ
        </button>
      </div>
    </div>
  );
};

export default ProductCatalog;
