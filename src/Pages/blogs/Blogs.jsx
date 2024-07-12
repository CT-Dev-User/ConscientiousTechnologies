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
            const response = await axios.get(`http://localhost:8080/get-blogs-data-by-id/${id}`);
            setBlogsData(response.data.data);
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
            <BlogHeader headerImg={blogsData.headerImg} heading={blogsData.heading} subHeading={blogsData.subHeading} />
            <OurPartener />
            <BlogContent blogData={blogsData.blogData} />
            <BlogTags blogTags={blogsData.blogTags} />
            <RelatedBlog />
            <BookFreeConsultation />
              <Footer/>

        </div>
    );
};

export default Blogs;
