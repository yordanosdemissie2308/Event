import React from 'react'
import B1 from '../assets/B1.jpg';
import B2 from '../assets/B2.jpg';
import B3 from '../assets/B3.jpg';
import B4 from '../assets/B4.jpg';
import B5 from '../assets/B5.jpg';
import B6 from '../assets/B6.jpg';

const Photo = () => {
  return (
    <div className="bg-white p-6 shadow-md grid grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
        <img src={B1} alt="Event Organizer Image" className="w-full h-auto object-cover max-w-xs mx-auto bg-white p-2 shadow-md rounded-lg mb-4" />
        <img src={B2} alt="Event Organizer Image" className="w-full h-auto object-cover max-w-xs mx-auto bg-white p-2 shadow-md rounded-lg mb-4" />
        <img src={B3} alt="Event Organizer Image" className="w-full h-auto object-cover max-w-xs mx-auto bg-white p-2 shadow-md rounded-lg mb-4" />
        <img src={B4} alt="Event Organizer Image" className="w-full h-auto object-cover max-w-xs mx-auto bg-white p-2 shadow-md rounded-lg mb-4" />
        <img src={B5} alt="Event Organizer Image" className="w-full h-auto object-cover max-w-xs mx-auto bg-white p-2 shadow-md rounded-lg mb-4" />
        <img src={B1} alt="Event Organizer Image" className="w-full h-auto object-cover max-w-xs mx-auto bg-white p-2 shadow-md rounded-lg mb-4" />
        <img src={B2} alt="Event Organizer Image" className="w-full h-auto object-cover max-w-xs mx-auto bg-white p-2 shadow-md rounded-lg mb-4" />
        <img src={B3} alt="Event Organizer Image" className="w-full h-auto object-cover max-w-xs mx-auto bg-white p-2 shadow-md rounded-lg mb-4" />
        <img src={B4} alt="Event Organizer Image" className="w-full h-auto object-cover max-w-xs mx-auto bg-white p-2 shadow-md rounded-lg mb-4" />
        <img src={B5} alt="Event Organizer Image" className="w-full h-auto object-cover max-w-xs mx-auto bg-white p-2 shadow-md rounded-lg mb-4" />
   </div>
  )
}

export default Photo
