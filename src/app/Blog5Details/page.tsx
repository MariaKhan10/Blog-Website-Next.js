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
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-4xl mx-auto p-8 mt-16 mb-16 bg-gray-800 bg-opacity-80 text-white rounded-lg shadow-xl backdrop-blur-md">
        <h1 className="text-4xl font-extrabold text-purple-300 mb-6">
          Build Smarter with AI-Powered Next.js
        </h1>
        <p className="text-lg mb-6">
          AI is transforming web development, and Next.js is at the forefront of this revolution. By integrating AI tools and capabilities, you can build smarter, more personalized web applications that deliver exceptional user experiences and streamline development workflows.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          Enhancing User Experiences with AI
        </h2>
        <p className="text-lg mb-4">
          AI integrations in Next.js allow you to create web applications that adapt to user behavior and preferences. Key areas of improvement include:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>Personalized Content:</strong> Use AI models to analyze user data and display relevant content dynamically.
          </li>
          <li>
            <strong>Real-Time Recommendations:</strong> Leverage machine learning algorithms to suggest products, articles, or services in real-time.
          </li>
          <li>
            <strong>Natural Language Interfaces:</strong> Integrate AI-powered chatbots and voice assistants to improve accessibility and engagement.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          Automating Development Tasks
        </h2>
        <p className="text-lg mb-4">
          AI tools can automate repetitive tasks, freeing developers to focus on creative problem-solving. In Next.js projects, this includes:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>Code Generation:</strong> AI-powered tools like GitHub Copilot help write boilerplate code faster and more accurately.
          </li>
          <li>
            <strong>Testing and Debugging:</strong> Automated testing tools can identify potential bugs and performance issues before they become critical.
          </li>
          <li>
            <strong>Content Creation:</strong> Generate placeholder text, images, or even complete content using AI-driven tools.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          Scaling Applications with AI
        </h2>
        <p className="text-lg mb-4">
          AI is also making it easier to scale applications efficiently by optimizing backend processes:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>Load Balancing:</strong> AI-driven algorithms can optimize server load distribution for better performance.
          </li>
          <li>
            <strong>Predictive Analytics:</strong> Use AI models to forecast traffic spikes and scale infrastructure accordingly.
          </li>
          <li>
            <strong>Data Analysis:</strong> Automate the analysis of user data to uncover insights that guide development decisions.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          Key AI Tools for Next.js Development
        </h2>
        <p className="text-lg mb-4">
          Here are some tools and libraries to integrate AI into your Next.js projects:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>NextAuth.js:</strong> Combine authentication with AI-powered user management for secure, personalized experiences.
          </li>
          <li>
            <strong>TensorFlow.js:</strong> Add machine learning capabilities directly to your Next.js frontend.
          </li>
          <li>
            <strong>LangChain:</strong> Use large language models to build conversational AI applications.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          Conclusion
        </h2>
        <p className="text-lg mb-6">
          By integrating AI into your Next.js projects, you can create applications that are not only smarter but also more efficient and user-friendly. Whether you're personalizing user experiences, automating development tasks, or scaling infrastructure, AI provides the tools you need to stay ahead of the curve.
        </p>
        <p className="text-lg">
          Start exploring AI-powered Next.js development today and unlock the potential of smarter web applications!
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
