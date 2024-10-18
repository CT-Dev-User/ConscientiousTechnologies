import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import { useNavigate} from 'react-router-dom';

const WhyChooseCtSliderPage = () => {
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
            <div className="flex justify-end gap-[20px] mb-5 mr-3">
                <Button onClick={() => navigate('/other-whychoosect-data')} className='bg-blue-100 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'>Add other Why CT</Button>
            </div>
            <table className="w-full border-collapse border mt-4">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Sr. No</th>
                        <th className="border p-2">Slider data Category</th>
                        <th className="border p-2">All Data</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((ct_items, i) => (
                        <tr key={ct_items._id}>
                            <td className="border p-2">{i + 1}</td>
                            <td className="border p-2">{ct_items.faqCategory}</td>
                            <td className="border p-2"><button className="bg-blue-500 hover:bg-blue-700 px-[20px] text-white font-bold py-2 rounded" onClick={() => { navigate(`/conscientious-choose-ct/${ct_items.faqCategory}`) }}>See All</button></td>
                            <td className="border flex items-center justify-start gap-[20px] p-2">
                                <button className="bg-blue-500 hover:bg-blue-700 px-[20px] text-white font-bold py-2 rounded">Edit</button>
                                <button className='hover:bg-red-700 h-[37px] bg-[red] px-[20px] py-[7x] rounded-[7px] text-white shadow-md'>Delete</button>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    );
};

export default WhyChooseCtSliderPage;
