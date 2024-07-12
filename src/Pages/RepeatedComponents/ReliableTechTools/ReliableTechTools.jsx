import React, { useEffect, useState } from 'react';
import './reliableTools.css';
import axios from 'axios';
import TechLogosPopup from './TechLogosPopup';

const ReliableTools = ({ category, subCategory }) => {
    const [reliableToolData, setReliableToolsData] = useState([]);
    const [allTechLogos, setAllTechLogos] = useState([]);
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
    const [showPopup, setShowPopup] = useState(false);

    const fetchReliableDataByCategory = async () => {
        try {
            if (category === "HomePage") {
                const response = await axios.get("http://localhost:8080/get-reliable-tools-data")
                setReliableToolsData(response.data.data);
            } else {
                const response = await axios.get(`http://localhost:8080/get-reliable-tools-data/${category}/${subCategory}`);
                setReliableToolsData(response.data.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchReliableDataByCategory();
    }, []);



    const handleSeeAllClick = (techLogos, event) => {
        const buttonRect = event.target.getBoundingClientRect();
        setAllTechLogos(techLogos);
        setPopupPosition({ top: buttonRect.bottom + window.scrollY, left: buttonRect.left + window.scrollX });
        setShowPopup(!showPopup);
    };

    const handleClose = () => setShowPopup(false);

    return (
        <div className='w-[100vw] h-[60vh] bg-[black] text-[white] box-border overflow-y-auto pb-[40px]'>
            <div className='w-[85%] md:w-[100%] bg-[#141414] mx-auto text-[white] flex flex-wrap justify-between md:flex-col md:overflow-x-hidden'>
                {reliableToolData.map((items, i) => (
                    <div key={i} className={items.subTech.length > 1 ? 'w-[100%] border-b border-[#303030] py-4' : 'w-[50%] border-b border-[#303030] py-4 md:w-[100%]'}>
                        <h2 className='text-[20px] font-medium ms-3 md:ms-4 md:text-[14px] w-[100%]'>{items.technology}</h2>
                        <div className={items.subTech.length > 1 ? 'flex w-[100%] gap-x-[100px] flex-wrap gap-y-[40px]' : 'flex w-[100%]'}>
                            {items.subTech.map((item, i) => (
                                <div className='px-5 pt-3' key={i}>
                                    <h3 className='text-[13px]'>{item.title}</h3>
                                    <div className='flex gap-[20px] mt-2 md:gap-[10px] flex-wrap'>
                                        {item.techLogos.slice(0, 5).map((logo, i) => (
                                            <div key={i} className='w-[55px] md:w-[47px]'>
                                                <img src={logo.logo} alt={item.title}  />
                                            </div>
                                        ))}
                                        {item.techLogos.length > 5 && (
                                            <div className='w-[55px] md:w-[47px] bg-[#000000] h-[53px] md:h-[47px] border border-[white] flex items-center justify-center text-[10px] cursor-pointer' onClick={(event) => handleSeeAllClick(item.techLogos, event)}>
                                                See All
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {showPopup && <TechLogosPopup logos={allTechLogos} onClose={handleClose} position={popupPosition} />}
        </div>
    );
};

export default ReliableTools;
