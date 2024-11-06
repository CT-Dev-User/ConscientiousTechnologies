import axios from 'axios';
import React, { useState } from 'react'
import { IoLocationOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';

const HelpSection = () => {
    const [fullName, setfullName] = useState("");
    const [workEmail, setworkEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [message_request, setMessage_request] = useState("");

    const [currentlyPursing, setCurrentlyPursuing] = useState("");
    const [year, setYear] = useState("");
    const [courseChooseWithTM, setCourseChooseWithTM] = useState("");

   
    const isValidEmail = (workEmail) => /\S+@\S+\.\S+/.test(workEmail);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !fullName ||
            !workEmail ||
            !phoneNo ||
            !companyName||
            !message_request

        ) {
            Swal.fire("Error", "Please fill out all fields.", "error");
            return;
        }

        if (!isValidEmail(workEmail)) {
            Swal.fire("Error", "Please enter a valid email address.", "error");
            return;
        }

        // Proceed with form submission
        axios
            .post(
                "https://conscientious-technologies-backend.vercel.app/post-contact-us-form-data",
                {
                    fullName,
                    workEmail,
                    phoneNo,
                    companyName,
                    message_request
                  
                }
            )
            .then((res) => {
                Swal.fire("Success", res.data.message, "success");
                // Clear form fields after successful submission
                setfullName("");
                setworkEmail("");
                setPhoneNo("");
                setCompanyName("");
                setMessage_request("");
                setCurrentlyPursuing("");
                setYear("");
                setCourseChooseWithTM("");
            })
            .catch((err) => {
                console.log(err);
                Swal.fire("Error", "Something went wrong Please try again.", "error");
            });
    };

    return (
        <div className="w-screen py-8  md:py-20 px-4 md:px-16 lg:px-20 box-border">
            <div className="container mx-auto lg:w-[85%]">
                <h1 className="text-[#78B6FF] uppercase text-lg md:text-2xl lg:text-3xl 2xl:text-4xl md:text-[#78B6FF] font-semibold md:mb-6 mb-0 text-md">
                    How can we help you?
                </h1>
                <div className="flex flex-col md:flex-row justify-between mx-auto lg:p-3 p-0 ">
                    <div className="md:w-[58%] w-full flex flex-col  gap-12 2xl:gap-10 pt-10">
                        {/* //Note: Address */}
                        <div className="flex items-start mt-10 justify-start gap-5">
                            <span className="h-fit">
                                <IoLocationOutline
                                    color="[#78B6FF]"
                                    className="text-start mt-1 text-[#78B6FF] text-xl md:text-4xl lg:text-4xl"
                                />
                            </span>
                            <p className="text-start font-normal text-lg 2xl:text-xl tracking-wider ">
                                2nd Floor, Trident Tower, Mangalmurti Layout, near Kanhaiya Kunj Hotel, Mahesh Nagar, Guruchhaya Colony, Sai Nagar, Amravati,
                                Maharashtra 444607
                            </p>
                        </div>
                        <div className="flex items-start justify-start gap-3">
                            <span className="h-fit">
                                <IoLocationOutline
                                    color="[#78B6FF]"
                                    className="text-start mt-1 text-[#78B6FF] text-xl md:text-4xl lg:text-4xl"
                                />
                            </span>
                            <div>
                                <p className="text-start font-normal text-lg 2xl:text-xl tracking-wider ">
                                    enquiry@techmomentum.in
                                </p>
                                <p className="text-start font-normal text-lg 2xl:text-xl tracking-wider ">
                                    enquiry@techmomentum.in
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start justify-start gap-3">
                            <span className="h-fit">
                                <IoLocationOutline
                                    color="[#78B6FF]"
                                    className="text-start mt-1 text-[#78B6FF] text-xl md:text-4xl lg:text-4xl"
                                />
                            </span>
                            <div>
                                <p className="text-start font-normal text-lg 2xl:text-xl tracking-wider ">
                                    +91 842-143-2551                                </p>
                                <p className="text-start font-normal text-lg 2xl:text-xl tracking-wider ">
                                    +91 842-143-2551                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="w-full md:w-[40%] my-auto mt-8 md:mt-10 lg:mt-0 ">
                        <div>
                            <p className="text-[#67ADFF] font-semibold text-md lg:text-xl uppercase mb-1">
                                Request more information
                            </p>
                            <form
                                className="flex flex-col justify-between items-center"
                                onSubmit={handleSubmit}
                            >
                                <input
                                    type="text"
                                    name="name"
                                    onChange={(e) => setfullName(e.target.value)}
                                    value={fullName}
                                    className="rounded-lg border-[1px] border-black p-2 lg:p-3 lg:my-2 2xl:my-3 w-full my-2"
                                    placeholder="Your full name"
                                />
                                <input
                                    type="email"
                                    name="workEmail"
                                    onChange={(e) => setworkEmail(e.target.value)}
                                    value={workEmail}
                                    className="rounded-lg border-[1px] border-black p-2 lg:p-3 lg:my-2 2xl:my-3 w-full my-2"
                                    placeholder="Email"
                                />
                                <input
                                    type="tel"
                                    name="phoneNo"
                                    onChange={(e) => setPhoneNo(e.target.value)}
                                    value={phoneNo}
                                    className="rounded-lg border-[1px] border-black p-2 lg:p-3 lg:my-2 2xl:my-3 w-full my-2"
                                    placeholder="Phone number"
                                />
                                <input
                                    type="text"
                                    name="companyName"
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    value={companyName}
                                    className="rounded-lg border-[1px] border-black p-2 lg:p-3 lg:my-2 2xl:my-3 w-full my-2"
                                    placeholder="company name"
                                />
                                <textarea
                                    type="text"
                                    name="message_request"
                                    onChange={(e) => setMessage_request(e.target.value)}
                                    value={message_request}
                                    className="rounded-lg border-[1px] border-black p-2 lg:p-3 lg:my-2 2xl:my-3 w-full my-2"
                                    placeholder="message request"
                                />
                                {/* <input
                                    type="text"
                                    name="currentlyPursing"
                                    onChange={(e) => setCurrentlyPursuing(e.target.value)}
                                    value={currentlyPursing}
                                    className="rounded-lg border-[1px] border-black p-2 lg:p-3 lg:my-2 2xl:my-3 w-full my-2"
                                    placeholder="Currently Pursuing"
                                /> */}
                                {/* <input
                                    type="text"
                                    name="year"
                                    onChange={(e) => setYear(e.target.value)}
                                    value={year}
                                    className="rounded-lg border-[1px] border-black p-2 lg:p-3 lg:my-2 2xl:my-3 w-full my-2"
                                    placeholder="Year"
                                /> */}
                                {/* <input
                                    type="text"
                                    name="courseChooseWithTM"
                                    onChange={(e) => setCourseChooseWithTM(e.target.value)}
                                    value={courseChooseWithTM}
                                    className="rounded-lg border-[1px] border-black p-2 lg:p-3 lg:my-2 2xl:my-3 w-full my-2"
                                    placeholder="Course choose with TechMomentum"
                                /> */}
                                <div className="flex justify-center items-center mt-6 2xl:mt-8 mb-3">
                                    <button
                                        type="submit"
                                        className="my-3 bg-white max-h-10 px-14 py-3 gap-1 border text-lg 2xl:text-xl border-black rounded-md flex items-center font-medium hover:bg-[#0c8ce9] hover:text-white hover:border hover:border-[#0c8ce9]"
                                    >
                                        <span>Enquire Now</span>
                                        <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
                                            ›
                                        </span>
                                    </button>
                                </div>
                                <p className="text-base 2xl:text-lg">
                                    By tapping submit, you agree to the{" "}
                                    <a
                                        href="TM-Terms&Conditions.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#3B82F0]"
                                    >
                                        Terms & Conditions
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        href="TM-PrivacyPolicy.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#3B82F0]"
                                    >
                                        Privacy Policy
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HelpSection
