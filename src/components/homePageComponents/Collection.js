import React from 'react';
import foto from '../../img/text-img-2.jpg';

const WeddingCollection = () => {
  return (
    // Контейнер компонента с высотой, равной 70% от высоты экрана
    <div className="pt-36 h-screen/8 md:h-screen/7 flex flex-col md:flex-row">
      {/* Контейнер для изображения с заданной высотой и object-cover для сохранения пропорций */}
      <div className="md:flex-1 w-full h-1/2 md:h-full">
        <img src={foto} alt="Свадебная коллекция" className="w-full h-full object-cover" />
      </div>
      {/* Контейнер для текста с флексбоксом и выравниванием */}
      <div className="pt-24 flex-1 h-1/2 md:h-full flex flex-col justify-center items-start p-8">
        <span className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-2">Будь особенной</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">СВАДЕБНАЯ<br/> КОЛЛЕКЦИЯ</h2>
        <button className="bg-orange-900 text-white text-xs sm:text-sm px-4 sm:px-6 py-2 rounded shadow-md hover:bg-brown-600 transition-colors">
          В каталог
        </button>
      </div>
    </div>
  );
};

export default WeddingCollection;
