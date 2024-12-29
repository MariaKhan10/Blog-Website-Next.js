import React from 'react';

const Hero = () => {
  return (
    <div>
      <section className="text-white body-font bg-black bg-opacity-50">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
              Empowering Developers with
              <br className="hidden lg:inline-block" />
              Code Insights
            </h1>
            <p className="mb-8 leading-relaxed text-gray-300">
              Dive into the world of cutting-edge development with expert insights on Next.js, CSS, React, and Python. Whether you're building dynamic web applications, mastering frontend styling, or solving complex backend challenges, Digital Devs has you covered. Unlock tutorials, tips, and tools to elevate your coding journey.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Explore Tutorials
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-lg shadow-lg"
              alt="hero"
              src="/pictures/heroimg.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
