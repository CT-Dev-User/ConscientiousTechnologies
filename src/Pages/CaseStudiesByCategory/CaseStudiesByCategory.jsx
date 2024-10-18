import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';

const CaseStudiesByCategory = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([]);

    const fetchFaqCategory = async () => {
        try {
            const response = await axios.get("https://conscientious-technologies-backend.vercel.app/get-category");
            setCategories(response.data.getData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFaqCategory();
    }, []);


    return (
        <div className='w-full bg-gray-300 h-full mx-auto p-4'>
            <table className="w-full border-collapse border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Sr. No</th>
                        <th className="border p-2">Category</th>
                        <th className="border p-2">Case Studies</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((faq, i) => (
                        <tr key={faq._id}>
                            <td className="border p-2">{i + 1}</td>
                            <td className="border p-2">{faq.faqCategory}</td>
                            <td className="border p-2"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { navigate(`/conscientious-case-studies-bycategory/${faq.faqCategory}`) }}>See All</button></td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    );
};

export default CaseStudiesByCategory;