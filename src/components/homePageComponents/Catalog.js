import React from 'react';
import foto from "../../img/text-img-1.jpg"; // Убедитесь, что путь до изображения корректный

const CatalogHomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-20 text-black font-sans">
      {/* Right Side - Image */}
      <div className="h-auto">
        <img 
          src={foto} 
          alt="Lingerie" 
          className="object-cover w-full h-auto" 
        />
      </div>
      {/* Left Side - Content */}
      <div className="p-20 space-y-6">
        <h1 className="text-xl sm:text-lg md:text-xl font-extrabold tracking-tight lg:text-2xl">
          ВАШ ОСОБЫЙ МИГ<br/>
          СТИЛЯ И СОБЛАЗНА!
        </h1>
        <p className="text-gray-500 text-xs md:text-sm lg:text-base">
          Наше белье выражает вашу уникальную личность и стиль. Вы сможете выбрать среди разнообразия
          вариантов – от романтической до смелой, от классической до модной. Наша коллекция
          удовлетворит даже самых взыскательных клиентов и позволит вам чувствовать себя уверенно и
          прекрасно в любой ситуации.
        </p>
        <button className="mt-4 bg-black text-white px-5 py-2 shadow-lg rounded-lg hover:bg-gray-700">
          В КАТАЛОГ
        </button>
      </div>
    </div>
    
  );
};

export default CatalogHomePage;
