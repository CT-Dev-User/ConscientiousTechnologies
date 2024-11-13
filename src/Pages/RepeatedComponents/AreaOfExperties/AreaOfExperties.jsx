import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AreaOfExperties = ({ serviceName, navSubCategory }) => {
    const navigate = useNavigate();
    const [subServices, setSubServices] = useState([]);
    const [loading, setLoading] = useState(true); // loading state for preloader

    const fetchSubServices = async () => {
        try {
            const response = await axios.get(`https://conscientious-technologies-backend.vercel.app/get-subservice-data-by-service/${serviceName}`);
            setSubServices(response.data);
            setLoading(false); // set loading to false after data is fetched
        } catch (error) {
            console.log(error);
            setLoading(false); // also set loading to false in case of an error
        }
    };

    useEffect(() => {
        fetchSubServices();
    }, []);

    return (
        <div className='w-screen h-auto text-white box-border pt-3 pb-16 bg-black'>
            {loading ? ( // Display loader when loading
                <div className="flex justify-center items-center h-[50vh]">
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-white"></div>
                    <p className="text-white ml-4">Loading...</p>
                </div>
            ) : (
                <div className='w-[95%] mx-auto lg:w-4/5 flex flex-wrap gap-7 items-center justify-start'>
                    {subServices.map((items, i) => {
                        return (
                            <div 
                                key={items._id} 
                                style={{ backgroundImage: `url(${items.cardImage})`, backgroundSize: "cover", backgroundPosition: "center" }} 
                                className='lg:w-[22%] h-72 relative border w-[90%] md:w-[45%] mx-auto md:mx-0'
                            >
                                <div className='absolute top-0 left-0 w-full h-full'>
                                    <button 
                                        className='text-white border border-[white] px-3 absolute bottom-[-10px] left-[-10px] bg-[#272727] h-auto text-left text-sm 2xl:text-base py-2' 
                                        onClick={() => { navigate(`/${navSubCategory}/${items.cardTitle}`); }}
                                    >
                                        {items.cardTitle}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default AreaOfExperties;
