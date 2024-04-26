import React, { useState, useEffect } from 'react'; 
import { useCart } from "../CartContext";
import { useNavigate } from 'react-router-dom';
import instanceApi from '../hooks/axiosConfig';
import PageHeader from "../components/CheckoutPageComponents/PageHeader";
import { serverURL } from "../hooks/axiosConfig";

function CheckoutPage() {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [customerInfo, setCustomerInfo] = useState({
    fullname: '',
    phone_number: '',
    message: '',
    address: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productDetailsText = cart.map(item =>
      `Product ID: ${item.id}, Quantity: ${item.quantity}, Size: ${item.selectedSize}, Color: ${item.selectedColor}`
    ).join('; ');

    const finalMessage = `${customerInfo.message}\n\nDetails of ordered products:\n${productDetailsText}`;

    const products = cart.reduce((acc, item) => {
      acc[item.id] = item.quantity; // Сохраняем ID продукта как ключ и количество как значение
      return acc;
    }, {});

    const submissionData = {
      fullname: customerInfo.fullname,
      phone_number: customerInfo.phone_number,
      message: finalMessage,
      address: customerInfo.address,
      products,
    };

    instanceApi.post('/checkout/', submissionData)
      .then(response => {
        console.log("Order submitted successfully", response.data);
        setIsSubmitted(true);
        dispatch({ type: "CLEAR_CART" });
        setTimeout(() => {
          navigate('/');
        }, 3000);
      })
      .catch(error => {
        console.error("There was an error submitting the order", error);
      });
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-green-500 text-2xl font-bold text-center animate-fade-in">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check-circle-fill mb-5 text-green-500 w-12 h-12" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.525 7.465a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.99-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
        Successfully sent
      </div>
    );
  }

  return (
    <div className='py-36'>
      <PageHeader />
      <div className="container mx-auto p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className='mt-28'>
            <table className="table-auto w-full text-left">
                <thead>
                    <tr>
                    <th className="px-4 py-2">Товар</th>
                    <th className="px-4 py-2">Общая сумма</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {cart.map((item) => {
                    const imageUrl = `${serverURL}${item.main_photo}`;
                    return (
                        <tr key={item.id}>
                        <td>
                            <div className="flex items-center space-x-3">
                            <img className="w-20 h-20 object-cover" src={imageUrl} alt="" />
                            <span>{item.name}</span>
                            </div>
                        </td>
                        <td className=''>{item.price * item.quantity} ₽</td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-28">
            <div className="text-3xl font-semibold mb-2">Оформить заказ</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                className="w-full bg-[#fefefe] text-[#6D5B4F] placeholder:text-[#6D5B4F] border border-[#6D5B4F] rounded py-3 px-4"
                type="text"
                placeholder="Имя *"
                name="name"
                required
                onChange={handleChange}
              />
              <input
                className="w-full bg-[#fefefe] text-[#6D5B4F] placeholder:text-[#6D5B4F] border border-[#6D5B4F] rounded py-3 px-4"
                type="tel"
                placeholder="Телефон"
                name="phone"
                onChange={handleChange}
                required
              />
              <input
                className="w-full bg-[#fefefe] text-[#6D5B4F] placeholder:text-[#6D5B4F] border border-[#6D5B4F] rounded py-3 px-4"
                type="email"
                placeholder="Email *"
                name="email"
                required
                onChange={handleChange}
              />
            </div>
            <textarea
              className="w-full bg-[#fefefe] text-[#6D5B4F] placeholder:text-[#6D5B4F] border border-[#6D5B4F] rounded py-3 px-4"
              rows="5"
              placeholder="Сообщение"
              name="message"
              onChange={handleChange}
              value={customerInfo.message}
              required
            ></textarea>
            <div className="flex justify-end">
              <button
                className="transition duration-500 ease-in-out w-full md:w-1/4 bg-[#6D5B4F] border hover:bg-[#F6F2E7] hover:text-[#6D5B4F] hover:border-[#6D5B4F] flex justify-center text-white py-2 px-4 rounded"
                type="submit"
              >
                ОТПРАВИТЬ
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
