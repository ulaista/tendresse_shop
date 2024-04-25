import React, { useEffect, useState } from "react";
import { useCart } from "../../CartContext";
import Message from "../Message";

const ProductDetails = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]); 
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const { cart, dispatch } = useCart();
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeoutId = showMessage ? setTimeout(() => setShowMessage(false), 1500) : null;
    return () => clearTimeout(timeoutId);
  }, [showMessage]);

  const showMessageWithTimeout = (message) => {
    setMessage(message);
    setShowMessage(true);
  };

  const isInCart = (product) => cart.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart(product)) {
      dispatch({ type: "ADD_ITEM", payload: { ...product, quantity: 1 } });
      showMessageWithTimeout(`Продукт "${product.name}" добавлен в корзину.`);
    } else {
      handleIncreaseQuantity();
    }
  };

  const handleIncreaseQuantity = () => {
    const item = isInCart(product);
    if (item && item.quantity < product.quantity) {
      dispatch({ type: "INCREASE_QUANTITY", payload: product.id });
      showMessageWithTimeout(`Количество "${product.name}" увеличено.`);
    }
  };

  const handleDecreaseQuantity = () => {
    const item = isInCart(product);
    if (item && item.quantity > 1) {
      dispatch({ type: "DECREASE_QUANTITY", payload: product.id });
      showMessageWithTimeout(`Количество "${product.name}" уменьшено.`);
    } else if (item && item.quantity === 1) {
      dispatch({ type: "REMOVE_ITEM", payload: product.id });
      showMessageWithTimeout(`Продукт "${product.name}" удален из корзины.`);
    }
  };

  const cartItem = isInCart(product);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  return (
    <div className="p-4">
      {showMessage && <Message message={message} />}

      <h1 className="text-3xl mb-5 font-semibold">{product.name}</h1>
      
      <div className="flex items-center my-2 mb-4">
        <span className="text-gray-700 mr-2">Артикул:</span>
        <span className="font-medium">{product.article}</span>
      </div>
      
      <div className="flex items-center my-2">
        <span className="text-gray-700 mr-2">Производитель:</span>
        <p className="text-blue-600 hover:text-blue-800">
          {product.manufacturer}
        </p>
      </div>
      
      <div className="my-4">
        {product.quantity>0 ? (
          <span className="text-xl ">В наличии</span>
        ) : (
          <span className="text-xl my-3">Ожидается</span>
        )}
      </div>

      <div className='flex flex-col'>
        <p>Цвет</p>
        <div className="flex space-x-2 mt-2">
          {product.colors.map((color) => (
            <button
              key={color.id}
              className={`h-12 w-12 rounded-md border border-white
                          ${color.id === selectedColor ? 'ring-2 ring-[#6D5B4F]' : ''} 
                          hover:brightness-95 focus:outline-none focus:ring`}
              style={{ backgroundColor: color.hex_color }}
              onClick={() => setSelectedColor(color.id)}
            >
            </button>
          ))}
        </div>
        <p>Размер</p>
        <div className="flex flex-wrap space-x-2 mt-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`h-12 w-13 border px-3 py-1 rounded-md text-sm font-semibold 
                          ${size === selectedSize ? 'bg-[#6D5B4F] text-white' : 'bg-white text-gray-700'} 
                          hover:bg-[#6D5B4F] hover:text-white`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>   
        </div>

      <div className="my-4">
        <div
          className={`cursor-pointer ${activeTab === 'description' ? 'font-bold' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Описание
        </div>
        {activeTab === 'description' && (
          <div className="my-2">
            <div dangerouslySetInnerHTML={{ __html: product.description_full }}></div>
          </div>
        )}

      <button
        className={`px-6 py-2 rounded ${quantityInCart > 0 ? 'bg-[#bca08c] hover:text-white' : 'bg-[#6D5B4F] text-white'} hover:bg-[#6D5B4F] transition duration-300`}
        onClick={handleAddToCart}
      >
        {quantityInCart > 0 ? `${quantityInCart} в корзине` : 'Купить'}
      </button>
      {quantityInCart > 0 && (
        <>
          <button
            className="mx-2 px-4 py-2 border hover:text-white border-[#6D5B4F] rounded-lg hover:bg-[#6D5B4F] transition duration-300"
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
          <button
            className="px-4 py-2 border hover:text-white border-[#6D5B4F] rounded-lg hover:bg-[#6D5B4F] transition duration-300"
            onClick={handleDecreaseQuantity}
          >
            -
          </button>
        </>
      )}
      </div>
    </div>
  );
};


export default ProductDetails;