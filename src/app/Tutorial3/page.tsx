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
    <div className="max-w-3xl mx-auto p-8 bg-yellow-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Python Essentials</h1>
      <p className="text-lg text-gray-700 mb-4">
        Python is one of the most popular and versatile programming languages in the world. Known for its simplicity 
        and readability, Python empowers developers to build a wide range of applications, from web development and 
        data analysis to artificial intelligence and automation. Whether you’re a beginner taking your first steps in 
        coding or a seasoned developer looking to expand your skills, mastering Python is an invaluable asset.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Python’s syntax is designed to be clean and intuitive, making it an excellent choice for new programmers. 
        Meanwhile, its vast ecosystem of libraries and frameworks supports cutting-edge technologies like machine 
        learning, deep learning, and big data analysis. With Python, you can create dynamic websites, automate mundane 
        tasks, analyze data sets, and even build intelligent AI systems—all with ease.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Learn Python?</h2>
      <p className="text-lg text-gray-700 mb-4">
        Python’s popularity isn’t just a trend; it’s a testament to its powerful features and adaptability. Here are some reasons why Python is a must-learn language:
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li><strong>Beginner-Friendly:</strong> Python’s straightforward syntax makes it easy to learn and use.</li>
        <li><strong>Wide Range of Applications:</strong> From web development to AI, Python is used in almost every domain.</li>
        <li><strong>Rich Library Ecosystem:</strong> Access thousands of libraries for tasks like data analysis, visualization, and machine learning.</li>
        <li><strong>Community Support:</strong> A massive and active community provides extensive resources and support.</li>
        <li><strong>Cross-Platform:</strong> Write code once and run it anywhere, thanks to Python’s portability.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">What You’ll Learn in This Guide</h2>
      <p className="text-lg text-gray-700 mb-4">
        This guide covers the essential concepts and techniques to help you become proficient in Python. Here’s what you’ll explore:
      </p>
      <ol className="list-decimal pl-6 text-gray-700 mb-4">
        <li>Understanding Python’s syntax, variables, and data types.</li>
        <li>Mastering core data structures like lists, dictionaries, and sets.</li>
        <li>Using loops, conditional statements, and functions effectively.</li>
        <li>Introduction to object-oriented programming (OOP) in Python.</li>
        <li>Working with popular libraries such as NumPy, pandas, and Matplotlib for data analysis and visualization.</li>
        <li>Exploring web development with Flask or Django.</li>
        <li>Automating repetitive tasks using Python scripts.</li>
        <li>Building AI-powered applications with machine learning frameworks like TensorFlow or scikit-learn.</li>
      </ol>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Getting Started with Python</h2>
      <p className="text-lg text-gray-700 mb-4">
        To get started with Python, you’ll need to install it on your computer. Visit the official Python website 
        (<a href="https://www.python.org/" className="text-blue-500 underline">python.org</a>) and download the latest version for your operating system. After installation, you can write and execute Python code using the built-in 
        interpreter or an IDE like PyCharm, VS Code, or Jupyter Notebook.
      </p>
      <pre className="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto mb-4">
        {`# Your first Python program
print("Hello, Python!")`}
      </pre>
      <p className="text-lg text-gray-700 mb-4">
        This simple program prints "Hello, Python!" to the console, showcasing Python’s ease of use and readability. 
        From here, you can begin exploring Python’s powerful features and capabilities.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
      <p className="text-lg text-gray-700 mb-4">
        Python is a language that grows with you. Whether you’re building your first project or working on cutting-edge 
        technologies, Python provides the tools and community support to help you succeed. Its versatility and simplicity 
        make it a favorite among developers, data scientists, and educators worldwide.
      </p>
      <p className="text-lg text-gray-700">
        So, embark on your Python journey today! Unlock the potential of this incredible language and transform your ideas into reality.
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
