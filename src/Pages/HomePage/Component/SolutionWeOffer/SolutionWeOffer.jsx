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
        <div id='solution' className='w-screen h-auto bg-[white] py-8 box-border lg:pt-24 pt-12' >
            <div className='w-[85%] mx-auto'>
                <h1 className='lg:text-3xl font-bold text-base'>Solution We Offers</h1>
                <p className='lg:text-sm text-xs lg:mt-5 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
            </div>

            <div className="lg:flex text-[white] w-[85%] gap-5 flex-wrap mx-auto mt-7 hidden pb-8">
                {firstTwelveData.map((items, i) => {
                    return (
                        <div className='flex w-[31%] bg-[#333333] h-48 justify-center gap-x-5' key={i}>
                            <div className='w-[45%] h-full'>
                                <img src={items.SolutionhomePageImage} alt={items.title} className='w-full h-full' />
                            </div>
                            <div className='w-[55%] flex justify-around flex-col'>
                                <div >
                                    <h3 className='text-sm font-medium'> {items.title} </h3>
                                    <p className='text-xs me-1 mt-2' dangerouslySetInnerHTML={{ __html: items.desc }} />
                                </div>
                                <button
                                    className="relative overflow-hidden group border border-[white] px-4 py-1 w-[fit-content] text-xs ms-0"
                                    style={{ position: 'relative' }} onClick={() => { navigate(`/Solutions/${items.title}`) }}>
                                    <span className="absolute inset-0 bg-[#33B7D4] transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                                    <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">Learn More <span className="font-bold">&rarr;</span></span>
                                </button>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className="lg:hidden flex gap-5 flex-wrap mx-auto mt-7 text-white w-[90%] h-96 overflow-y-auto">
                {firstTwelveData.map((items, i) => {
                    return (
                        <div className='bg-[#333333] w-full h-36 relative' key={i}>
                            <div className='w-full absolute h-full' style={{ backgroundImage: `url(${items.image})`, backgroundSize: '', backgroundPosition: 'center' }}>
                                <div className='bg-black w-full h-full opacity-[0.8] flex flex-col justify-center items-end'>
                                    <div className='w-[95%]'>
                                        <h3 className='text-sm font-medium'> {items.title} </h3>
                                        <p className="text-xs me-1 mt-2" dangerouslySetInnerHTML={{ __html: items.desc }} />
                                    </div>
                                    <button className='border-[none] px-4 py-1 w-[fit-content] text-sm text-[skyblue]' onClick={()=>{navigate(`Solutions/${items.title}`)}}>Learn More &rarr;</button>
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
