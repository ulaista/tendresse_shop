import React from "react";

const DeliverySection = () => {
  return (
    <>
      <div className="space-y-4 pb-14">
        <h4 className="text-xl font-semibold">Оплата</h4>
        <p>Оплату можно осуществить следующими способами:</p>
        <ul className="list-disc pl-3">
          <li className="flex items-center py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            С помощью карт VISA / Mastercard на сайте при заказе
          </li>
          <li className="flex items-center py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Наличными при получении товара в отделении «Новая почта»
          </li>
          <li className="flex items-center py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            С помощью сервисов Google Pay, Apple Pay
          </li>
        </ul>
        <h4 className="text-xl font-semibold">Доставка</h4>
        <p>
          В период с 26 апреля по 1 июня 2021 действуют специальные условия на
          доставку: заказ на сумму от 50 гривен доставляются на отделение Новой
          почты и курьером по адресу - бесплатно!
        </p>
        <p>
          Стоимость доставки заказов на сумму до 50 грн, оплаченных при
          оформлении заказа онлайн
        </p>
        <ul className="list-disc pl-3">
          <li className="flex items-center py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            в отделение Новой почты - 35 грн;
          </li>
          <li className="flex items-center py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            курьерская доставка Новой почты - 45 грн
          </li>
        </ul>
        <p>
          Оформление наложенным платежом - стоимость доставки по тарифам Новой
          почты + 20 грн (фиксированная сумма перевода денежных средств) + 2% от
          суммы заказа.
        </p>
        <p>
          Ориентировочный срок доставки Заказ составляет от 1-го до 3-х рабочих
          дней. Доставка некоторых Заказов (зависит от выбранного товара) может
          составлять срок до 5-ти рабочих дней. Сроки поставки Заказ приведены
          без учета дня заказа и при использовании перевозчика ООО "Новая
          Почта". О точном срок доставки Заказ Покупателя оповещает перевозчик.
        </p>
        <p>
          Внимание! <br />
          Заказ хранится на складе транспортной компании не более 5-ти рабочих
          дней, после истечения этого срока - отправляется обратно. <br />
          Получить заказ может только тот человек, который указан в транспортной
          декларации как получатель. <br />
          При себе необходимо иметь документ, удостоверяющий личность. <br />
          Заказ с доставкой через « Новую почту » принимаются в соответствии с
          графиком работы перевозчика. График работы компании « Новая почта » Вы
          сможете найти на ее официальном сайте.
        </p>
      </div>
    </>
  );
};

export default DeliverySection;
