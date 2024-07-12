import React from "react";

const SignUp = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <form className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                    <input type="text" name="name" id="name" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                    <input type="email" name="email" id="email" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
                    <input type="password" name="password" id="password" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone</label>
                    <input type="text" name="phone" id="phone" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-semibold mb-2">Address</label>
                    <input type="text" name="address" id="address" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="role" className="block text-sm font-semibold mb-2">Role</label>
                    <input type="text" name="role" id="role" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;
