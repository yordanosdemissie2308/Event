import React from 'react';
import { Link } from 'react-router-dom';
import B1 from '../assets/B1.jpg';
import B2 from '../assets/B2.jpg';
import B3 from '../assets/B3.jpg';
import B4 from '../assets/B4.jpg';
import B5 from '../assets/B5.jpg';
import B6 from '../assets/B6.jpg';
import V from '../assets/V.mp4';

const Home = () => {
  return (
    <>
      <div className="bg-center bg-no-repeat">
        <video
          playsInline
          src={V}
          autoPlay
          muted
          loop
          className="absolute inset-0 object-cover w-full h-full"
        />

        <div className="flex items-center justify-center h-screen">
          <Link
            to="/allevents"
            className="relative z-10 flex items-center justify-center p-10 border-dashed rounded-md bg-gray-300 hover:bg-purple-700 transition-colors duration-300 ease-in-out"
          >
            GET STARTED
          </Link>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-100 p-8 shadow-md rounded-lg mb-12">
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-800 bg-white p-2 rounded-full border border-gray-300 w-full">
            We Are Your Event Organizers
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Collaborate with clients to understand their vision, objectives, and budget for the event.
            Brainstorm ideas and design a theme or concept that aligns with the client's expectations.
            Develop a project plan, detailing timelines, milestones, and key deliverables.
          </p>
          <button className="text-3xl font-mono text-center mb-4 text-gray-800 bg-amber-500 p-2 rounded-full border border-gray-500 hover:bg-white items-end">
            read more...
          </button>
        </div>

        <div className="bg-white p-6 shadow-md grid grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          <div className="max-w-xs mx-auto bg-white p-2 shadow-md rounded-lg mb-4 aspect-square w-50 h-50">
            
            <img src={B1} alt="Event Organizer Image 1" className="w-full h-auto object-cover" />
            <p className="mt-2 text-center">Description for Event 1</p>
          </div>
          <div className="max-w-xs mx-auto bg-white p-2 shadow-md rounded-lg mb-4 ect-square w-50 h-50">
            <img src={B2} alt="Event Organizer Image 2" className="w-full h-auto object-cover" />
            <p className="mt-2 text-center">Description for Event 2</p>
          </div>
          <div className="max-w-xs mx-auto bg-white p-2 shadow-md rounded-lg mb-4 ect-square w-50 h-100">
            <img src={B3} alt="Event Organizer Image 3" className="w-full h-auto object-cover" />
            <p className="mt-2 text-center">Description for Event 3</p>
          </div>
          <div className="max-w-xs mx-auto bg-white p-2 shadow-md rounded-lg mb-4 ect-square w-50 h-50">
            <img src={B4} alt="Event Organizer Image 4" className="w-full h-auto object-cover" />
            <p className="mt-2 text-center">Description for Event 4</p>
          </div>
          <div className="max-w-xs mx-auto bg-white p-2 shadow-md rounded-lg mb-4 ect-square w-50 h-50">
            <img src={B5} alt="Event Organizer Image 5" className="w-full h-auto object-cover" />
            <p className="mt-2 text-center">Description for Event 5</p>
          </div>
          <div className="max-w-xs mx-auto bg-white p-2 shadow-md rounded-lg mb-4 ect-square w-50 h-50">
            <img src={B6} alt="Event Organizer Image 6" className="w-full h-auto object-cover" />
            <p className="mt-2 text-center">Description for Event 6</p>
          </div>
          <Link
            to="/photo"
            className="rounded-lg text-sm text-gray-800 bg-amber-500 p-2 border border-gray-500 items-center hover:bg-white transition-colors duration-300 ease-in-out text-center"
          >
            Get More...
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
