import React, { useState } from "react";
import foto_1 from "../../img/8.svg";
import star from "../../img/icon-disable.svg";
const ReviewSelf = () => {
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
    console.log(formData);
  };

  return (
    <div className="m-7 grid grid-cols-7">
      <div className=" col-start-1 col-span-6 md:col-span-4">
        <h1 className="text-3xl m-16 auto-rows-max col-start-1 col-span-4">
          ОТЗЫВЫ
        </h1>
        <div className="w-full flex justify-center">
          <img className="" src={foto_1} />
        </div>
        <div className="grid grid-rows-2">
            <div className="flex justify-center">Пока нет отзывов</div>
            <div className="flex justify-center">Будьте первым, кто оставит отзыв</div>
        </div>
      </div>
      <div className="col-span-6 md:col-span-3">
        <h1 className="text-3xl mt-16 auto-rows-max col-span-2">
          ОСТАВЬТЕ СВОЙ
          <br /> ОТЗЫВ
        </h1>
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className=""
          >
            <div className="">
                <div className="my-3">Имя*</div>
              <input
                className="w-full bg-[#fefefe] text-[#6D5B4F] placeholder:text-[#6D5B4F] border border-[#6D5B4F] rounded py-3 px-4"
                type="text"
                placeholder=""
                name="name"
                required
                onChange={handleChange}
              />
                <div className="my-3">Email *</div>
              <input
                className="w-full bg-[#fefefe] text-[#6D5B4F] placeholder:text-[#6D5B4F] border border-[#6D5B4F] rounded py-3 px-4"
                type="email"
                placeholder=""
                name="email"
                required
                onChange={handleChange}
              />
            </div>

            <div className="my-5">
                <div className="">Поставьте оценку</div>
                <div className="flex justify-center w-1/3 my-3">
                        <span className="star" data-index="1"><img alt="Поставьте оценку #1" title="Поставьте оценку #1" data-src={star} src={star} width="32" height="32" className="loaded transition"/><noscript><img src={star} alt="Поставьте оценку #1" title="Поставьте оценку #1"/></noscript></span>
                        <span className="star" data-index="2"><img alt="Поставьте оценку #2" title="Поставьте оценку #2" data-src={star} src={star} width="32" height="32" className="loaded transition"/><noscript><img src={star} alt="Поставьте оценку #2" title="Поставьте оценку #2"/></noscript></span>
                        <span className="star" data-index="3"><img alt="Поставьте оценку #3" title="Поставьте оценку #3" data-src={star} src={star} width="32" height="32" className="loaded transition"/><noscript><img src={star} alt="Поставьте оценку #3" title="Поставьте оценку #3"/></noscript></span>
                        <span className="star" data-index="4"><img alt="Поставьте оценку #4" title="Поставьте оценку #4" data-src={star} src={star} width="32" height="32" className="loaded transition"/><noscript><img src={star} alt="Поставьте оценку #4" title="Поставьте оценку #4"/></noscript></span>
                        <span className="star" data-index="5"><img alt="Поставьте оценку #5" title="Поставьте оценку #5" data-src={star} src={star} width="32" height="32" className="loaded transition"/><noscript><img src={star} alt="Поставьте оценку #5" title="Поставьте оценку #5"/></noscript></span>
                    <input type="hidden" data-val="true" data-val-required="Rating required" name="values[Rating]" value=""/>
                </div>
            </div>

                <div className="my-3">Ваш отзыв*</div>
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
export default ReviewSelf;
