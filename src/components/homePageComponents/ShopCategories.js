import React from 'react';
import foto_1 from '../../img/1.jpg';
import foto_2 from '../../img/2.jpg';
import foto_3 from '../../img/3.jpg';
import foto_4 from '../../img/4.jpg';

const categories = [
  { name: 'Трусики', imageUrl: foto_1 },
  { name: 'Бюстгальтеры', imageUrl: foto_2 },
  { name: 'Новинки', imageUrl: foto_3 },
  { name: 'Боди', imageUrl: foto_4 },
];

const CategoryCard = ({ name, imageUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={imageUrl} alt={name} className="w-full h-auto object-cover" />
      <p className="mt-2 text-sm font-medium">{name}</p>
    </div>
  );
};

const ShopCategories = () => {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-left mb-10">КАТЕГОРИИ МАГАЗИНА</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.name} name={category.name} imageUrl={category.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategories;
