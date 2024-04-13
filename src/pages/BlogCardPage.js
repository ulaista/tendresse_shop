import React from "react";
import PageHeader from "../components/blogCardPageComponents/PageHeader";
import BLogCardSection from '../components/blogCardPageComponents/BlogCardSection'
const BlogCardPage = () => {
    return(
        <div className="py-40">
        <PageHeader/>
        <div>
            <BLogCardSection/>
        </div>
        </div>
    );
}
export default BlogCardPage;