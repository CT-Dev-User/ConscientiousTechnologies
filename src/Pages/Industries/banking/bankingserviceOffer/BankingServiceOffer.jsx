import React from 'react'

const BankingServiceOffer = () => {

    const bankingServiceOfferData = [{ title: "Digital transformation consulting", desc: "Whether you need to develop an enterprise digital strategy or move to a new technology platform, ScienceSoft will work closely with you to improve your IT ecosystem. Our IT consultants will help you identify how banking solutions can reinvent your business, as well as help you choose the most suitable platform, and estimate costs", bgColor: "FF6868" },
    {
        title: "IT-based customer experience", desc: "With 12 years of experience in developing CXM solutions, ScienceSoft clearly understands what makes excellent customer experience and how software can optimize and enhance all stages of the CXM cycle. Our CX consultants will guide you through a variety of solutions for customer experience.",
        bgColor: "1777BC"
    },
    { title: "Solution maintenance and support", desc: "Backed by deep expertise in implementing platform-based solutions, ScienceSoft can meet the ever-changing needs of any banking environment at any scale. To reflect your bank’s unique business models, we can create a solution from scratch thereby satisfying your needs much more precisely than any off-the-shelf product.", bgColor: "E751FF" }]

    return (
        <div className="w-screen h-auto box-border lg:py-20 py-7 lg:bg-black lg:text-white text-black bg-white">
            <div className="lg:w-[85%] mx-auto w-full px-3 lg:px-0">
                <h1 className="lg:text-3xl font-bold text-2xl lg:text-white text-[blue]">
                    Banking IT Services We Offer
                </h1>
                <p className="lg:w-[95%] mt-4 w-full text-base">
                    Banking IT services are a way for banks and financial services companies to improve operational efficiency, drive innovations across their conventional business processes, and introduce the next-gen digital experience for their clients.
                </p>
            </div>
            <div className="lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]">
                {bankingServiceOfferData.map((item, index) => (
                    <div
                        key={index}
                        className="lg:w-[30%] md:w-[45%] h-auto border border-gray-300 p-4 text-white w-full"
                        style={{ backgroundColor: `#${item.bgColor}` }}
                    >
                        <h1 className="text-lg w-[90%]">{item.title}</h1>
                        <p className="text-sm mt-2 font-normal w-[95%]">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>


    )
}

export default BankingServiceOffer