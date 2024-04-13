import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function useCheckDateNotNull(date) {
  const [isDatePresent, setIsDatePresent] = useState(false);

  useEffect(() => {
    setIsDatePresent(date != null);
  }, [date]);

  return isDatePresent;
}

const ArticleCard = ({ date, title, description, imageUrl, src }) => {
  const isDatePresent = useCheckDateNotNull(date);
  return (
    <Link to={src}>
    <div className="flex flex-col border border-orange-950 overflow-hidden relative transition duration-500 ease-in-out transform hover:-translate-y-1">
      <img className="w-full h-56 object-cover" src={imageUrl} alt="Article" />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
        <p className="text-sm text-gray-700 flex-grow">{description}</p>
        <a
          href={src}
          className="text-sm font-medium mt-4"
        >
          Подробнее →
        </a>
      </div>
      {isDatePresent && (
          <span className="text-xs text-gray-900 rounded-md p-2 bg-opacity-50 bg-slate-300 absolute top-0 right-0 mt-2 mr-2">{date}</span>
      )}
    </div>
    </Link>
  );
};


export default ArticleCard;
