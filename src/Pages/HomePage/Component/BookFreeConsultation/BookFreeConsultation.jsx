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
            const response = await axios.post("http://localhost:8080/add-book-free-con-data", freeConsultationData)
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
        <div id='book-free-consultation' className='w-full pb-[30px] flex justify-end h-auto pt-[100px] md:pt-[20px]'>
            <div className='w-[93%] bg-[white] flex justify-end gap-[30px]'>
                <div className='w-[53%] md:w-[100%] flex flex-col gap-[20px]'>
                    <div className='w-[100%] md:w-[95%]'>
                        <h1 className='text-3xl font-bold md:text-[18px]'>Book Free Consultation</h1>
                        <p className='text-[14px] md:text-[12px] mt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className='w-[100%] flex gap-[20px] mt-[10px] md:flex-col'>
                        <input type="text" className='focus:outline outline-1 outline-slate-400 border border-[#cccc] md:border-black md:border-[1.2px] w-[22%] h-[35px] box-border ps-[10px] md:w-[95%]' placeholder='Full Name' onChange={(e) => { setFreeConsultationData({ ...freeConsultationData, fullName: e.target.value }) }} />
                        <input type="text" className='focus:outline outline-1 outline-slate-400 border border-[#cccc] md:border-black md:border-[1.2px] w-[22%] h-[35px] box-border ps-[10px] md:w-[95%]' placeholder='Company Name' onChange={(e) => { setFreeConsultationData({ ...freeConsultationData, companyName: e.target.value }) }} />
                        <input type="text" className='focus:outline outline-1 outline-slate-400 border border-[#cccc] md:border-black md:border-[1.2px] w-[22%] h-[35px] box-border ps-[10px] md:w-[95%]' placeholder='Work Email' onChange={(e) => { setFreeConsultationData({ ...freeConsultationData, workEmail: e.target.value }) }} />
                        <input type="text" className='focus:outline outline-1 outline-slate-400 border border-[#cccc] md:border-black md:border-[1.2px] w-[22%] h-[35px] box-border ps-[10px] md:w-[95%]' placeholder='Work Name' onChange={(e) => { setFreeConsultationData({ ...freeConsultationData, workName: e.target.value }) }} />
                    </div>
                    <div className='mt-4 w-[100%] md:mt-2'>
                        <textarea name="" id="" rows="9" className='focus:outline outline-1 outline-slate-400 border border-[#cccc] p-[10px] w-[96%] md:w-[95%] box-border md:border-black md:border-[1.2px]' placeholder='How Can help you?' onChange={(e) => { setFreeConsultationData({ ...freeConsultationData, message: e.target.value }) }} ></textarea>
                    </div>
                    <div className='flex flex-col gap-[10px] md:w-[98%]'>
                        <div className='md:text-[12px] md:flex md:gap-[10px]'>
                            <input type="checkbox" name="terms" id="terms" className='md:h-8 md:w-8 md:border border-black border-[2px]' onChange={()=>setTerm(!term)}/> <label htmlFor="terms">I agree Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi </label>
                        </div>
                        <div className='md:text-[12px] md:flex md:gap-[10px]'>
                            <input type="checkbox" name="conditions" id="conditions" className='md:h-8 md:w-8 md:border border-black border-[2px]' onChange={()=>{setprivacy(!privacy)}}/> <label htmlFor="conditions">I agree Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi</label>
                        </div>
                    </div>
                    <div className='md:w-[96%] md:text-[12px]'>
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit.  term & conditions</p>
                        <button
                            className="relative overflow-hidden border-[1.2px] border-[#ccc] px-[15px] py-[5px] w-[fit-content] md:w-[200px] md:flex justify-center items-center md:mx-auto text-[12px] group mt-[10px] shadow-[0_35px_60px_-15px_ragb(0,0,0,0.3)]" onClick={postBookFreeConsultation}>
                            <span className="absolute inset-0 bg-[#33B7D4] transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                            <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">Submit{" "}<span className="font-bold">&rarr;</span></span>
                        </button>
                    </div>
                </div>
                <div className='w-[47%] md:w-[100%] bg-[black] md:hidden'>
                    <img src={BookFreeCon} alt="" className='w-[100%] h-[100%]' />
                </div>
            </div>

        </div>

    )
}

export default BookFreeConsultation
