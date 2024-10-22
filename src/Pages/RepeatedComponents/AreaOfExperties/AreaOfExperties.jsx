import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const AreaOfExperties = ({ serviceName, navSubCategory }) => {
    const navigate = useNavigate()
    const [expertiesData, setexpertiesData] = useState([])
    const [subServices, setSubServices] = useState([]);
    const fetchSubServices = async () => {
        // console.log(serviceName)
        try {
            const response = await axios.get(`http://localhost:8080/get-subservice-data-by-service/${serviceName}`);
            // console.log(response.data)
            setSubServices(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchSubServices()
    }, [])

    return (
        <div className='w-screen h-auto text-white box-border pt-3 pb-16 bg-black'>
            <div className='w-[95%] mx-auto lg:w-4/5 flex flex-wrap gap-7 items-center justify-start'>
                {subServices.map((items, i) => {
                    return (
                        <div style={{ backgroundImage: `url(${items.cardImage})`, backgroundSize: "cover", backgroundPosition: "center" }} className='lg:w-[22%] h-72 relative border w-[90%] md:w-[45%] mx-auto md:mx-0' key={i}>
                            <div className='absolute top-0 left-0 w-full h-full'>
                                <button className='text-white border border-[white] px-3 absolute bottom-[-10px] left-[-10px] bg-[#272727] h-auto text-left text-sm 2xl:text-base py-2' onClick={() => { navigate(`/${navSubCategory}/${items.cardTitle}`); }}>{items.cardTitle}</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AreaOfExperties

