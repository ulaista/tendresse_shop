import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic
    console.log(formData);
  };
  return (
    <div className="container mx-auto p-4 text-[#40312C]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="">
            <div className="mb-2 mt-2">
              <div className="text-3xl pt-2 pb-12 font-semibold mb-2">
                КОНТАКТЫ
              </div>
              <div className="mb-3">
                <div className="mb-1 font-medium flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <div className="mb-3 text-2xl">Позвонить нам</div>
                </div>
                <div className="mb-3">
                  <a href="tel:+380000000000">+38 (000) 000 00 00</a>
                </div>
                <div className="mb-3">
                  <a href="tel:+380000000000">+38 (000) 000 00 00</a>
                </div>
                <div className="mb-3">
                  <a href="tel:+380000000000">+38 (000) 000 00 00</a>
                </div>
              </div>
              <div className="mb-3">
                <div className="mb-1 font-medium flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 self-center"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <div className="ml-3 text-2xl">Электронная почта</div>
                </div>
                <div>support@support.com.ua</div>
              </div>
              <div className="mb-3">
                <div className="mb-1 font-medium flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 self-center"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <div className="ml-2 text-2xl">Адрес офиса</div>
                </div>
                <div>г. Киев, ул. Киевская</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-28">
            <div className="text-3xl font-semibold mb-2">Обратная связь</div>
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
  );
};

export default ContactPage;
