import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';

const ExpertiesCategory = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([]);

    const fetchFaqCategory = async () => {
        try {
            const response = await axios.get("http://localhost:8080/get-category");
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
              <div className="flex justify-end gap-[20px] mb-5 mr-3">
                <Button onClick={() =>navigate('/other-expertise-data')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Expertise &rarr;</Button>
            </div>
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
                            <td className="border p-2"><button className="bg-blue-500 hover:bg-blue-700 px-[20px] py-[7x] text-white font-bold py-2 px-4 rounded" onClick={() => { navigate(`/conscientious-area-of-experties/${faq.faqCategory}`) }}>See All</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpertiesCategory;