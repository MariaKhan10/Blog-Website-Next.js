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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-8">
      <div className="max-w-3xl mx-auto p-8 bg-blue-50 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">React Simplified</h1>
        <p className="text-lg text-gray-700 mb-4">
          React is a JavaScript library that has transformed the way we build
          web applications. Created by Facebook, React allows developers to build
          powerful and interactive user interfaces for web and mobile
          applications. It focuses on building reusable components, making your
          code more modular, maintainable, and scalable. Whether you’re building
          a single-page application (SPA) or a complex dashboard, React provides
          the flexibility and performance needed to meet modern web standards.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          React is based on the concept of components. Each component encapsulates
          its logic and design, making it reusable across the application. This
          approach not only speeds up development but also ensures consistency
          throughout the app. Additionally, React uses a virtual DOM (Document
          Object Model), which makes updates to the UI faster and more efficient
          compared to manipulating the real DOM directly.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Use React?</h2>
        <p className="text-lg text-gray-700 mb-4">
          The popularity of React stems from its powerful features and simplicity.
          Here are some reasons why React stands out:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>
            <strong>Component-Based Architecture:</strong> Break your UI into
            small, reusable components that manage their own state and logic.
          </li>
          <li>
            <strong>Declarative Syntax:</strong> Write your code in a way that is
            easy to read and debug.
          </li>
          <li>
            <strong>Virtual DOM:</strong> React's virtual DOM ensures high
            performance by minimizing updates to the real DOM.
          </li>
          <li>
            <strong>Unidirectional Data Flow:</strong> Simplifies debugging and
            state management.
          </li>
          <li>
            <strong>Rich Ecosystem:</strong> Access a vast library of tools,
            extensions, and community-driven resources.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          What You’ll Learn in This Guide
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          In this tutorial, we’ll explore:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-4">
          <li>
            Understanding the fundamentals of React, including JSX and components.
          </li>
          <li>
            How to use state and props to manage data flow within your application.
          </li>
          <li>
            Implementing React Hooks like <code>useState</code> and{" "}
            <code>useEffect</code> for functional components.
          </li>
          <li>
            Best practices for structuring your project and organizing your
            components.
          </li>
          <li>
            Introduction to React Router for creating seamless navigation in your
            app.
          </li>
          <li>
            Tips for optimizing your app’s performance with memoization and lazy
            loading.
          </li>
        </ol>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Getting Started with React
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Before diving into development, ensure you have Node.js installed on
          your machine. You can create a new React application using Create React
          App or Vite for a faster build setup. Here’s a quick way to start a
          project:
        </p>
        <pre className="bg-gray-500 p-4 rounded-lg text-sm overflow-x-auto mb-4">
          {`npx create-react-app my-app
cd my-app
npm start`}
        </pre>
        <p className="text-lg text-gray-700 mb-4">
          Once your development server is running, you’ll see the default React
          starter page. From here, you can start building your application by
          creating new components and styling them.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
        <p className="text-lg text-gray-700 mb-4">
          React simplifies the process of building and managing user interfaces,
          allowing developers to focus on creating a seamless user experience.
          Its flexibility, rich ecosystem, and strong community support make it a
          top choice for developers worldwide. Whether you are a beginner or an
          expert, mastering React will elevate your development skills and open
          doors to endless possibilities in modern web development.
        </p>
        <p className="text-lg text-gray-700">
          So, what are you waiting for? Dive into React, explore its features, and
          start building amazing applications today!
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
    </div>
  );
};

export default Page;
