import React, { createContext, useContext, useState, useEffect } from 'react';
import instanceApi from './hooks/axiosConfig';
// import axios from 'axios';

const BlogContext = createContext();

export const useBlogs = () => useContext(BlogContext);

export const BlogsProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await instanceApi.get('/blogs');
                setBlogs(response.data);
            } catch (error) {
                console.error("Ошибка при получении данных о продуктах:", error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <BlogContext.Provider value={{ blogs }}>
            {children}
        </BlogContext.Provider>
    );
};
