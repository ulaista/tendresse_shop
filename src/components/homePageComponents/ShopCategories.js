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
      {/* Внешний div обеспечивает overflow-hidden для внутреннего содержимого */}
      <div className="overflow-hidden">
        {/* Изображение теперь увеличивается в пределах этого div, не изменяя свой исходный размер */}
        <img src={imageUrl} alt={name} className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
      </div>
      <p className="mt-2 text-sm font-medium">{name}</p>
    </div>
  );
};




export const CategoryGrid = () => {
  return(
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.name} name={category.name} imageUrl={category.imageUrl} />
          ))}
    </div>
  );
}

const ShopCategories = () => {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-left mb-10">КАТЕГОРИИ МАГАЗИНА</h2>
        <CategoryGrid/>
      </div>
    </div>
  );
};

export default ShopCategories;
