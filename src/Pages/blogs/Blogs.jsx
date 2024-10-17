import React, { useEffect, useState } from 'react';
import BlogHeader from './components/BlogHeader';
import BlogContent from './components/BlogContent';
import BlogTags from './components/BlogTags';
import BookFreeConsultation from '../HomePage/Component/BookFreeConsultation/BookFreeConsultation';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import OurPartener from '../HomePage/Component/OurPartener/OurPartener';
import RelatedBlog from './components/RelatedBlog';
import Footer from '../HomePage/Component/Footer/Footer';

const Blogs = () => {
    const { id } = useParams();
    const [blogsData, setBlogsData] = useState(null);

    const fetchBlogDataById = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/get-latest-blog-data-by-id/${id}`);
            setBlogsData(response.data.blog);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchBlogDataById();
    }, [id]);

    if (!blogsData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <BlogHeader headerImg={blogsData.headerImage} heading={blogsData.headerTitle} subHeading={blogsData.HeaderDesc} />
            <OurPartener />
            <BlogContent blogData={blogsData.articleData} />
            <BlogTags blogTags={blogsData.blogTags} />
            <RelatedBlog />
            <BookFreeConsultation />
            <Footer />

        </div>
    );
};

export default Blogs;
