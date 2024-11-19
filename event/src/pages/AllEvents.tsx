import React from 'react'

const AllEvents = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-center rounded">Event Organization Planning Form</h1>
        
        <form className="bg-white shadow-md rounded-lg p-8 grid grid-cols-2 gap-4">
        
          <div className="col-span-1">
            <div className="mb-4">
              <label htmlFor="firstName" className="block mb-2 text-sm font-semibold">First Name:</label>
              <input type="text" id="firstName" placeholder="First Name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-4">
              <label htmlFor="lastName" className="block mb-2 text-sm font-semibold">Last Name:</label>
              <input type="text" id="lastName" placeholder="Last Name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-semibold">Email:</label>
              <input type="email" id="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2 text-sm font-semibold">Phone Number:</label>
              <input type="tel" id="phone" placeholder="Phone Number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-semibold">creadit card:</label>
              <input type="email" id="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-4">
              <label htmlFor="eventType" className="block mb-2 text-sm font-semibold">Event Type:</label>
              <select id="eventType" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500">
                <option value="">Select Event Type</option>
                <option value="event1">Events</option>
                <option value="event2">Graduation</option>
                <option value="event3">Wedding</option>
                <option value="event4">Birthday</option>
              </select>
            </div>
            
            <button type="submit" className="bg-slate-500 hover:bg-black text- font-bold py-2 px-4 rounded mt-4 w-full transition-colors duration-300">
            Submit
          </button>         
           </div>
        </form>
      </div>
    </>
  )
}

export default AllEvents