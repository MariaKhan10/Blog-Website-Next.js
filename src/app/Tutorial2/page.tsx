"use client";

import React, { useState } from "react";

const Page = () => {
  const [comments, setComments] = useState<
    { name: string; text: string; date: string }[]
  >([]);
  const [newComment, setNewComment] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim() && name.trim()) {
      const date = new Date().toLocaleString(); // Current date and time
      setComments([
        ...comments,
        { name: name.trim(), text: newComment.trim(), date },
      ]);
      setNewComment("");
      setName("");
    }
  };
  return (
    <div className="max-w-3xl mx-auto p-8 bg-blue-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Next.js Mastery</h1>
      <p className="text-lg text-gray-700 mb-4">
        Next.js is a React framework that has revolutionized web development by combining server-side rendering (SSR) 
        and static site generation (SSG) capabilities into a single powerful tool. Developed by Vercel, Next.js enables 
        developers to create lightning-fast, SEO-optimized applications with ease. Whether you're building a portfolio, 
        e-commerce store, or a large-scale web app, Next.js provides the flexibility, performance, and features to meet 
        all your requirements.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        This framework goes beyond traditional client-side rendering by offering features like API routes, dynamic 
        routing, and image optimization, making it a complete solution for modern web development. With its focus on 
        developer experience, Next.js simplifies complex tasks, allowing you to focus on creating exceptional user 
        experiences.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Next.js?</h2>
      <p className="text-lg text-gray-700 mb-4">
        Next.js is more than just a framework; it’s a game-changer in the world of web development. Here are a few reasons why developers prefer Next.js:
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li><strong>Server-Side Rendering (SSR):</strong> Deliver pre-rendered HTML pages for better SEO and faster load times.</li>
        <li><strong>Static Site Generation (SSG):</strong> Generate static pages at build time for unmatched performance.</li>
        <li><strong>API Routes:</strong> Build serverless functions directly within your application.</li>
        <li><strong>Dynamic Routing:</strong> Create flexible and efficient routes without complex configurations.</li>
        <li><strong>Image Optimization:</strong> Serve optimized images with built-in support for lazy loading and resizing.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">What You’ll Learn in This Guide</h2>
      <p className="text-lg text-gray-700 mb-4">
        In this tutorial, we’ll cover the following topics to help you master Next.js:
      </p>
      <ol className="list-decimal pl-6 text-gray-700 mb-4">
        <li>Setting up a Next.js project and understanding its folder structure.</li>
        <li>Implementing server-side rendering and static site generation.</li>
        <li>Using dynamic routes and getStaticProps/getServerSideProps for data fetching.</li>
        <li>Optimizing performance with incremental static regeneration (ISR).</li>
        <li>Building API routes and integrating serverless functions.</li>
        <li>Using middleware for custom logic and authentication.</li>
        <li>Best practices for deploying your Next.js app using Vercel or other platforms.</li>
      </ol>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Getting Started with Next.js</h2>
      <p className="text-lg text-gray-700 mb-4">
        Getting started with Next.js is simple. Ensure you have Node.js installed, then use the following commands to set up a new project:
      </p>
      <pre className="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto mb-4">
        {`npx create-next-app@latest my-next-app
cd my-next-app
npm run dev`}
      </pre>
      <p className="text-lg text-gray-700 mb-4">
        Once your development server is running, visit <code>http://localhost:3000</code> in your browser to see your new Next.js app in action. From here, you can start building dynamic and powerful web applications.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
      <p className="text-lg text-gray-700 mb-4">
        Next.js empowers developers to create high-performance web applications with minimal effort. Its rich set of features, seamless integration with React, and focus on developer experience make it an essential tool for modern web development. Whether you’re new to Next.js or looking to refine your skills, this guide will provide the knowledge and confidence to build amazing applications.
      </p>
      <p className="text-lg text-gray-700">
        Start your Next.js journey today and unlock the potential of server-side rendering, static site generation, and much more. The future of web development awaits!
      </p>
      
        {/* Comments Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>
          <div className="mb-6">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md mb-2"
              >
                <p className="font-semibold text-gray-800">{comment.name}</p>
                <p className="text-gray-500 text-sm">{comment.date}</p>
                <p className="text-gray-700">{comment.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="p-2 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500"
            />
            <button
              onClick={handleAddComment}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-400"
            >
              Post
            </button>
          </div>
        </div>
    </div>
  );
};

export default Page;
