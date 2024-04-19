import React from "react";
import ArticleCard from "../components/homePageComponents/BlogCards";
import foto_1 from '../img/2.jpg';
import PageHeader from "../components/blogPageComponents/PageHeader";
import { useBlogs } from "../BlogContext";

function BlogPage() {
    
  const ArticleGrid = () => {
    const { blogs } = useBlogs();
    return (
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <ArticleCard key={blog.id} {...blog} />
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
        <ArticleGrid />
      </div>
    </div>
  );
}

export default BlogPage;
