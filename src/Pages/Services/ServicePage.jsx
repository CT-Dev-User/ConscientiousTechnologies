import React from 'react'

const ServicePage = () => {
    return (
        <div className="w-full bg-gray-300 h-full mx-auto p-4">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Sr. No</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">HomePageDesc</th>
              <th className="border p-2">HomeImage</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2">Sample Title</td>
              <td className="border p-2">Description of the homepage content goes here</td>
              <td className="border p-2"> {/* Placeholder for HomeImage */}</td>
              <td className="border p-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    )
}

export default ServicePage
