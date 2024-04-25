import React, { useEffect, useState } from "react";
import instanceApi  from "../../hooks/axiosConfig";
import { serverURL } from "../../hooks/axiosConfig";
import { Link } from 'react-router-dom';





const CategoryCard = ({ name, imageUrl }) => {
  const imagesrc = `${serverURL}${imageUrl}`
  return (
    <div className="flex flex-col items-center">
      {/* Внешний div обеспечивает overflow-hidden для внутреннего содержимого */}
      <div className="overflow-hidden">
        {/* Изображение теперь увеличивается в пределах этого div, не изменяя свой исходный размер */}
        <div className="image-container" style={{ height: "220px" }}>
          <img src={imagesrc} alt={name} className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
        </div>
      </div>
      <p className="mt-2 text-sm font-bold">{name}</p>
    </div>
  );
};




export const CategoryGrid = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    instanceApi.get('/all_categories/')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.error("Ошибка загрузки категорий:", error));
  }, []);

  return(
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
             <Link to={`/shop/category/${category.name}/`}>
              <CategoryCard key={category.id} name={category.name} imageUrl={category.preview_photo} />
             </Link>
          ))}
    </div>
  );
}

const ShopCategories = () => {
  return (
    <div className="pt-12 pb-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-left mb-10">КАТЕГОРИИ МАГАЗИНА</h2>
        <CategoryGrid/>
      </div>
    </div>
  );
};

export default ShopCategories;
