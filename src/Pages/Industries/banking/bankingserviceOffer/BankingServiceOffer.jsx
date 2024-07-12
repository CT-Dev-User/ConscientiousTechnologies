import React from 'react'

const BankingServiceOffer = () => {

    const bankingServiceOfferData = [{ title: "Digital transformation consulting", desc: "Whether you need to develop an enterprise digital strategy or move to a new technology platform, ScienceSoft will work closely with you to improve your IT ecosystem. Our IT consultants will help you identify how banking solutions can reinvent your business, as well as help you choose the most suitable platform, and estimate costs", bgColor: "FF6868" },
    {
        title: "IT-based customer experience", desc: "With 12 years of experience in developing CXM solutions, ScienceSoft clearly understands what makes excellent customer experience and how software can optimize and enhance all stages of the CXM cycle. Our CX consultants will guide you through a variety of solutions for customer experience.",
        bgColor: "1777BC"
    },
    { title: "Solution maintenance and support", desc: "Backed by deep expertise in implementing platform-based solutions, ScienceSoft can meet the ever-changing needs of any banking environment at any scale. To reflect your bank’s unique business models, we can create a solution from scratch thereby satisfying your needs much more precisely than any off-the-shelf product.", bgColor: "E751FF" }]

    return (

        <div className='w-[100vw] h-[auto] box-border py-[80px] md:pt-[40px] pb-[20px] md:bg-[black] md:text-[white]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Banking IT Services We Offer </h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Banking IT services are a way for banks and financial services companies to improve operational efficiency, drive innovations across their conventional business processes, and introduce the next-gen digital experience for their clients.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
                {bankingServiceOfferData.map((item, index) => (
                    <div key={index} className='w-[350px] h-[250px] border border-gray-300 p-3 text-[white] py-[30px] md:h-auto md:border-none' style={{ backgroundColor: `#${item.bgColor}` }}>
                        <h1 className='text-[18px] w-[90%]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-normal mx-auto w-[95%]'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default BankingServiceOffer