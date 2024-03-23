import React from "react";

const ArticleCard = ({ date, title, description, imageUrl }) => {
  return (
    <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden">
      <img className="w-full h-40 object-cover" src={imageUrl} alt="Article" />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <span className="text-sm font-medium text-gray-600">{date}</span>
        </div>
        <p className="text-sm text-gray-700 flex-grow">{description}</p>
        <a
          href="#"
          className="text-indigo-600 hover:text-indigo-500 text-sm font-medium mt-4"
        >
          Подробнее →
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;