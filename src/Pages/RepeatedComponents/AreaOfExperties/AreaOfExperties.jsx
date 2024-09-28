import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const AreaOfExperties = ({ category, subCategory, navSubCategory }) => {
    const navigate = useNavigate()
    const [expertiesData, setexpertiesData] = useState([])
    const fetchHeader = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/get-experties-by-CategoryandSubCategory/${category}/${subCategory}`);
            setexpertiesData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchHeader()
    }, [])

    return (
        <div className='w-[100vw] h-[auto] text-[white] box-border pt-[30px] bg-[black] pb-[100px]'>
            <div className='w-[95%] mx-auto lg:w-[80%] flex flex-wrap gap-[30px] mt-[20px] items-center justify-start'>
                {expertiesData.map((items, i) => {
                    return (
                        <div style={{ backgroundImage: `url(${items.image})`, backgroundSize: "cover", backgroundPosition: "center" }} className='w-[21%] h-[250px] relative border' key={i}>
                            <div className='absolute top-0 left-0 w-[100%] h-[100%]'>
                                <button className='text-white border border-[white] px-3 absolute bottom-[-10px] left-[-10px] bg-[#272727] h-[45px] text-left text-sm lg:text-base' onClick={() => { navigate(`/${navSubCategory}/${items.title}`); }}>{items.title}</button>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default AreaOfExperties

