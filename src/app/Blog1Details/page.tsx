"use client"
import React, { useState } from 'react';

interface Comment {
  name: string;
  text: string;
  date: string;
}

const Page = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [newName, setNewName] = useState('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() && newName.trim()) {
      setComments([
        ...comments,
        {
          name: newName,
          text: newComment,
          date: new Date().toLocaleDateString(),
        },
      ]);
      setNewComment('');
      setNewName('');
    }
  };

  const handleDeleteComment = (index: number) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  const handleEditComment = (index: number) => {
    setEditingIndex(index);
    setEditingText(comments[index].text);
  };

  const handleSaveEdit = (index: number) => {
    const updatedComments = [...comments];
    updatedComments[index].text = editingText;
    setComments(updatedComments);
    setEditingIndex(null);
    setEditingText('');
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col items-center justify-between"
      style={{
        backgroundImage: "url('/pictures/bgimage.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative max-w-4xl mx-auto p-8 mt-16 mb-16 bg-gray-800 bg-opacity-80 text-white rounded-lg shadow-xl backdrop-blur-md">
        {/* Blog Content */}
        <h1 className="text-4xl font-extrabold mb-6">
          What’s New in Next.js 15?
        </h1>
        <p className="text-lg mb-6">
          Next.js has consistently remained at the forefront of modern web development, offering developers the tools they need to create powerful, fast, and scalable applications. With the release of <strong>Next.js 15</strong>, the framework has introduced several groundbreaking features that cater to the evolving demands of web developers. This update focuses on enhanced routing, real-time collaboration, improved server-side optimizations, and more. Let’s dive deep into what’s new and how it can revolutionize your web development process.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Enhanced Routing System</h2>
        <p className="text-lg mb-4">
          Routing in Next.js 15 has undergone a significant overhaul. The framework now supports an intuitive, dynamic, and highly customizable routing system. Here’s what’s new:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>Simplified Nested Routes:</strong> Developers can now define nested routes directly within the <code className="bg-gray-700 px-1 py-0.5 rounded">pages</code> directory, simplifying the process of managing complex application structures.
          </li>
          <li>
            <strong>Route Groups:</strong> Next.js 15 introduces “Route Groups” for organizing routes into logical clusters.
          </li>
          <li>
            <strong>Route Middleware Enhancements:</strong> Middleware in Next.js 15 is more powerful, with support for role-based access control, geolocation-based content delivery, and advanced analytics tracking.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Real-Time Collaboration Tools</h2>
        <p className="text-lg mb-4">
          Collaborative development takes center stage in Next.js 15 with built-in tools that enable teams to work together more efficiently:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>Live Previews:</strong> Developers can now share live previews of in-progress applications with team members or stakeholders.
          </li>
          <li>
            <strong>Integrated Comments and Feedback:</strong> Stakeholders can add comments directly on the live preview.
          </li>
          <li>
            <strong>Pair Programming Mode:</strong> This new feature allows two or more developers to work on the same Next.js application simultaneously.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Improved Server-Side Optimizations</h2>
        <p className="text-lg mb-4">
          Next.js 15 introduces significant server-side enhancements that aim to make applications faster and more resource-efficient:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>Edge-First Rendering:</strong> Developers can deliver content with minimal latency by executing server-side logic closer to the user’s location.
          </li>
          <li>
            <strong>Incremental Server Rendering (ISR 2.0):</strong> ISR has been revamped to handle even more dynamic use cases.
          </li>
          <li>
            <strong>Optimized Database Connections:</strong> Next.js 15 introduces built-in support for pooling and optimizing database connections.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
        <p className="text-lg mb-4">
          Next.js 15 continues to push the boundaries of what’s possible with a modern web development framework. Whether you’re a solo developer or part of a large team, these updates are designed to enhance productivity, improve performance, and create a better overall experience for both developers and end-users.
        </p>
        <p className="text-lg">
          If you haven’t explored Next.js 15 yet, now is the time. Embrace the future of web development and take your projects to the next level with these powerful new features.
        </p>

        {/* Comment Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="p-2 rounded w-full mb-2 text-black"
            />
            <textarea
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="p-2 rounded w-full text-black"
            ></textarea>
            <button
              onClick={handleAddComment}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Comment
            </button>
          </div>
          <div>
            {comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-700 p-4 rounded mb-4 text-white"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <strong>{comment.name}</strong> -{' '}
                    <span className="text-gray-400">{comment.date}</span>
                  </div>
                  <div>
                    <button
                      onClick={() => handleEditComment(index)}
                      className="text-blue-400 hover:underline mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteComment(index)}
                      className="text-red-400 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {editingIndex === index ? (
                  <div className="mt-2">
                    <textarea
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      className="p-2 rounded w-full text-black"
                    ></textarea>
                    <button
                      onClick={() => handleSaveEdit(index)}
                      className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <p className="mt-2">{comment.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Page;
