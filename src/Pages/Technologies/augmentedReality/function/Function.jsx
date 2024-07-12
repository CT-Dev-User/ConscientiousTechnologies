import React from 'react'

const Function = () => {
    const softwareAdv = [{ title: "Scene detection", points: ["Our AR apps scan real-life surroundings with the camera lens, perceive gathered data as an image on a coordinate plane, and translate it into a depth map to ensure realistic 3D model placement."] }, { title: "Image and object recognition", points: ["Along with scene understanding, our AR apps can be trained to recognize specific 2D images and 3D real-life objects and augment them with the relevant text or model data on the device screen."] }, { title: "Motion tracking", points: ["Common for all smartphones and tablets, GPS, gyroscope, and accelerometer allow our AR apps dynamically resize and calibrate augmentations on the screen as you and your device move around."] }, { title: "Light estimation", points: ["With the help of smart light estimation algorithms, our AR apps can automatically adjust the lighting of the 3D model to naturally match that of the scene in the camera lens."] }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[80px] md:pt-[40px] pb-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Functions We Can Build into an AR App</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. CT helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px]'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[45%] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border md:w-full md:border-none md:p-0 md:h-auto md:py-3' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px] md:text-[20px] md:pl-0'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] font-normal md:text-[14px] md:pl-3'>
                                    {
                                        item.points.map((point, i) => {
                                            return (
                                                <li key={i}>{point}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Function