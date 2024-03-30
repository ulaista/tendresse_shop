import React from "react";
import Slider from "../components/homePageComponents/Slider";
import CatalogHomePage from "../components/homePageComponents/Catalog";
import ShopCategories from "../components/homePageComponents/ShopCategories";
import WeddingCollection from "../components/homePageComponents/Collection";
import ProductCatalog from "../components/homePageComponents/ProductCatalog";
import ArticleCard from "../components/homePageComponents/BlogCards";
import foto_1 from '../img/2.jpg';
function HomePage() {
  const articles = [
    {
      id: 1,
      date: "30.01.2020",
      title: "Соблазнительная Нежность: Топ-5 Луков для Уверенности...",
      description: "Не пора ли отдать должное внимание...",
      imageUrl: foto_1
    },
    {
      id: 1,
      date: "30.01.2020",
      title: "Соблазнительная Нежность: Топ-5 Луков для Уверенности...",
      description: "Не пора ли отдать должное внимание...",
      imageUrl: foto_1
    },
    {
      id: 1,
      date: "30.01.2020",
      title: "Соблазнительная Нежность: Топ-5 Луков для Уверенности...",
      description: "Не пора ли отдать должное внимание...",
      imageUrl: foto_1
    },
  ];
    
  const ArticleGrid = ({ articles }) => {
    return (
      <div className="max-w-screen-xl mx-auto px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div>
      <Slider />
      <CatalogHomePage/>
      <ShopCategories/>
      <WeddingCollection/>
      <ProductCatalog/>
      <ArticleGrid articles={articles} />
    </div>
  );
}

export default HomePage;
