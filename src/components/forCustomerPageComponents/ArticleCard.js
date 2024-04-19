import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { serverURL } from "../../hooks/axiosConfig";


function useCheckDateNotNull(created_at) {
  const [isDatePresent, setIsDatePresent] = useState(false);

  useEffect(() => {
    setIsDatePresent(created_at != null);
  }, [created_at]);

  return isDatePresent;
}

const ArticleCard = ({ title, imageUrl, src }) => {
  return (
    <Link to={src}>
    <div className="flex flex-col border border-orange-950 overflow-hidden relative transition duration-500 ease-in-out transform hover:-translate-y-1">
      <img className="w-full h-80 object-cover" src={imageUrl} alt="Article" />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
        <a
          href={src}
          className="text-sm font-medium mt-4"
        >
          Подробнее →
        </a>
      </div>
    </div>
    </Link>
  );
};


export default ArticleCard;
