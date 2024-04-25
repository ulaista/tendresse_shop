import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import PageHeader from "../components/blogCardPageComponents/PageHeader";
import BLogCardSection from '../components/blogCardPageComponents/BlogCardSection'
import { getBlogIdByBlogName } from "../utils/getBlogIdByBlogName";
import instanceApi from '../hooks/axiosConfig';


const BlogCardPage = () => {
    const { blogName } = useParams();
    const [blogId, setBlogId] = useState(null);

    useEffect(() => {
        console.log(`Product name from URL: ${blogName}`); // Добавьте для проверки
        if (blogName) {
          getBlogIdByBlogName(blogName)
            .then(id => {
              setBlogId(id);
            })
            .catch(error => {
              console.error(error);
            });
        }
    }, [blogName]);

    const [blog, setBlog] = useState(null);

    useEffect(() => {
        if (blogId) {
          instanceApi.get(`/blog_by_id/${blogId}`)
            .then((response) => {
              setBlog(response.data);
            })
            .catch((error) => {
              console.error("Ошибка при загрузке информации о продукте:", error);
            });
        }
    }, [blogId]);
    return(
        <div className="py-40">
            {blog ? (
            <PageHeader blog={blog}/>
            ) : (
                <p>Loading product details...</p> 
            )}
        <div>
            {blog ? (
            <BLogCardSection blog={blog}/>
            ) : (
                <p>Loading product details...</p> 
            )}
        </div>
        </div>
    );
}
export default BlogCardPage;