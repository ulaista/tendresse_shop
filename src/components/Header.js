// import React, { useState } from 'react';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between">
//           <div className="flex space-x-7">
//             <div className="hidden md:flex items-center space-x-1">
//               <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Главная</a>
//               <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Магазин</a>
//               <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Покупателям</a>
//               <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">О нас</a>
//               <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Контакты</a>
//             </div>
//           </div>
//           <div>
//               <a href="#" className="flex items-center py-4 px-2">
//                 <span className="font-semibold text-gray-500 text-lg">TENDRESSE FEMME</span>
//               </a>
//             </div>
//           <div className="hidden md:flex items-center space-x-3 ">
//             <a href="" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Поиск</a>
//             <a href="" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Войти</a>
//             <a href="" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Любимое</a>
//             <a href="" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Корзина</a>
//           </div>
//           {/* Мобильное меню кнопка */}
//           <div className="md:hidden flex items-center">
//             <button type="button" onClick={toggleMenu}>
//               <MenuIcon className={`h-6 w-6 ${isOpen && 'hidden'}`} />
//               <XIcon className={`h-6 w-6 ${!isOpen && 'hidden'}`} />
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* Мобильное меню */}
//       <div className={`md:hidden ${!isOpen && 'hidden'}`}>
//         <a href="" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white">Главная</a>
//         <a href="" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white">Магазин</a>
//         <a href="" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white">Покупателям</a>
//         <a href="" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white">О нас</a>
//         <a href="" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white">Контакты</a>
//       </div>
//     </nav>
//   );
// };

// export default Header;

// import React, { useState } from 'react';
// import { Transition } from '@headlessui/react';

// const Header = () => {
//   const [isPanelOpen, setIsPanelOpen] = useState(false);

//   return (
//     <div>
//       <nav className="bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
//               {/* Hamburger button */}
//               <button
//                 onClick={() => setIsPanelOpen(true)}
//                 type="button"
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {/* Hamburger Icon */}
//                 <svg
//                   className="h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <div className="flex-1 flex justify-center sm:items-center sm:justify-between">
//               <div className="hidden md:block md:ml-6">
//                 <div className="flex space-x-4">
//                   {/* Primary navigation items */}
//                   <a
//                     href="#"
//                     className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Каталог
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Трусики
//                   </a>
//                 </div>
//               </div>
//               <div className="flex-shrink-0 flex items-center">
//                 <img
//                   width={160}
//                   height={160}
//                   src="https://demox-000-18.site-x.pro/Media/demox-000-18/icons/logo/demox_18_logo.svg"
//                 ></img>
//               </div>
//               <div className="hidden md:block md:ml-6">
//                 <div className="flex space-x-4">
//                   {/* Primary navigation items */}
//                   <a
//                     href="#"
//                     className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Каталог
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Трусики
//                   </a>
//                   <input
//                     className="border-b border-stone-900"
//                     placeholder={"Search"}
//                   ></input>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Catalog links for large screens */}
//         <div className="border-t border-gray-600 hidden md:flex justify-center space-x-4 py-2">
//           <a
//             href="#"
//             className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
//           >
//             Бюстгальтеры
//           </a>
//           <a
//             href="#"
//             className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
//           >
//             Боди
//           </a>
//           {/* More catalog items */}
//         </div>
//       </nav>

//       {/* Mobile menu, slide in from left */}
//       <Transition
//         show={isPanelOpen}
//         enter="transition ease-out duration-300 transform"
//         enterFrom="-translate-x-full"
//         enterTo="translate-x-0"
//         leave="transition ease-in duration-300 transform"
//         leaveFrom="translate-x-0"
//         leaveTo="-translate-x-full"
//       >
//         {(ref) => (
//           <div className="md:hidden" id="mobile-menu">
//             <div
//               ref={ref}
//               className="bg-white p-2 fixed inset-y-0 left-0 max-w-sm w-full"
//               aria-labelledby="slide-over-title"
//             >
//               <div className="pt-5 pb-4 space-y-1">
//                 {/* Close button */}
//                 <button
//                   onClick={() => setIsPanelOpen(false)}
//                   type="button"
//                   className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
//                 >
//                   {/* Close Icon */}
//                   <svg
//                     className="h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//                 {/* Navigation links for small screens */}
//                 <a
//                   href="#"
//                   className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Каталог
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Трусики
//                 </a>
//                 {/* More navigation links */}
//               </div>
//             </div>
//           </div>
//         )}
//       </Transition>
//     </div>
//   );
// };

// export default Header;

// import React, { useState } from 'react';
// import { Transition } from '@headlessui/react';
// import { SearchIcon } from '@heroicons/react/outline'; // Используйте Heroicons для иконок

// const Header = () => {
//   const [isPanelOpen, setIsPanelOpen] = useState(false);

//   return (
//     <div>
//       <nav className="bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <div className="border-b border-gray-900 flex box-border justify-between items-center pt-10 pb-10">
//             {/* Бургер слева для мобильных устройств */}
//             <div className="flex items-center md:hidden">
//               <button
//                 onClick={() => setIsPanelOpen(true)}
//                 type="button"
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Открыть основное меню</span>
//                 {/* Иконка бургера */}
//                 <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                 </svg>
//               </button>
//             </div>

//             {/* Лого посередине для всех устройств */}
//             <div className="absolute left-1/2 transform -translate-x-1/2">
//               <img
//                 width={160}
//                 height={160}
//                 src="https://demox-000-18.site-x.pro/Media/demox-000-18/icons/logo/demox_18_logo.svg"
//                 alt="Логотип"
//               />
//             </div>

//             {/* Контейнер для меню и поиска на больших экранах, скрыт на мобильных */}
//             <div className="hidden md:flex -space-x-1">
//               <a href="#" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Главная</a>
//               <a href="#" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Магазин</a>
//               <a href="#" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Покупателям</a>
//               <a href="#" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Блог</a>
//               <a href="#" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Контакты</a>
//             </div>

//             <div className="relative left-32">
//               <div className="absolute inset-y-0 right-0 pl-3 flex items-center pointer-events-none">
//                 <SearchIcon className='h-5 w-5 text-gray-900'/>
//               </div>
//               <input className="border-b border-stone-900 bg-white pl-8" placeholder="Search" />
//             </div>

//             {/* Иконки для личного кабинета, избранных товаров и корзины */}
//             <div className="flex items-center space-x-4">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//               </svg>
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
//               </svg>
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
//               </svg>
//             </div>
//           </div>

//           {/* Ссылки каталога для больших экранов */}
//           <div className="hidden md:flex justify-center space-x-4 py-2">
//             <a href="#" className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">ТРУСИКИ</a>
//             <a href="#" className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">БЮСТГАЛТЕРЫ</a>
//             <a href="#" className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">НОВИНКИ</a>
//             <a href="#" className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Свадебная коллекция</a>
//             <a href="#" className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">БОДИ</a>
//             <a href="#" className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">ПИЖАМЫ</a>
//             <a href="#" className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">СКИДКИ</a>
//           </div>
//         </div>
//       </nav>
//       {/* Мобильное меню, выезжающее слева */}
//        <Transition
//         show={isPanelOpen}
//         enter="transition ease-out duration-300 transform"
//         enterFrom="-translate-x-full"
//         enterTo="translate-x-0"
//         leave="transition ease-in duration-300 transform"
//         leaveFrom="translate-x-0"
//         leaveTo="-translate-x-full"
//       >
//         {(ref) => (
//           <div className="md:hidden" id="mobile-menu">
//             <div ref={ref} className="bg-white p-2 fixed inset-y-0 left-0 max-w-sm w-full" aria-labelledby="slide-over-title">
//               <div className="pt-5 pb-4 space-y-1">
//                 {/* Кнопка закрыть */}
//                 <button
//                   onClick={() => setIsPanelOpen(false)}
//                   type="button"
//                   className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
//                 >
//                   <span className="sr-only">Закрыть меню</span>
//                   <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//                 {/* Ссылки навигации для мобильных устройств */}
//                 <a href="#" className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Каталог</a>
//                 <a href="#" className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Трусики</a>
//               </div>
//             </div>
//           </div>
//         )}
//       </Transition>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
// import "./header.css";
import {
  SearchIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline"; // Предполагается использование Heroicons

const Header = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div>
      <nav className=" border-b border-gray-800 absolute z-10 w-full backdrop-opacity-10 backdrop-invert bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-800 grid grid-cols-3 items-center py-10 gap-4">
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsPanelOpen(true)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Открыть основное меню</span>
                {/* Иконка бургера */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            {/* Левая часть для меню */}
            <div className="flex justify-start items-center space-x-4">
              {/* Ссылки меню для десктоп версии */}
              <a
                href="#"
                className="hidden md:block text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Главная
              </a>
              <a
                href="#"
                className="hidden md:block text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Магазин
              </a>
              <a
                href="#"
                className="hidden md:block text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Покупателям
              </a>
              <a
                href="#"
                className="hidden md:block text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Блог
              </a>
              <a
                href="#"
                className="hidden md:block text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Контакты
              </a>
            </div>

            {/* Центральный блок для логотипа */}
            <div className="flex justify-center">
              <img
                src="https://demox-000-18.site-x.pro/Media/demox-000-18/icons/logo/demox_18_logo.svg"
                alt="Логотип"
                className="w-40 h-auto"
              />
            </div>

            {/* Правая часть для элементов управления пользователя */}
            <div className="flex justify-end items-center space-x-4">
              <div className="relative hidden md:block">
                <SearchIcon className="h-5 w-5 text-gray-900 absolute right-3 top-1/2 transform -translate-y-1/2" />
                <input
                  className="pl-3 pr-4 py-2 border-b border-gray-800 backdrop-opacity-10 backdrop-invert bg-white/50"
                  placeholder="Поиск"
                />
              </div>
              {/* Иконки сердца и корзины */}
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
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
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
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center space-x-4 py-2">
            <a
              href="#"
              className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              ТРУСИКИ
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              БЮСТГАЛТЕРЫ
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              НОВИНКИ
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Свадебная коллекция
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              БОДИ
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              ПИЖАМЫ
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              СКИДКИ
            </a>
          </div>
        </div>
      </nav>
      {/* Мобильное меню, выезжающее слева */}
      <Transition
        show={isPanelOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="bg-white p-2 fixed inset-y-0 left-0 max-w-sm w-full"
              aria-labelledby="slide-over-title"
            >
              <div className="pt-5 pb-4 space-y-1">
                {/* Кнопка закрыть */}
                <button
                  onClick={() => setIsPanelOpen(false)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                >
                  <span className="sr-only">Закрыть меню</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                {/* Ссылки навигации для мобильных устройств */}
                <a
                  href="#"
                  className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Каталог
                </a>
                <a
                  href="#"
                  className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Трусики
                </a>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Header;
// import React, { useState } from 'react';
// import { Transition } from '@headlessui/react';
// import { SearchIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/outline'; // Используйте Heroicons

// const Header = () => {
//   const [isPanelOpen, setIsPanelOpen] = useState(false);

//   return (
//     <div>
//       <nav className="bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Используем flex для основного layout с пространством для мобильных и десктоп версий */}
//           <div className="flex justify-between items-center py-10">
//             {/* Левая часть для меню (десктоп) и бургер-меню (мобильные) */}
//             <div className="flex justify-start items-center">
//               {/* Бургер меню для мобильных устройств */}
//               <button
//                 onClick={() => setIsPanelOpen(true)}
//                 className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
//                 aria-expanded="false"
//               >
//                 {/* Иконка бургера */}
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                 </svg>
//               </button>
//               {/* Ссылки меню для десктоп версии */}
//               <div className="hidden md:flex space-x-4">
//                 <a href="#" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Главная</a>
//                 <a href="#" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Магазин</a>
//                 <a href="#" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Покупателям</a>
//               </div>
//             </div>

//             {/* Центральный блок для логотипа, видимый всегда */}
//             <div className="flex-grow md:flex md:justify-center">
//               <img
//                 src="https://demox-000-18.site-x.pro/Media/demox-000-18/icons/logo/demox_18_logo.svg"
//                 alt="Логотип"
//                 className="w-40 h-auto"
//               />
//             </div>

//             {/* Правая часть для поиска (только десктоп), избранное и корзины */}
//             <div className="flex items-center space-x-4">
//               {/* Поиск только для десктоп версии */}
//               <div className="hidden md:block relative">
//                 <SearchIcon className='h-5 w-5 text-gray-900 absolute left-3 top-1/2 transform -translate-y-1/2'/>
//                 <input className="pl-10 pr-4 py-2 border border-gray-300 rounded-md" placeholder="Поиск"/>
//               </div>
//               {/* Иконки сердца и корзины, видимые всегда */}
//               <HeartIcon className="h-6 w-6 text-gray-800"/>
//               <ShoppingCartIcon className="h-6 w-6 text-gray-800"/>
//             </div>
//           </div>
//         </div>
//       </nav>
//   {/* Мобильное меню, выезжающее слева */}
//   <Transition
//     show={isPanelOpen}
//     enter="transition ease-out duration-300 transform"
//     enterFrom="-translate-x-full"
//     enterTo="translate-x-0"
//     leave="transition ease-in duration-300 transform"
//     leaveFrom="translate-x-0"
//     leaveTo="-translate-x-full"
//   >
//     {(ref) => (
//       <div className="md:hidden" id="mobile-menu">
//         <div ref={ref} className="bg-white p-2 fixed inset-y-0 left-0 max-w-sm w-full" aria-labelledby="slide-over-title">
//           <div className="pt-5 pb-4 space-y-1">
//             {/* Кнопка закрыть */}
//             <button
//               onClick={() => setIsPanelOpen(false)}
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
//             >
//               <span className="sr-only">Закрыть меню</span>
//               <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//             {/* Ссылки навигации для мобильных устройств */}
//             <a href="#" className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Главная</a>
//             <a href="#" className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Магазин</a>
//             <a href="#" className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Покупателям</a>
//             {/* Дополнительные ссылки */}
//           </div>
//         </div>
//       </div>
//     )}
//   </Transition>
// </div>
// );
// };

// export default Header;
