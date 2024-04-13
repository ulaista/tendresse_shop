import React from "react";

function PageHeader() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 flex justify-start">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="text-center">
              <ol className="list-reset inline-flex text-xs">
                <li>
                  <a href="/" className="">Главная</a>
                </li>
                <li><span className="mx-2">›</span></li>
                <li className="">
                  <a href="/" className="">Блог</a>
                </li>
                <li><span className="mx-2">›</span></li>
                <li className="">
                  Секреты Селф-Лав: Сохрани Красоту с Нашим Нижним Бельем
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
