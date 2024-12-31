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
          CSS Trends: What’s Hot in 2024?
        </h1>
        <p className="text-lg mb-6">
          CSS continues to evolve, bringing new possibilities for creating stunning, responsive web designs. In 2024, developers have an exciting array of tools and features to explore. From container queries to advanced animations, these trends are redefining how we approach web design. Let’s dive into the most impactful CSS trends for 2024 and learn how to use them to stay ahead of the curve.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          Container Queries: The Future of Responsive Design
        </h2>
        <p className="text-lg mb-4">
          Container queries are revolutionizing responsive design by allowing styles to adapt based on the size of the parent container, not just the viewport. Key benefits include:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>Greater Flexibility:</strong> Define component-specific breakpoints for better modularity.
          </li>
          <li>
            <strong>Improved Scalability:</strong> Create truly reusable components that respond to their context.
          </li>
          <li>
            <strong>Reduced Media Query Dependency:</strong> Simplify your stylesheets by minimizing global breakpoints.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          Advanced Animations and Motion Design
        </h2>
        <p className="text-lg mb-4">
          Modern CSS introduces tools that make animations more seamless and engaging:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>Scroll-Linked Animations:</strong> Create immersive experiences by tying animations to the user’s scroll position.
          </li>
          <li>
            <strong>CSS Houdini:</strong> Leverage the Houdini APIs to extend CSS capabilities, enabling custom animations and effects.
          </li>
          <li>
            <strong>Reduced Motion Preferences:</strong> Respect user settings with the <code>prefers-reduced-motion</code> media query, ensuring accessibility.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          New Layout Tools
        </h2>
        <p className="text-lg mb-4">
          2024 brings enhancements to layout systems that streamline design workflows:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>Subgrid:</strong> Gain finer control over nested grid items, making complex layouts easier to manage.
          </li>
          <li>
            <strong>Aspect Ratio:</strong> Ensure consistent proportions for images, videos, and containers without JavaScript.
          </li>
          <li>
            <strong>Clamp Function:</strong> Dynamically scale values between a defined range for fluid typography and spacing.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          Enhancing Accessibility with CSS
        </h2>
        <p className="text-lg mb-4">
          Accessibility remains a top priority, and CSS provides tools to improve inclusivity:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>Focus Indicators:</strong> Use the <code>:focus-visible</code> pseudo-class for better keyboard navigation.
          </li>
          <li>
            <strong>Dark Mode:</strong> Implement dark mode easily using the <code>prefers-color-scheme</code> media query.
          </li>
          <li>
            <strong>Contrast Adjustments:</strong> Utilize tools like <code>color-contrast()</code> to ensure optimal text readability.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          The Rise of Custom Properties
        </h2>
        <p className="text-lg mb-6">
          Custom properties (CSS variables) are becoming essential for maintaining scalable and maintainable styles. They allow developers to:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            Share values across components for consistent theming.
          </li>
          <li>
            Enable dynamic theming without rewriting stylesheets.
          </li>
          <li>
            Simplify responsive design with variable-based calculations.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          Conclusion
        </h2>
        <p className="text-lg mb-6">
          2024 is shaping up to be an exciting year for CSS, with tools and features that empower developers to build cutting-edge, responsive, and accessible designs. By embracing trends like container queries, advanced animations, and improved accessibility tools, you can stay ahead of the curve and create web experiences that captivate users.
        </p>
        <p className="text-lg">
          Start exploring these CSS trends today and take your web design skills to the next level. The future of CSS is here—make the most of it!
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
