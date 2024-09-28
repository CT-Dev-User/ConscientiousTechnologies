import React from 'react'

const PartnerEcoSystem = () => {
    const items = Array.from({ length: 10 }, (_, i) => i + 1);
    const colors = ['#F20000', '#6B47FA', '#0075FF', '#4785CE', '#3FA5DE', '#3C96FF', '#C66B00', '#0010A4', '#006AB7', '#6297FF'];

    return (
        <div className='w-screen mx-auto py-10'>
            <div className='w-[95%] lg:w-[85%] mx-auto flex flex-wrap justify-start items-center'>
            <div className='w-[100%] lg:w-[48%]  box-border flex flex-col justify-center gap-4 2xl:gap-9'>
                <h1 className='text-[#3970F0] font-bold lg:text-3xl text-2xl 2xl:text-[2.3rem] tracking-wide'>Our Partner Ecosystem</h1>
                <p className='w-[100%] lg:w-[80%] text-gray-700 font-medium lg:text-lg text-sm 2xl:text-[1.2rem]'>Our collaborative ecosystem of market leaders brings together <span className='text-[#C66B00]'>  Conscientious Technology </span> world-class innovation and deep partner expertise to innovate for the future and drive value.</p>
                <button className="relative overflow-hidden text-black border border-current w-[fit-content] px-3 py-1 group border-b-2 text-[15px] md:px-4 md:ms-0 md:text-[16px] mt-5">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#7CE0FF] via-[#A598FF] to-[#C462FF] transition-width duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                    <span className="relative z-10">Discover more<span className="font-bold ms-3">&rarr;</span></span>
                </button>
            </div>
            <div className='w-[100%] lg:w-[48%]  mt-9'>
                <div className="grid grid-cols-4 max-w-md mx-auto gap-x-0 2xl:gap-x-[160px]  w-full">
                    {items.map((item, index) => {
                        const row = Math.floor(index / 2);  // Determine the row number
                        const isOddRow = row % 2 === 0;     // Determine if the row is odd

                        const className = isOddRow
                            ? (index % 2 === 0 ? 'col-start-2 ' : 'col-start-4')
                            : (index % 2 === 0 ? 'col-start-1' : 'col-start-3');

                        return (
                            <div
                                key={item}
                                className={`text-center flex items-center rounded-sm justify-center ${className} w-[95px]  lg:w-[100px] 2xl:w-[160px] h-[55px] 2xl:h-[80px]`}
                                style={{ backgroundColor: colors[index] }}
                            >
                                {item}
                            </div>
                        );
                    })}
                </div>
            </div>
            </div>
           
        </div>
    )
}

export default PartnerEcoSystem;
