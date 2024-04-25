import React from 'react';
import foto from "../../img/text-img-1.jpg"; // Убедитесь, что путь до изображения корректный
import { Link } from 'react-router-dom';

const CatalogHomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 text-black font-sans">
      {/* Right Side - Image */}
      <div className="h-auto">
        <img 
          src={foto} 
          alt="Lingerie" 
          className="object-cover w-full h-auto" 
        />
      </div>
      {/* Left Side - Content */}
      <div className="p-7 lg:w-4/5 lg:pl-24 space-y-6">
        <h1 className="text-xl sm:text-lg md:text-xl font-medium tracking-tight lg:text-2xl">
          ВАШ ОСОБЫЙ МИГ<br/>
          СТИЛЯ И СОБЛАЗНА!
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-base">
          Наше белье выражает вашу уникальную личность и стиль. Вы сможете выбрать среди разнообразия
          вариантов – от романтической до смелой, от классической до модной. Наша коллекция
          удовлетворит даже самых взыскательных клиентов и позволит вам чувствовать себя уверенно и
          прекрасно в любой ситуации.
        </p>
        <Link to={'/shop'}>
        <button className="mt-4 text-white px-2 py-2">
          <a className='rounded-lg py-3 px-3 text-white hover:text-[#6D5B4F] bg-[#6D5B4F] hover:bg-[#F6F2E7] border border-[#6D5B4F]'>В КАТАЛОГ</a>
        </button>
        </Link>
      </div>
    </div>
    
  );
};

export default CatalogHomePage;
