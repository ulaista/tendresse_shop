import React from "react";
const Footer = () => {
    return (
      <footer className="border border-gray-600 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="mb-8 md:mb-0 py-8">
              <div className="pt-12 flex justify-left">
              <img
                src="https://demox-000-18.site-x.pro/Media/demox-000-18/icons/logo/demox_18_logo.svg"
                alt="Логотип"
                className="w-40 h-auto"
              />
            </div>
            </div>
            <div className="mb-8 md:mb-0 py-8">
              <h3 className="text-xl font-semibold mb-4">Меню</h3>
              <ul>
                <li><a href="#" className="block mb-2">Магазин</a></li>
                <li><a href="#" className="block mb-2">Покупателям</a></li>
                <li><a href="#" className="block mb-2">Блог</a></li>
                <li><a href="#" className="block">Контакты</a></li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0 py-8">
              <h3 className="text-xl font-semibold mb-4">Личный кабинет</h3>
              <ul>
                <li><a href="#" className="block mb-2">Профиль</a></li>
                <li><a href="#" className="block mb-2">Сравнение</a></li>
                <li><a href="#" className="block mb-2">Избранное</a></li>
                <li><a href="#" className="block">Мои заказы</a></li>
              </ul>
            </div>
            <div className="border-l border-gray-700 pl-5 py-8">
              <h3 className="text-xl font-semibold mb-4">Контакты</h3>
              <ul>
                <li className="flex items-center mb-2">
                  <svg className="fill-current text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    {/* Здесь должен быть SVG-иконка местоположения */}
                  </svg>
                  ул. Киевская 1
                </li>
                <li className="flex items-center mb-2">
                  <svg className="fill-current text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    {/* Здесь должен быть SVG-иконка телефона */}
                  </svg>
                  +38 (099) 000 00 00
                </li>
                <li className="flex items-center mb-2">
                  <svg className="fill-current text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    {/* Здесь должен быть SVG-иконка электронной почты */}
                  </svg>
                  support@mail.com
                </li>
                {/* Иконки социальных сетей */}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 py-4">
            <p className="text-left ml-16 text-sm text-gray-500">Name of shop © 2024</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  