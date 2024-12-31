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
        backgroundImage: "url('/pictures/bgimage.png')", // Update the image path
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-4xl mx-auto p-8 mt-16 mb-16 bg-gray-800 bg-opacity-80 text-white rounded-lg shadow-xl backdrop-blur-md">
        <h1 className="text-4xl font-extrabold text-blue-300 mb-6">
          Python AI Trends for 2024
        </h1>
        <p className="text-lg mb-6">
          Python remains the go-to programming language for artificial intelligence and machine learning, cementing its dominance in these fields year after year. In 2024, exciting advancements in frameworks, libraries, and techniques are shaping the future of AI development. Let’s delve into the latest trends that are redefining how we approach AI with Python.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          Cutting-Edge Frameworks and Libraries
        </h2>
        <p className="text-lg mb-4">
          Python continues to lead the way in AI development, thanks to its robust ecosystem of frameworks and libraries. Some notable highlights for 2024 include:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>PyTorch 3.0:</strong> The latest version introduces enhanced support for distributed training and optimized performance for large-scale models.
          </li>
          <li>
            <strong>TensorFlow Lite:</strong> Accelerating AI on edge devices with improved tools for model quantization and deployment.
          </li>
          <li>
            <strong>Hugging Face Transformers:</strong> Expanded support for multi-modal models, enabling seamless integration of text, image, and audio data.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          Generative AI Advancements
        </h2>
        <p className="text-lg mb-4">
          Generative AI continues to gain momentum, with Python playing a pivotal role in its evolution. Key trends include:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>Fine-Tuning Techniques:</strong> New methods for fine-tuning large language models make customization easier and more efficient.
          </li>
          <li>
            <strong>Diffusion Models:</strong> Python libraries now support advanced diffusion-based generative models for realistic image synthesis.
          </li>
          <li>
            <strong>Reinforcement Learning for Creativity:</strong> Leveraging reinforcement learning to guide generative models toward creative outputs.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          AI Ethics and Responsible AI
        </h2>
        <p className="text-lg mb-4">
          As AI becomes more powerful, the importance of ethical considerations grows. Python tools and libraries are stepping up to address these challenges:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>Fairness Indicators:</strong> Tools like AI Fairness 360 help identify and mitigate bias in machine learning models.
          </li>
          <li>
            <strong>Model Explainability:</strong> Python libraries such as SHAP and LIME provide transparency into model decision-making processes.
          </li>
          <li>
            <strong>Data Privacy:</strong> Enhanced techniques for secure multi-party computation ensure that sensitive data remains private during training.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          The Rise of Low-Code AI Platforms
        </h2>
        <p className="text-lg mb-4">
          Python is at the forefront of the low-code movement, enabling developers and non-developers alike to create powerful AI applications:
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <strong>AutoML Tools:</strong> Libraries like Auto-sklearn simplify the process of building machine learning models with minimal code.
          </li>
          <li>
            <strong>Drag-and-Drop Interfaces:</strong> Python frameworks now integrate with GUI tools, making AI development more accessible.
          </li>
          <li>
            <strong>Pre-Trained Models:</strong> The availability of plug-and-play models accelerates the deployment of AI solutions.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          Conclusion
        </h2>
        <p className="text-lg mb-6">
          Python's dominance in the AI and machine learning landscape shows no signs of slowing down. With cutting-edge frameworks, advancements in generative AI, and a growing focus on ethical practices, Python continues to be the language of choice for AI innovation. Stay ahead of the curve by embracing these trends and exploring the vast ecosystem of tools and libraries that Python offers.
        </p>
        <p className="text-lg">
          Dive into Python AI trends today and prepare to shape the future of AI development in 2024!
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
