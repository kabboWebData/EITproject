import Sharlok from "..//../assets/photos/Sharlok.png"


import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 mx-24">
      <div className="flex-1 md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold align-middle text-gray-800 mb-4">
          Welcome to our website
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Your compelling description goes here. This is where you grab attention.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Primary Action
          </button>
          <button className="bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition duration-300">
            Secondary Action
          </button>
        </div>
      </div>
      <div className="flex-1 md:w-1/2 text-center">
        <img
          src={Sharlok}
          alt="Descriptive Alt Text"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
