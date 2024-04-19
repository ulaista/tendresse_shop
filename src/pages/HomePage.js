import React from "react";
import Slider from "../components/homePageComponents/Slider";
import CatalogHomePage from "../components/homePageComponents/Catalog";
import ShopCategories from "../components/homePageComponents/ShopCategories";
import WeddingCollection from "../components/homePageComponents/Collection";
import ProductCatalog from "../components/homePageComponents/ProductCatalog";
import ArticleCard from "../components/homePageComponents/BlogCards";
import foto_1 from '../img/2.jpg';
import { useBlogs } from "../BlogContext";

function HomePage() {
    
  const ArticleGrid = () => {
    const { blogs } = useBlogs();
    return (
      <div className="max-w-screen-xl mx-auto px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <ArticleCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div className="scrollbar-thumb-orange-800">
      <Slider />
      <CatalogHomePage/>
      <ShopCategories/>
      <WeddingCollection/>
      <ProductCatalog/>
      <div className='flex justify-center pb-8'>
          <a className='rounded-lg py-3 px-3 text-white hover:text-[#6D5B4F] bg-[#6D5B4F] hover:bg-[#F6F2E7] border border-[#6D5B4F]'>В КАТАЛОГ</a>
      </div>
      <ArticleGrid/>
    </div>
  );
}

export default HomePage;
