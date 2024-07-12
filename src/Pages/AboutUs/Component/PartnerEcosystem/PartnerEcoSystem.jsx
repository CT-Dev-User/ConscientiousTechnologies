import React from 'react'

const PartnerEcoSystem = () => {
    const items = Array.from({ length: 10 }, (_, i) => i + 1);
    const colors = ['#F20000', '#6B47FA', '#0075FF', '#4785CE', '#3FA5DE', '#3C96FF', '#C66B00', '#0010A4', '#006AB7', '#6297FF'];

    return (
        <div className='w-[85vw] h-auto mx-auto flex flex-wrap justify-between pb-[20px]'>
            <div className='w-[48%] h-[350px] box-border flex flex-col gap-[10px] pl-[40px]'>
                <h1 className='text-[#3970F0] text-[18px]'>Our Partner Ecosystem</h1>
                <p className='text-[16px] font-normal'>Our collaborative ecosystem of market leaders brings together Conscientious Technology world-class innovation and deep partner expertise to innovate for the future and drive value.</p>
                <button className="relative overflow-hidden text-black border border-current w-[fit-content] px-3 py-1 group border-b-2 text-[20px] md:px-4 md:ms-0 md:text-[16px] mt-5">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#7CE0FF] via-[#A598FF] to-[#C462FF] transition-width duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                    <span className="relative z-10">Discover more<span className="font-bold">&rarr;</span></span>
                </button>
            </div>
            <div className='w-[48%] h-[350px]'>
                <div className="grid grid-cols-4 max-w-md mx-auto">
                    {items.map((item, index) => {
                        const row = Math.floor(index / 2);  // Determine the row number
                        const isOddRow = row % 2 === 0;     // Determine if the row is odd

                        const className = isOddRow
                            ? (index % 2 === 0 ? 'col-start-2' : 'col-start-4')
                            : (index % 2 === 0 ? 'col-start-1' : 'col-start-3');

                        return (
                            <div
                                key={item}
                                className={`text-center p-4 ${className}`}
                                style={{ backgroundColor: colors[index] }}
                            >
                                {item}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default PartnerEcoSystem;
