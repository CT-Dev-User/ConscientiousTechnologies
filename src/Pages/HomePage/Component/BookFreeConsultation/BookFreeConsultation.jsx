import React from 'react'
import BookFreeCon from '../assets/BookFreeCon/bookFreeConsultation.png'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
const BookFreeConsultation = () => {
    const [freeConsultationData, setFreeConsultationData] = useState({ fullName: "", companyName: "", workEmail: "", workName: "", message: "" })
    const [term, setTerm] = useState(false)
    const [privacy, setprivacy] = useState(false)


    const postBookFreeConsultation = async () => {
        try {
            const response = await axios.post("https://conscientious-technologies-backend.vercel.app/add-book-free-con-data", freeConsultationData)
            if (response.status === 200) {
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
                  
            } 
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <div id='book-free-consultation' className='w-screen pb-8 flex justify-end h-auto lg:pt-24 pt-5'>
            <div className='w-[93%] bg-[white] flex justify-end gap-7'>
                <div className='lg:w-[53%] w-full flex flex-col gap-5'>
                    <div className='lg:w-full w-[95%]'>
                        <h1 className='lg:text-3xl font-bold text-2xl'>Book Free Consultation</h1>
                        <p className='text-base mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className='w-full flex gap-5 mt-2 flex-col lg:flex-row'>
                        <input type="text" className='focus:outline outline-1 outline-slate-400 lg:border lg:border-[#cccc] border-black border-[1.2px] lg:w-[22%] h-[35px] box-border ps-2 w-[95%]' placeholder='Full Name' onChange={(e) => { setFreeConsultationData({ ...freeConsultationData, fullName: e.target.value }) }} />
                        <input type="text" className='focus:outline outline-1 outline-slate-400 lg:border lg:border-[#cccc] border-black border-[1.2px] lg:w-[22%] h-[35px] box-border ps-2 w-[95%]' placeholder='Company Name' onChange={(e) => { setFreeConsultationData({ ...freeConsultationData, companyName: e.target.value }) }} />
                        <input type="text" className='focus:outline outline-1 outline-slate-400 lg:border lg:border-[#cccc] border-black border-[1.2px] lg:w-[22%] h-[35px] box-border ps-2 w-[95%]' placeholder='Work Email' onChange={(e) => { setFreeConsultationData({ ...freeConsultationData, workEmail: e.target.value }) }} />
                        <input type="text" className='focus:outline outline-1 outline-slate-400 lg:border lg:border-[#cccc] border-black border-[1.2px] lg:w-[22%] h-[35px] box-border ps-2 w-[95%]' placeholder='Work Name' onChange={(e) => { setFreeConsultationData({ ...freeConsultationData, workName: e.target.value }) }} />
                    </div>
                    <div className='lg:mt-4 w-full mt-2'>
                        <textarea name="" id="" rows="9" className='focus:outline outline-1 outline-slate-400 lg:border lg:border-[#cccc] p-2 lg:w-[96%] w-[95%] box-border border-black border-[1.2px]' placeholder='How Can help you?' onChange={(e) => { setFreeConsultationData({ ...freeConsultationData, message: e.target.value }) }} ></textarea>
                    </div>
                    <div className='flex flex-col gap-2 w-[98%]'>
                        <div className='flex gap-2 text-sm'>
                            <input type="checkbox" name="terms" id="terms" className='h-8 w-8 lg:h-4 lg:w-4 border border-black lg:border-2' onChange={()=>setTerm(!term)}/> <label htmlFor="terms">I agree Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi </label>
                        </div>
                        <div className='flex gap-2 text-sm'>
                            <input type="checkbox" name="conditions" id="conditions" className='h-8 w-8 lg:h-4 lg:w-4 border border-black lg:border-2' onChange={()=>{setprivacy(!privacy)}}/> <label htmlFor="conditions">I agree Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi</label>
                        </div>
                    </div>
                    <div className='w-[96%] text-sm'>
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit.  term & conditions</p>
                        <button
                            className="relative overflow-hidden border-[1.2px] border-[#ccc] px-4 py-2 lg:w-fit w-48 flex justify-center items-center mx-auto text-xs group mt-2 lg:mt-4 shadow-[0_35px_60px_-15px_ragb(0,0,0,0.3)]" onClick={postBookFreeConsultation}>
                            <span className="absolute inset-0 bg-[#33B7D4] transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                            <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">Submit{" "}<span className="font-bold">&rarr;</span></span>
                        </button>
                    </div>
                </div>
                <div className='lg:w-[47%] w-full bg-black hidden lg:block'>
                    <img src={BookFreeCon} alt="" className='w-full h-full' />
                </div>
            </div>

        </div>

    )
}

export default BookFreeConsultation
