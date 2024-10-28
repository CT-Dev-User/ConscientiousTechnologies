import axios from 'axios';
import React, { useState } from 'react'
import { IoLocationOutline } from 'react-icons/io5';

const HelpSection = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [currentlyPursing, setCurrentlyPursuing] = useState("");
    const [year, setYear] = useState("");
    const [courseChooseWithTM, setCourseChooseWithTM] = useState("");

    // Create an array with the contact details objects
    const contactDetails = [
        { key: "Enquire Now", value: { email: "email@gmail.com", contactNo: "0987654321" } },
        { key: "for grievance", value: { email: "email@gmail.com", contactNo: "0987654321" } },
        { key: "For Corporate", value: { email: "email@gmail.com", contactNo: "0987654321" } },
    ];
    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !name ||
            !email ||
            !phoneNo ||
            !currentlyPursing ||
            !year ||
            !courseChooseWithTM
        ) {
            Swal.fire("Error", "Please fill out all fields.", "error");
            return;
        }

        if (!isValidEmail(email)) {
            Swal.fire("Error", "Please enter a valid email address.", "error");
            return;
        }

        // Proceed with form submission
        axios
            .post(
                "https://ot676akte0.execute-api.ap-south-1.amazonaws.com/dev/add-new-contact-us-form-data",
                {
                    name,
                    email,
                    phoneNo,
                    currentlyPursing,
                    year,
                    courseChooseWithTM,
                }
            )
            .then((res) => {
                Swal.fire("Success", res.data.message, "success");
                // Clear form fields after successful submission
                setName("");
                setEmail("");
                setPhoneNo("");
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
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    className="rounded-lg border-[1px] border-black p-2 lg:p-3 lg:my-2 2xl:my-3 w-full my-2"
                                    placeholder="Your full name"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
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
                                    name="currentlyPursing"
                                    onChange={(e) => setCurrentlyPursuing(e.target.value)}
                                    value={currentlyPursing}
                                    className="rounded-lg border-[1px] border-black p-2 lg:p-3 lg:my-2 2xl:my-3 w-full my-2"
                                    placeholder="Currently Pursuing"
                                />
                                <input
                                    type="text"
                                    name="year"
                                    onChange={(e) => setYear(e.target.value)}
                                    value={year}
                                    className="rounded-lg border-[1px] border-black p-2 lg:p-3 lg:my-2 2xl:my-3 w-full my-2"
                                    placeholder="Year"
                                />
                                <input
                                    type="text"
                                    name="courseChooseWithTM"
                                    onChange={(e) => setCourseChooseWithTM(e.target.value)}
                                    value={courseChooseWithTM}
                                    className="rounded-lg border-[1px] border-black p-2 lg:p-3 lg:my-2 2xl:my-3 w-full my-2"
                                    placeholder="Course choose with TechMomentum"
                                />
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
