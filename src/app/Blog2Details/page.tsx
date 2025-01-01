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
    }
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col items-center justify-between"
      style={{
        backgroundImage: "url('/pictures/bgimage.png')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-4xl mx-auto p-8 mt-16 mb-16 bg-gray-800 bg-opacity-80 text-white rounded-lg shadow-xl backdrop-blur-md">
        <h1 className="text-4xl font-extrabold text-blue-300 mb-6">
          Mastering React
        </h1>
        <p className="text-lg mb-6">
          React continues to evolve, solidifying its position as one of the most
          popular libraries for building dynamic and interactive web
          applications. This guide explores the latest updates in React,
          offering insights into new APIs, performance improvements, and best
          practices to help you stay ahead in React development.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          New APIs and Features
        </h2>
        <p className="text-lg mb-4">
          React's ecosystem has introduced powerful APIs that simplify
          development and enhance application performance. Here’s what’s new:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>React Server Components:</strong> Enable seamless
            server-side rendering for faster page loads and improved SEO.
          </li>
          <li>
            <strong>useSyncExternalStore:</strong> Manage external state more
            effectively, ensuring consistency across components.
          </li>
          <li>
            <strong>New Context API Improvements:</strong> Simplified context
            updates and better developer experience.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          Performance Enhancements
        </h2>
        <p className="text-lg mb-4">
          React has focused on optimizing performance with these advancements:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>Concurrent Rendering:</strong> Improved responsiveness by
            breaking rendering work into smaller, interruptible tasks.
          </li>
          <li>
            <strong>Automatic Batching:</strong> Minimize re-renders by batching
            state updates automatically.
          </li>
          <li>
            <strong>React DevTools Enhancements:</strong> Gain deeper insights
            into component trees and performance bottlenecks.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          Best Practices for 2024
        </h2>
        <p className="text-lg mb-6">
          As React matures, adhering to best practices is more critical than
          ever. Follow these tips to maximize your efficiency and
          maintainability:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            Embrace functional components and hooks for a more declarative code
            style.
          </li>
          <li>
            Use TypeScript to add strong typing and improve code reliability.
          </li>
          <li>
            Leverage code-splitting and lazy loading for optimized performance.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          The Future of React
        </h2>
        <p className="text-lg mb-6">
          The React team continues to push the boundaries of what's possible
          with web development. Upcoming features, like improved SSR
          (Server-Side Rendering) and further integrations with Next.js, promise
          to make React an even more powerful tool for developers.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          Conclusion
        </h2>
        <p className="text-lg mb-6">
          Whether you're a seasoned React developer or just starting, staying
          updated with the latest features and practices is essential. Mastering
          React in 2024 means embracing new APIs, leveraging performance
          improvements, and adhering to proven best practices.
        </p>
        <p className="text-lg">
          Dive into React’s latest updates and elevate your development skills
          to new heights. The future of React development is brighter than ever!
        </p>

        {/* Comments Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Comments</h2>
          <div className="mb-6">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-700 p-4 rounded-lg shadow-md mb-2"
              >
                <p className="text-blue-300 font-semibold">{comment.name}</p>
                <p className="text-gray-300 text-sm">{comment.date}</p>
                <p className="text-lg">{comment.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 rounded-lg bg-gray-600 text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="p-2 rounded-lg bg-gray-600 text-white placeholder-gray-400"
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
    </div>
  );
};

export default Page;
