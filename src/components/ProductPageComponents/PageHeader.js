import React from "react";

function PageHeader() {
  return (
    <div className="-m-1 bg-white">
      <div className="container mx-auto px-4 flex justify-start">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="text-center">
              <ol className="list-reset inline-flex">
                <li>
                  <a href="/" className="">Главная</a>
                </li>
                <li><span className="mx-2">›</span></li>
                <li className="">
                    <a href="/" className="">Магазин</a>
                </li>
                <li><span className="mx-2">›</span></li>
                <li>
                  <a href="/" className="">Трусики</a>
                </li>
                <li><span className="mx-2">›</span></li>
                <li className="">Пижама</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
