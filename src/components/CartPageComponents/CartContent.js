import React from "react";
import { Link } from 'react-router-dom';
import { useCart } from "../../CartContext";
import { serverURL } from "../../hooks/axiosConfig";

const CartContent = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const decreaseQuantity = (product) => () => {
    const item = cart.find((item) => item.id === product.id);
    if (item && item.quantity === 1) {
      dispatch({ type: "REMOVE_ITEM", payload: product.id });
    } else {
      dispatch({ type: "DECREASE_QUANTITY", payload: product.id });
    }
  };

  const increaseQuantity = (item) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: item.id });
  };

  if (cart.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2>Корзина пуста</h2>
        <Link to="/shop" className="text-[#d18755] text-lg">Вернуться к покупкам</Link>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col">
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">Товар</th>
              <th className="hidden sm:inline-block	px-4 py-2">Количество</th>
              <th className="hidden sm:inline-block px-4 py-2">Стоимость</th>
              <th className="px-4 py-2">Действия</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <img className="w-16 h-16 mr-4" src={`${serverURL}${item.main_photo}`} alt="" />
                    <span>{item.name}</span>
                  </div>
                </td>
                <td className="hidden sm:inline-block	px-4 py-2">
                  <button className="border hover:text-white border-[#6D5B4F] rounded-lg hover:bg-[#6D5B4F] px-4 py-2 mr-2" onClick={decreaseQuantity(item)}>-</button>
                  {item.quantity}
                  <button className="border hover:text-white border-[#6D5B4F] rounded-lg hover:bg-[#6D5B4F] px-4 py-2 ml-2" onClick={() => increaseQuantity(item)}>+</button>
                </td>
                <td className="hidden sm:inline-block	px-4 py-2">{item.price * item.quantity} ₽</td>
                <td className="px-4 py-2">
                  <button className="border hover:text-white border-[#6D5B4F] hover:bg-[#6D5B4F] px-4 py-2 rounded" onClick={() => removeFromCart(item.id)}>Удалить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <button className="bg-[#bca08c] hover:bg-[#c29575] text-white px-4 py-2 rounded" onClick={clearCart}>Очистить корзину</button>
          <Link to="/checkout" className="bg-[#6D5B4F] hover:bg-[#715949] text-white px-4 py-2 rounded">Оформить заказ</Link>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
