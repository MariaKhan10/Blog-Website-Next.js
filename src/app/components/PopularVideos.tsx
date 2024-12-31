import Link from 'next/link'
import React from 'react'
import { Great_Vibes } from '@next/font/google';

const greatVibes = Great_Vibes({
  weight: ['400'], // Specify weights if necessary
  subsets: ['latin'], // Specify subsets
  display: 'swap', // Use font-display: swap for better performance
});


const PopularVideos = () => {
  return (
    <div>
      <section className="text-[#6b74ee] body-font">
    <div className="container px-5 py-24 mx-auto">
    <h1 className={`${greatVibes.className} "sm:text-3xl text-4xl font-medium title-font mb-4 text-center text-white"`}>Trending Tutorials</h1>
    <div className="h-1 w-20 bg-indigo-500 rounded m-auto"></div>
      <div className="flex flex-wrap -m-4 mt-10">

        


      <div className="p-4 md:w-1/3">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-indigo-500">
    <img
      className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-500 hover:scale-110"
      src="/pictures/reactimg.png"
      alt="blog"
    />
    <div className="p-6">
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 transition-colors duration-300 hover:text-indigo-400">
        CATEGORY
      </h2>
      <h1 className="title-font text-lg font-medium text-white mb-3 transition-transform duration-500 hover:translate-x-1">
        React Simplified
      </h1>
      <p className="leading-relaxed mb-3 text-white transition-opacity duration-500 hover:opacity-80">
        Build interactive user interfaces effortlessly with React. Explore
        essential tips, best practices, and powerful features to supercharge
        your development skills.
      </p>
      <div className="flex items-center flex-wrap">
        <Link
          href="/Tutorial1"
          className="text-indigo-500 inline-flex items-center mt-4 transition-transform duration-500 hover:scale-110"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 transition-opacity duration-500 hover:opacity-80">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx={12} cy={12} r={3} />
          </svg>
          1.2K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm transition-opacity duration-500 hover:opacity-80">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
          6
        </span>
      </div>
    </div>
  </div>
</div>



<div className="p-4 md:w-1/3">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-indigo-500">
    <img
      className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-500 hover:scale-110"
      src="/pictures/nextjs.png"
      alt="blog"
    />
    <div className="p-6">
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 transition-colors duration-300 hover:text-indigo-400">
        CATEGORY
      </h2>
      <h1 className="title-font text-lg font-medium text-white mb-3 transition-transform duration-500 hover:translate-x-1">
        Next.js Mastery
      </h1>
      <p className="leading-relaxed mb-3 text-white transition-opacity duration-500 hover:opacity-80">
        Unlock the power of server-side rendering and static site generation
        with Next.js. Dive into guides and tutorials to build lightning-fast,
        SEO-friendly web applications.
      </p>
      <div className="flex items-center flex-wrap">
        <Link
          href="/Tutorial2"
          className="text-indigo-500 inline-flex items-center mt-4 transition-transform duration-500 hover:scale-110"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 transition-opacity duration-500 hover:opacity-80">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx={12} cy={12} r={3} />
          </svg>
          1.2K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm transition-opacity duration-500 hover:opacity-80">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
          6
        </span>
      </div>
    </div>
  </div>
</div>




<div className="p-4 md:w-1/3">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-indigo-500">
    <img
      className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-500 hover:scale-110"
      src="/pictures/python.png"
      alt="blog"
    />
    <div className="p-6">
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 transition-colors duration-300 hover:text-indigo-400">
        CATEGORY
      </h2>
      <h1 className="title-font text-lg font-medium text-white mb-3 transition-transform duration-500 hover:translate-x-1">
        Python Essentials
      </h1>
      <p className="leading-relaxed mb-3 text-white transition-opacity duration-500 hover:opacity-80">
        Master Python programming with tutorials on data structures, web
        development, and automation. Read the language that powers everything
        from AI to backend development.
      </p>
      <div className="flex items-center flex-wrap">
        <Link
          href="/Tutorial3"
          className="text-indigo-500 inline-flex items-center mt-4 transition-transform duration-500 hover:scale-110"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 transition-opacity duration-500 hover:opacity-80">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx={12} cy={12} r={3} />
          </svg>
          1.2K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm transition-opacity duration-500 hover:opacity-80">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
          6
        </span>
      </div>
    </div>
  </div>
</div>










<div className="p-4 md:w-1/3">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
    <img
      className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-500 hover:scale-110"
      src="/pictures/css.png"
      alt="blog"
    />
    <div className="p-6">
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
        CATEGORY
      </h2>
      <h1 className="title-font text-lg font-medium text-white mb-3">
        CSS in Action
      </h1>
      <p className="leading-relaxed mb-3 text-white">
        Transform your designs with CSS. Discover advanced techniques,
        animations, and responsive layouts to create visually stunning and
        user-friendly websites.
      </p>
      <div className="flex items-center flex-wrap">
        <Link
          href="/Tutorial4"
          className="text-indigo-500 inline-flex items-center mt-4"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx={12} cy={12} r={3} />
          </svg>
          1.2K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
          6
        </span>
      </div>
    </div>
  </div>
</div>




<div className="p-4 md:w-1/3">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <div className="relative">
      {/* Background Image */}
      <img
        className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-300 hover:scale-110"
        src="/pictures/js.png"
        alt="blog"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-30"></div>
    </div>
    <div className="p-6 relative">
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
        CATEGORY
      </h2>
      <h1 className="title-font text-lg font-medium text-white mb-3">
        JavaScript Fundamentals
      </h1>
      <p className="leading-relaxed mb-3 text-white">
        Dive into the core of web development with JavaScript. From essential
        syntax to advanced concepts like closures and asynchronous programming,
        we've got you covered.
      </p>
      <div className="flex items-center flex-wrap">
        <Link
          href="/Tutorial5"
          className="text-indigo-500 inline-flex items-center mt-4"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx={12} cy={12} r={3} />
          </svg>
          1.2K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
          6
        </span>
      </div>
    </div>
  </div>
</div>



<div className="p-4 md:w-1/3">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <div className="relative">
      {/* Background Image */}
      <img
        className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-300 hover:scale-110"
        src="/pictures/fw.png"
        alt="blog"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-30"></div>
    </div>
    <div className="p-6 relative">
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
        CATEGORY
      </h2>
      <h1 className="title-font text-lg font-medium text-white mb-3">
        Frontend Frameworks
      </h1>
      <p className="leading-relaxed mb-3 text-white">
        Navigate the world of modern frontend frameworks. Compare React, Vue,
        and Angular, and learn when and how to use each for your next project.
      </p>
      <div className="flex items-center flex-wrap">
        <Link
          href="/Tutorial6"
          className="text-indigo-500 inline-flex items-center mt-4"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx={12} cy={12} r={3} />
          </svg>
          1.2K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
          6
        </span>
      </div>
    </div>
  </div>
</div>



        


      </div>
    </div>
  </section>
    </div>
  )
}

export default PopularVideos