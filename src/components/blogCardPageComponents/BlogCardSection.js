import React from "react";
import foto_1 from "../../img/img9.webp";
import { ProductCard } from "../homePageComponents/ProductCatalog";
import { Link } from "react-router-dom";
import { serverURL } from "../../hooks/axiosConfig";


const BlogCardSection = ({ blog }) => {
  const imageUrl = blog ? `${serverURL}${blog.main_photo}` : "";

  return (
    <div className="text-[#40312C]">
        <h1 className="text-3xl mx-28 mt-7">
          {blog.name}
        </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 h-max w-10/12">
          <div className="flex">
            <div className="m-5 w-full h-max sticky top-4">
              <img
                className="w-full object-cover justify-start"
                src={imageUrl}
                alt="Product_ebalo"
              />
            </div>
          </div>
          <div className="mx-4">
              <div className="mt-7">
                <h3 className="text-2xl font-medium">
                  {blog.description}
                </h3>
                {/* Внимание: использование dangerouslySetInnerHTML может быть опасным, если контент не очищен от потенциально вредоносного кода */}
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: blog.content1 }}
                ></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSection;
