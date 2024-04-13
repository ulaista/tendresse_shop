import React from "react";
import ArticleCard from "../components/homePageComponents/BlogCards";
import foto_1 from '../img/2.jpg';
import PageHeader from "../components/blogPageComponents/PageHeader";

function BlogPage() {
  const articles = [
    {
      id: 1,
      date: "30.01.2020",
      title: "Соблазнительная Нежность: Топ-5 Луков для Уверенности...",
      description: "Не пора ли отдать должное внимание...",
      imageUrl: foto_1,
      src: '/blog1'
    },
    {
      id: 1,
      date: "30.01.2020",
      title: "Соблазнительная Нежность: Топ-5 Луков для Уверенности...",
      description: "Не пора ли отдать должное внимание...",
      imageUrl: foto_1,
      src: '/blog1'
    },
    {
      id: 1,
      date: "30.01.2020",
      title: "Соблазнительная Нежность: Топ-5 Луков для Уверенности...",
      description: "Не пора ли отдать должное внимание...",
      imageUrl: foto_1,
      src: '/blog1'
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
  return (
    <div>
      <div className="py-40">
        <PageHeader/>
        <div className="max-w-screen-xl mx-auto pl-8 text-3xl py-7 font-medium">Блог</div>
        <ArticleGrid articles={articles} />
      </div>
    </div>
  );
}

export default BlogPage;
