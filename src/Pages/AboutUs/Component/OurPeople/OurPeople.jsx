import React from 'react';
import ouerpeopleImg from '../../ourpeople.png'
const OurPeople = () => {

    const ourpeopleData = [{
        stats: "601K+", title: "OUR EMPLOYEES", desc: "Workforce globally distributed highly localized"
    }, {
        stats: "152", title: "NATIONALITIES", desc: "Nationalities represented from across the globe"
    }, {
        stats: "35.6%", title: "DIVERSITY", desc: "High demand competencies acquired. 51M hrs of learning hours in FY24"
    }, {
        stats: "296K", title: "DEVELOPMENT", desc: "Workforce globally distributed highly localized"
    },]

    return (
        <div className='w-[100vw] h-[110vh]'>
            <div className='w-full h-[120vh] relative '>
                <div className='w-[100vw] h-[70%] relative' style={{ backgroundImage: `url(${ouerpeopleImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                    <div className='w-[100%]  h-[100%] absolute top-0 left-0 bg-black opacity-[0.6] flex flex-col justify-center items-start box-border px-3 gap-[50px] md:justify-evenly md:items-center'>
                        <div className='flex flex-col gap-4 w-[50%] mx-auto '>
                            <h2 className=' font-semibold text-white w-[50%] md:w-[90%]  lg:text-3xl text-xl  2xl:text-[2.3rem] mb-5' style={{ fontFamily: 'Montserrat' }}>Our People</h2>
                            <p className=' border-l-4 border-[#FDC500] pl-[20px] lg:text-3xl text-xl  2xl:text-[2.2rem] text-white text-left md:w-[98%] w-[90%] md:mx-auto pb-6 leading-10 tracking-wide' style={{ fontFamily: 'Poppins' }}>How do you create a remarkable change? By hiring, celebrating and nurturing the best people from all walks of life.</p>
                            <button className="relative overflow-hidden text-white border border-current w-[fit-content] px-2 py-1 group border-b-2 md:px-4 ms-0 lg:ms-4 md:text-[16px] text-[20px] ">
                                <span className="absolute inset-0 bg-gradient-to-r from-[#7CE0FF] via-[#A598FF] to-[#C462FF] transition-width duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                                <span className="relative z-10">Join Us<span className="font-bold">&rarr;</span></span>
                            </button>

                        </div>
                    </div>
                </div>
                <div className='absolute bottom-[155px] right-[15vw] '>
                    <h4 className='text-white text-xl mb-3 uppercase tracking-wide'>About Us</h4>
                    <div className='w-[70vw]  flex flex-wrap justify-between'>
                        {ourpeopleData.map((data, index) => (
                            <div className='w-[22%] p-6 bg-white flex flex-col  gap-[2px]'>
                                <h2 className='lg:text-3xl text-xl  2xl:text-[2.3rem]  text-[#4E84C4]'>{data.stats}</h2>
                                <h5 className='text-[16px] text-[#4E84C4] mt-8 text-semibold tracking-wider'>{data.title}</h5>
                                <p className='text-[14px] mt-2'>{data.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurPeople;
