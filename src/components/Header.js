import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/outline";
import instanceApi from "../hooks/axiosConfig";
import { useNavigate } from 'react-router-dom';


// Предполагаем, что эти иконки 
const Header = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const navigate = useNavigate(); 
  const [dropdownsOpen, setDropdownsOpen] = useState({
    forcustomer: false,
    novelties: false,
  });

  // Эффект для добавления стилей к body, чтобы страница сдвигалась вправо, когда меню открыто
  useEffect(() => {
    if (isPanelOpen) {
      document.body.style.overflow = "hidden"; // Отключаем прокрутку для body
      document.body.style.transform = "translateX(250px)";
      document.body.style.transition = "transform 300ms ease-in-out";
    } else {
      document.body.style.overflow = ""; // Включаем прокрутку обратно
      document.body.style.transform = "";
      document.body.style.transition = "transform 300ms ease-in-out";
    }

    // Очистка эффекта
    return () => {
      document.body.style.overflow = ""; // Убедитесь, что прокрутка включена при размонтировании
      document.body.style.transform = "";
      document.body.style.transition = "";
    };
  }, [isPanelOpen]);

  const handleMouseEnter = (menu) => {
    setDropdownsOpen({ ...dropdownsOpen, [menu]: true });
  };

  const handleMouseLeave = (menu) => {
    setDropdownsOpen({ ...dropdownsOpen, [menu]: false });
  };

  const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false); // Управление видимостью поля ввода
  
    const handleSearchIconClick = () => {
      setIsSearchActive(true); // Активация поля ввода
    };
  
    const handleSearchInputChange = (event) => {
      const query = event.target.value;
      setSearchQuery(query);
      if (query.length > 0) {
        instanceApi
          .get(`/search/?q=${encodeURIComponent(query)}`)
          .then((response) => {
            setSearchResults(response.data);
            setIsDropdownVisible(true);
          })
          .catch((error) => {
            console.error("Ошибка при выполнении поиска:", error);
            setIsDropdownVisible(false);
          });
      } else {
        setIsDropdownVisible(false);
      }
    };
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter' && searchQuery) {
        event.preventDefault();
        navigate(`/search?query=${encodeURIComponent(searchQuery)}`); // Переход на страницу результатов поиска
        setIsSearchActive(false); // Скрытие поля ввода после поиска
      }
    };
  
    const handleBlur = () => {
      setIsSearchActive(false); // Скрытие поля ввода и результатов поиска при потере фокуса
      setIsDropdownVisible(false);
    };
  
    return (
      <div className="relative">
        {!isSearchActive && (
          <SearchIcon
            className="h-5 w-5 cursor-pointer"
            onClick={handleSearchIconClick}
          />
        )}
        {isSearchActive && (
          <input
            type="search"
            className="w-36 pl-2 pr-4 py-2 border-b border-gray-300 bg-white outline-none"
            placeholder="Поиск"
            onChange={handleSearchInputChange}
            onKeyDown={handleKeyPress}
            onBlur={handleBlur} 
            autoFocus
          />
        )}
        {isDropdownVisible && (
          <div className="absolute z-10 w-full bg-white shadow-md max-h-60 overflow-auto">
            {searchResults.map((item, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  navigate(`/product/${item.title_en}`);
                  setIsSearchActive(false);
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  

  return (
    <div>
      <nav className="absolute z-10 w-full text-[#6D5B4F] backdrop-opacity-10 backdrop-invert bg-white/60">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-800 flex justify-center lg:grid grid-cols-7 items-center py-8 gap-1">
            <div className="flex-none items-center lg:hidden">
              <button
                onClick={() => setIsPanelOpen(!isPanelOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-500 focus:outline-none focus:text-gray-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Открыть основное меню</span>
                {/* Изменение иконки бургера на X при открытии меню */}
                {isPanelOpen ? (
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
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
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
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
            {/* Левая часть для меню */}
            <div
              className="flex justify-start items-center ml-12 col-span-3 text-xs xl:text-sm"
            >
               {/* Ссылки меню для десктоп версии */}
              <Link
                to="/shop"
                className="hidden lg:block  px-3 py-2 rounded-md"
              >
                Магазин
              </Link>
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("forcustomer")}
                onMouseLeave={() => handleMouseLeave("forcustomer")}
              >
                <Link
                  to="/forcustomer"
                  className="hidden lg:block px-3 py-2 rounded-md" 
                >
                  Покупателям
                </Link>
                {dropdownsOpen.forcustomer && (
                  <div 
                    className="absolute left-0  shadow-lg bg-[#F6F2E7]"
                  >
                    {/* Dropdown items */}
                    <Link to="/about" className="block px-3 py-2 hover:bg-white text-sm">
                      О нас
                    </Link>
                    <Link to="/delivery" className="block px-3 py-2 hover:bg-white text-sm">
                      Доставка и оплата
                    </Link>
                    <Link to="/publicoffer" className="block px-3 py-2 hover:bg-white text-sm">
                      Публичная оферта
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/blog"
                className="hidden lg:block  px-3 py-2 rounded-md"
              >
                Блог
              </Link>
              <Link
                to="/contacts"
                className="hidden lg:block  px-3 py-2 rounded-md"
              >
                Контакты
              </Link>
            </div>
            {/* Центральный блок для логотипа */}
             <div className="grow flex justify-center lg:block col-span-2">
               <Link
               to="/"
              >       
              <img
                src="https://demox-000-18.site-x.pro/Media/demox-000-18/icons/logo/demox_18_logo.svg"
                alt="Логотип"
                className="w-40 h-auto justify-center"
              />
              </Link>
            </div>
            {/* Правая часть для элементов управления пользователя */}
             <div className="flex justify-end items-center space-x-4 mr-8 col-span-2">
              <Search />
              {/* Иконки сердца и корзины */}
              {/* <svg
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
                className="w-6 h-6 hidden lg:block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg> */}
              <Link to={'/cart'}>
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
              </Link>
            </div>
          </div>
           <div className="hidden md:flex justify-center space-x-4 py-2">
             <a
              href="#"
              className=" hover:text-gray-700 px-3 py-2 rounded-md text-sm "
            >
              ТРУСИКИ
            </a>
            <a
              href="#"
              className=" hover:text-gray-700 px-3 py-2 rounded-md text-sm "
            >
              БЮСТГАЛТЕРЫ
            </a>
            <div 
              onMouseEnter={() => handleMouseEnter("novelties")}
              onMouseLeave={() => handleMouseLeave("novelties")} 
              className="relative pt-1"
            >
                <a
                  href="#"
                  className="hover:text-gray-700 px-3 py-2 rounded-md text-sm"
                >
                  НОВИНКИ
                </a>
                {dropdownsOpen.novelties && (
                  <div className="absolute left-0 bg-[#F6F2E7] mt-1 shadow-lg p-2 min-w-max">
                    <a href="#" className="block px-3 py-2 text-sm min-w-max">
                      Свадебная коллекция
                    </a>
                  </div>
                )}
            </div>
            <a
              href="#"
              className=" hover:text-gray-700 px-3 py-2 rounded-md text-sm "
            >
              БОДИ
            </a>
            <a
              href="#"
              className=" hover:text-gray-700 px-3 py-2 rounded-md text-sm "
            >
              ПИЖАМЫ
            </a>
            <a
              href="#"
              className=" hover:text-gray-700 px-3 py-2 rounded-md text-sm "
            >
              СКИДКИ
            </a>
          </div>          
        </div>
      </nav>
      {/* Мобильное меню */}
      <Transition
        show={isPanelOpen}
        enter="transition ease-out duration-1200 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-1200 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        {(ref) => (
          <div className="lg:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="bg-white fixed inset-y-0 left-0 "
              aria-labelledby="slide-over-title"
            >
              <div className=" pb-4 -ml-64 space-y-1 max-h-screen flex flex-col overflow-y-auto">
                {/* Ссылки для мобильного меню */}
                <div className=" px-3 py-5  text-xl bg-[#F6F2E7]">
                  Меню
                </div>
                <Link
                to="/"
                className=" px-4 py-2 text-base"
                >
                  Главная
                </Link>
                <Link
                  to="/shop"
                  className=" px-4 py-2 text-base"
                >
                  Магазин
                </Link>
                <Link
                to="/forcustomer"
                className=" px-4 py-2 text-base"
                >
                  Покупателям
                </Link>
                <Link
                  to="/blog"
                  className=" px-4 py-2 text-base"
                >
                  Блог
                </Link>
                <Link
                  to="/contacts"
                  className=" px-4 py-2 text-base"
                >
                  Контакты
                </Link>            
                
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Header;
