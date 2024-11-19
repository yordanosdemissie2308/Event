import React from 'react'

const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-100 p-4">
      <div className="text-xl font-bold">Event-Organizer</div>
      <div className="space-x-4">
        <a href="home" className="px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">Home</a>
        <a href="#" className="px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">About</a>
      </div>
      <div className="w-full md:w-auto">
        <select name="photo" id="photos-id" className="appearance-none w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-300">
          <option value="">Select Photo Category</option> 
          <option value="photos1">All Photos</option> 
          <option value="photos2">Graduation</option> 
          <option value="photos3">Wedding</option> 
          <option value="photos4">Ceremony</option> 
        </select>
      </div>
      <div className="w-full md:w-auto">
        <select name="event" id="event-id" className="appearance-none w-full px-4 py-2 border border-gray-400 rounded-50% focus:outline-none focus:border-blue-500 transition-colors duration-300">
          <option value="">Select Event Type</option> 
          <option value="event1">All Events</option> 
          <option value="event2">Graduation</option> 
          <option value="event3">Wedding</option> 
          <option value="event4">Ceremony</option> 
        </select>
      </div>
      <div className="flex justify-between items-center bg-gray-100 p-4 gap-5">
      <a href='login'>login</a>
        <a href='signup'>sign up</a>

      </div>
    </nav>
  )
}

export default Nav