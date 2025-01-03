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
        backgroundImage: "url('/pictures/bgimage.png')", // Replace with the correct path
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-4xl mx-auto p-8 mt-16 mb-16 bg-gray-800 bg-opacity-80 text-white rounded-lg shadow-xl backdrop-blur-md">
        <h1 className="text-4xl font-extrabold text-purple-300 mb-6">
          React Server Components: The Game Changer
        </h1>
        <p className="text-lg mb-6">
          React Server Components (RSCs) are revolutionizing the way we build web applications by bridging the gap between server-side rendering and client-side interactivity. Learn how RSCs are setting new standards for performance and flexibility in React development.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          What Are React Server Components?
        </h2>
        <p className="text-lg mb-4">
          React Server Components allow developers to execute components on the server and send a serialized version of their output to the client. This approach improves performance and reduces the amount of JavaScript that needs to be sent to the browser.
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>Server-Side Rendering:</strong> Offload complex rendering tasks to the server for faster load times.
          </li>
          <li>
            <strong>Client-Side Efficiency:</strong> Minimize client-side JavaScript for a more lightweight application.
          </li>
          <li>
            <strong>Seamless Integration:</strong> Combine with existing React features for a unified development experience.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          Benefits of React Server Components
        </h2>
        <p className="text-lg mb-4">
          React Server Components bring several key benefits to modern web development:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>Improved Performance:</strong> Rendering components on the server reduces client-side processing overhead.
          </li>
          <li>
            <strong>Code Splitting:</strong> Load only the necessary components for each page, optimizing resource usage.
          </li>
          <li>
            <strong>Enhanced SEO:</strong> Pre-rendered content improves search engine discoverability and indexing.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          How to Use React Server Components
        </h2>
        <p className="text-lg mb-4">
          To start using React Server Components, follow these steps:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>Set Up Your Project:</strong> Ensure you're using the latest version of React and configure your project for server-side rendering.
          </li>
          <li>
            <strong>Create Server Components:</strong> Write components that execute on the server and return a serialized output.
          </li>
          <li>
            <strong>Integrate with Client Components:</strong> Seamlessly blend server-rendered components with client-side interactivity.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          Key Use Cases
        </h2>
        <p className="text-lg mb-4">
          React Server Components are ideal for a range of scenarios:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>Data-Driven Applications:</strong> Pre-render data-intensive components for faster initial load times.
          </li>
          <li>
            <strong>Complex UI:</strong> Offload rendering for complex UI components to the server.
          </li>
          <li>
            <strong>Dynamic Content:</strong> Generate personalized content on the server for each user request.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          Conclusion
        </h2>
        <p className="text-lg mb-6">
          React Server Components represent a paradigm shift in web development, offering unparalleled performance and flexibility. By adopting RSCs, developers can build faster, more efficient, and highly interactive web applications that meet the demands of modern users.
        </p>
        <p className="text-lg">
          Start exploring React Server Components today and take your web development projects to the next level!
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
