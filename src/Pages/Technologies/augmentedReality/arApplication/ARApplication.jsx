import React from 'react'

const ARApplication = () => {

    const CollabSenario = [{ title: "Content implementation", desc: "Whether you want an app that augments reality with 3D models or with overlaying textual data, we offer all-round assistance in implementing your AR app’s content. Our designers create detailed 3D models based on photos, illustrations or even rough sketches, while UI/UX experts plan the layout of the augmenting data to make it display conveniently on any mobile device.", bgColor: "FF6868" },
    {
        title: "Regular content updates", desc: "Whether you want an app that augments reality with 3D models or with overlaying textual data, we offer all-round assistance in implementing your AR app’s content. Our designers create detailed 3D models based on photos, illustrations or even rough sketches, while UI/UX experts plan the layout of the augmenting data to make it display conveniently on any mobile device.",
        bgColor: "1777BC"
    },
    { title: "Scene understanding and occlusion", desc: "We make sure that your app precisely recognizes scenes and objects in various conditions and places 3D models with realistic occlusion. The learning of our object/scene recognition and depth perception algorithms doesn’t end with the release: while apps are being used, they gather new data that we tap in our update packages to make the apps even smarter.", bgColor: "E751FF" }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[80px] md:py-[30px] md:bg-[black] md:text-[white]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>How We Achieve Visual and Content Consistency in AR Applications</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>The biggest challenges in any AR app development process are associated with object/scene recognition, occlusion, and content creation & maintenance. We skillfully handle all these tasks and provide content-rich and reliable AR solutions.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
                {CollabSenario.map((item, index) => (
                    <div key={index} className='w-[350px] h-auto border border-gray-300 p-3 text-[white] py-[20px] md:h-auto md:py-4 md:border-none md:px-2' style={{ backgroundColor: `#${item.bgColor}` }}>
                        <h1 className='text-[18px] w-[90%] md:text-[19px]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-normal mx-auto w-[95%] md:text-[14px]'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ARApplication