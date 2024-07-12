import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SolutionWeOffer = () => {
    const [getSolutionData, setGetSolutionData] = useState([])
    const navigate = useNavigate()

    const getHomeSolutionDataFunc = async () => {
        try {
            const response = await axios.get("http://localhost:8080/get-solution-we-offer-data")
            setGetSolutionData(response.data.getData)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getHomeSolutionDataFunc()
    }, [])

    const firstTwelveData = getSolutionData.slice(0, 9);
    return (
        <div id='solution' className='w-[100vw] h-auto bg-[white] py-[30px] box-border pt-[100px] md:pt-[50px]' >
            <div className='w-[85%] mx-auto'>
                <h1 className='text-3xl font-bold md:text-[16px]'>Solution We Offers</h1>
                <p className='text-[14px] md:text-[12px] mt-[20px] md:mt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
            </div>

            <div className="flex text-[white] w-[85%] gap-[20px] flex-wrap mx-auto mt-7 md:hidden pb-[30px]">
                {firstTwelveData.map((items, i) => {
                    return (
                        <div className='flex w-[370px] bg-[#333333] h-[160px] justify-center gap-x-[20px]' key={i}>
                            <div className='w-[45%] h-[100%]'>
                                <img src={items.SolutionhomePageImage} alt={items.title} className='w-[100%] h-[100%]' />
                            </div>
                            <div className='w-[55%] flex justify-around flex-col'>
                                <div >
                                    <h3 className='text-[14px] font-medium'> {items.title} </h3>
                                    <p className='text-[12px] me-[5px] mt-2' dangerouslySetInnerHTML={{ __html: items.desc }} />
                                </div>
                                <button
                                    className="relative overflow-hidden group border border-[white] px-[15px] py-[5px] w-[fit-content] text-[12px] md:ms-0"
                                    style={{ position: 'relative' }} onClick={() => { navigate(`/solution/${items.title}`) }}>
                                    <span className="absolute inset-0 bg-[#33B7D4] transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                                    <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">Learn More <span className="font-bold">&rarr;</span></span>
                                </button>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className="hidden md:flex gap-[20px] flex-wrap mx-auto mt-7 text-white w-[90%] h-[65vh] overflow-y-auto">
                {firstTwelveData.map((items, i) => {
                    return (
                        <div className='bg-[#333333] w-[100%] h-[100px] relative' key={i}>
                            <div className='w-[100%] absolute h-[100%]' style={{ backgroundImage: `url(${items.image})`, backgroundSize: '', backgroundPosition: 'center' }}>
                                <div className='bg-black w-[100%] h-[100%] opacity-[0.8] flex flex-col justify-center items-end'>
                                    <div className='w-[95%]'>
                                        <h3 className='text-[14px] font-medium'> {items.title} </h3>
                                        <p className="text-[13px] me-[5px] mt-2" dangerouslySetInnerHTML={{ __html: items.desc }} />
                                    </div>
                                    <button className='border-[none] px-[15px] py-[5px] w-[fit-content] text-[14px] text-[skyblue]'>Learn More &rarr;</button>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default SolutionWeOffer
