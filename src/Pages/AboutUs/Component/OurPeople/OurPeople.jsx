import React from 'react';
import ouerpeopleImg from '../../ourpeople.png'
const OurPeople = () => {
    return (
        <div className='w-[100vw] h-[100vh]'>
            <div className='w-full h-[100vh] relative'>
                <div className='w-[100vw] h-[70%] relative' style={{ backgroundImage: `url(${ouerpeopleImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                    <div className='w-[100%] h-[100%] absolute top-0 left-0 bg-black opacity-[0.6] flex flex-col justify-center items-start box-border px-3 gap-[50px] md:justify-evenly md:items-center'>
                        <div className='flex flex-col gap-[20px] w-[50%] mx-auto'>
                            <h2 className='text-3xl font-semibold text-white w-[50%] md:w-[90%] md:text-xl' style={{ fontFamily: 'Montserrat' }}>Our People</h2>
                            <p className='border-l-4 border-[#FDC500] pl-[20px] text-xl md:text-[16px] text-white text-left w-[60%] md:w-[90%] md:mx-auto' style={{ fontFamily: 'Poppins' }}>How do you create a remarkable change? By hiring, celebrating and nurturing the best people from all walks of life.</p>
                            <button className="relative overflow-hidden text-white border border-current w-[fit-content] px-3 py-1 group border-b-2 text-[20px] md:px-4 md:ms-0 md:text-[16px] text-[20px] mt-5">
                                <span className="absolute inset-0 bg-gradient-to-r from-[#7CE0FF] via-[#A598FF] to-[#C462FF] transition-width duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                                <span className="relative z-10">Join Us<span className="font-bold">&rarr;</span></span>
                            </button>

                        </div>
                    </div>
                </div>
                <div className='w-[70vw] h-[150px] absolute bottom-[75px] right-[15vw] flex flex-wrap justify-between'>
                    <div className='w-[22%] h-[100%] bg-white flex flex-col p-[10px] gap-[2px]'>
                        <h2 className='text-[18px] text-[#4E84C4]'>601K+</h2>
                        <h5 className='text-[16px] text-[#4E84C4] mt-[10px]'>OUR EMPLOYEES</h5>
                        <p className='text-[14px]'>Workforce globally distributed highly localized</p>
                    </div>
                    <div className='w-[22%] h-[100%] bg-white flex flex-col p-[10px] gap-[2px]'>
                        <h2 className='text-[18px] text-[#4E84C4]'>152</h2>
                        <h5 className='text-[16px] text-[#4E84C4] mt-[10px]'>NATIONALITIES</h5>
                        <p className='text-[14px]'>Nationalities represented from across the globe</p>
                    </div>
                    <div className='w-[22%] h-[100%] bg-white flex flex-col p-[10px] gap-[2px]'>
                        <h2 className='text-[18px] text-[#4E84C4]'>35.6%</h2>
                        <h5 className='text-[16px] text-[#4E84C4] mt-[10px]'>DIVERSITY</h5>
                        <p className='text-[14px]'>High demand competencies acquired. 51M hrs of learning hours in FY24</p>
                    </div>
                    <div className='w-[22%] h-[100%] bg-white flex flex-col p-[10px] gap-[2px]'>
                        <h2 className='text-[18px] text-[#4E84C4]'>296K</h2>
                        <h5 className='text-[16px] text-[#4E84C4] mt-[10px]'>DEVELOPMENT</h5>
                        <p className='text-[14px]'>Workforce globally distributed highly localized</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPeople;
