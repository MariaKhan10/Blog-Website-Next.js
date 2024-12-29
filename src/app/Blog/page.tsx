import Link from 'next/link';
import React from 'react';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "What’s New in Next.js 15?",
      date: "12 Dec 2024",
      description:
        "Discover the cutting-edge features of Next.js 15, including enhanced routing, real-time collaboration, and improved server-side optimizations. Stay ahead of the curve with our in-depth analysis.",
      link: "/Blog1Details",
    },
    {
      id: 2,
      title: "Mastering React",
      date: "24 Nov 2024",
      description:
        "Get up to speed with the latest updates in React. From new APIs to performance improvements, this guide covers everything you need to know to excel in React development this year.",
      link: "/Blog2Details",
    },
    {
      id: 3,
      title: "Python AI Trends for 2024",
      date: "12 Oct 2024",
      description:
        "Explore how Python continues to dominate the AI and machine learning landscape. Read about the latest frameworks, libraries, and trends shaping the future of AI development.",
      link: "/Blog3Details",
    },
    {
      id: 4,
      title: "CSS Trends: What’s Hot in 2024?",
      date: "12 Oct 2024",
      description:
        "From container queries to advanced animations, discover the CSS trends that are redefining web design in 2024. Learn how to use them to create cutting-edge, responsive designs.",
      link: "/Blog4Details",
    },
    {
      id: 5,
      title: "Build Smarter with AI-Powered Next.js",
      date: "2 Oct 2024",
      description:
        "Leverage AI integrations in Next.js to create smarter, more personalized web applications. Learn how AI tools can enhance user experience and automate complex tasks in your projects.",
      link: "/Blog5Details",
    },
    {
      id: 6,
      title: "React Server Components: The Game Changer",
      date: "16 Sep 2024",
      description:
        "React Server Components are revolutionizing the way developers think about building dynamic web applications. Explore their potential and learn how to integrate them into your workflow.",
      link: "/Blog6Details",
    },
  ];

  return (
    <div>
      <section className="text-gray-300 body-font overflow-hidden bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-800">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="py-8 flex flex-wrap md:flex-nowrap hover:bg-gray-800 transition ease-in-out duration-300 rounded-lg px-5"
              >
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-400 uppercase">
                    Blog
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">{blog.date}</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-white title-font mb-2">
                    {blog.title}
                  </h2>
                  <p className="leading-relaxed text-gray-400">
                    {blog.description}
                  </p>
                  <Link
                    href={blog.link}
                    className="text-blue-400 inline-flex items-center mt-4 hover:underline"
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
