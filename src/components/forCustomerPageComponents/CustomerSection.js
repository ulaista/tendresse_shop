import React from "react";
import ArticleCard from "../forCustomerPageComponents/ArticleCard";
import foto_1 from '../../img/2.jpg';
import foto_2 from '../../img/3.jpg';
import foto_3 from '../../img/4.jpg';


const CustomerSection = () => {
    const articles = [
        {
          id: 1,
        //   date: "30.01.2020",
          title: "О нас",
        //   description: "Не пора ли отдать должное внимание...",
          imageUrl: foto_1,
          src: '/about'
        },
        {
          id: 1,
        //   date: "30.01.2020",
          title: "Доставка и оплата",
        //   description: "Не пора ли отдать должное внимание...",
          imageUrl: foto_2,
          src: '/delivery'
        },
        {
          id: 1,
        //   date: "30.01.2020",
          title: "Публичная оферта",
        //   description: "Не пора ли отдать должное внимание...",
          imageUrl: foto_3,
          src: '/publicoffer'
        },
      ];
        
      const ArticleGrid = ({ articles }) => {
        return (
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
          </div>
        );
      };
    return(
        <div className="py-7">
        <ArticleGrid articles={articles} />
        </div>
    );
}
export default CustomerSection;