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
      <h1 className="text-3xl font-bold text-gray-800 mb-6">JavaScript Fundamentals</h1>
      <p className="text-lg text-gray-700 mb-4">
        JavaScript is the beating heart of modern web development, enabling dynamic and interactive web applications. It’s the language that powers everything from form validations to real-time updates, making it an essential skill for developers. Whether you’re just starting or looking to refine your knowledge, understanding JavaScript fundamentals will set you up for success.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        With JavaScript, you can add interactivity to your websites, control the DOM, and build powerful applications that run seamlessly across browsers. As the foundation of web development, JavaScript is not just about writing code—it’s about crafting user experiences that are both engaging and efficient.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Learn JavaScript?</h2>
      <p className="text-lg text-gray-700 mb-4">
        JavaScript is indispensable in today’s web development landscape. Here’s why mastering it matters:
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li><strong>Interactivity:</strong> Enhance user engagement with dynamic and interactive features.</li>
        <li><strong>Versatility:</strong> JavaScript is used for client-side scripting, server-side development, and even mobile app development.</li>
        <li><strong>Rich Ecosystem:</strong> Access a vast library of frameworks and tools like React, Angular, and Node.js.</li>
        <li><strong>High Demand:</strong> JavaScript developers are highly sought after in the tech industry.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">What You’ll Learn</h2>
      <p className="text-lg text-gray-700 mb-4">
        This guide is your roadmap to mastering JavaScript, covering essential topics such as:
      </p>
      <ol className="list-decimal pl-6 text-gray-700 mb-4">
        <li>Core Syntax: Learn variables, data types, and operators.</li>
        <li>Control Flow: Understand conditional statements and loops.</li>
        <li>Functions: Explore function declarations, expressions, and arrow functions.</li>
        <li>Objects and Arrays: Work with complex data structures.</li>
        <li>DOM Manipulation: Learn how to dynamically update web pages.</li>
        <li>Asynchronous Programming: Master promises, async/await, and fetch API.</li>
        <li>Closures and Scope: Dive into advanced concepts for writing efficient code.</li>
        <li>Debugging: Learn best practices for identifying and fixing errors.</li>
      </ol>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Getting Started with JavaScript</h2>
      <p className="text-lg text-gray-700 mb-4">
        To start your JavaScript journey, you can include it directly in your HTML file or use an external script. Here’s a simple example:
      </p>
      <pre className="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto mb-4">
        {`<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Example</title>
  </head>
  <body>
    <h1 id="greeting">Hello, World!</h1>
    <script>
      const element = document.getElementById('greeting');
      element.textContent = 'Welcome to JavaScript!';
    </script>
  </body>
</html>`}
      </pre>
      <p className="text-lg text-gray-700 mb-4">
        This example demonstrates how to manipulate the DOM using JavaScript to dynamically update content. Such simple yet powerful techniques lay the foundation for more advanced applications.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
      <p className="text-lg text-gray-700 mb-4">
        JavaScript is the bridge between static content and dynamic, interactive web experiences. By mastering its fundamentals, you’ll open doors to advanced topics and frameworks that are vital in today’s tech landscape. From building responsive websites to developing scalable applications, JavaScript empowers you to bring your ideas to life.
      </p>
      <p className="text-lg text-gray-700">
        Start your journey with JavaScript today and unleash the potential to create amazing web applications that users will love!
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
