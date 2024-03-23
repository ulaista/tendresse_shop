import React from 'react';
import foto from "../../img/text-img-1.jpg"; // Убедитесь, что путь до изображения корректный

const CatalogHomePage = () => {
  return (
    <div className="flex p-20 text-black font-sans">
      {/* Left Side - Content */}
      <div className="w-1/2 p-20 space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-4xl">
          ВАШ ОСОБЫЙ МИГ<br/>
          СТИЛЯ И СОБЛАЗНА!
        </h1>
        <p className="text-gray-500">
          Наше белье выражает вашу уникальную личность и стиль. Вы сможете выбрать среди разнообразия
          вариантов – от романтической до смелой, от классической до модной. Наша коллекция
          удовлетворит даже самых взыскательных клиентов и позволит вам чувствовать себя уверенно и
          прекрасно в любой ситуации.
        </p>
        <button className="mt-4 bg-black text-white px-5 py-2 shadow-lg rounded-lg hover:bg-gray-700">
          В КАТАЛОГ
        </button>
      </div>
      {/* Right Side - Image */}
      <div className="w-1/3 h-1/2">
        <img 
          src={foto} 
          alt="Lingerie" 
          className="object-cover w-full h-full" 
        />
      </div>
    </div>
  );
};

export default CatalogHomePage;
