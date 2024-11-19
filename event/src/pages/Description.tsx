import React from 'react';
import B1 from '../assets/B1.jpg';
import B2 from '../assets/B2.jpg';
import B3 from '../assets/B3.jpg';
import B4 from '../assets/B4.jpg';
import B5 from '../assets/B5.jpg';
import B6 from '../assets/B6.jpg';

const Description = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto bg-gray-100 p-8 shadow-md rounded-lg mb-12">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800 bg-white p-2 rounded-full border border-gray-300 w-full">
          We Are Your Event Organizers
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Collaborate with clients to understand their vision, objectives, and budget for the event.
          Brainstorm ideas and design a theme or concept that aligns with the client's expectations.
          Develop a project plan, detailing timelines, milestones, and key deliverables.
        </p>
        <button className="text-3xl font-mono text-center mb-4 text-gray-800 bg-amber-500 p-2 rounded-full border border-gray-500 items-center hover:bg-white">read more</button>
      </div>
       
      <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
<img src={B1} alt="Event Organizer Image" className="w-full h-auto object-cover" />
        <img src={B2} alt="Event Organizer Image" className="w-full h-auto object-cover" />
        <img src={B3} alt="Event Organizer Image" className="w-full h-auto object-cover" />
        <img src={B4} alt="Event Organizer Image" className="w-full h-auto object-cover" />
        <img src={B5} alt="Event Organizer Image" className="w-full h-auto object-cover" />
        <img src={B6} alt="Event Organizer Image" className="w-full h-auto object-cover" />
        <button className="text-3xl font-mono text-center mb-4 text-gray-800 bg-amber-500 p-2 rounded-full border border-gray-500 items-center hover:bg-white">get more</button>
      </div>
    </>
  );
};

export default Description;
