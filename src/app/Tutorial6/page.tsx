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
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Frontend Frameworks</h1>
      <p className="text-lg text-gray-700 mb-4">
        In the fast-paced world of web development, frontend frameworks have become essential tools for building modern, scalable, and maintainable applications. React, Vue, and Angular are the leading frameworks that offer unique features and capabilities to streamline the development process. Whether you’re building a small personal project or a large-scale enterprise application, understanding the strengths and use cases of each framework will help you choose the right tool for the job.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        In this guide, we will explore the key differences between these three popular frameworks, compare their features, and give you insights into how and when to use each of them. Let’s dive into the world of frontend frameworks and unlock the best practices for modern web development.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Use a Frontend Framework?</h2>
      <p className="text-lg text-gray-700 mb-4">
        Frontend frameworks provide a structured approach to building web applications, offering numerous benefits:
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li><strong>Efficiency:</strong> Pre-built components and tools speed up development, reducing the need to write boilerplate code.</li>
        <li><strong>Consistency:</strong> Frameworks ensure a consistent structure and coding practices, making it easier to manage and scale large projects.</li>
        <li><strong>Community Support:</strong> Popular frameworks have large communities, ensuring extensive documentation, tutorials, and third-party tools.</li>
        <li><strong>Maintainability:</strong> Frameworks help you follow best practices for code organization, making future updates and debugging easier.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">React</h2>
      <p className="text-lg text-gray-700 mb-4">
        React is a lightweight, flexible library developed by Facebook for building user interfaces. It focuses on component-based architecture, allowing developers to create reusable components that can be composed to form complex UIs. React's virtual DOM ensures high performance, making it ideal for building dynamic applications with frequent updates.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        React is often chosen for its speed, scalability, and flexibility. It’s great for building single-page applications (SPAs) and complex UIs. However, it requires additional libraries, such as React Router and Redux, to manage routing and state, which can increase complexity for new developers.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">When to Use React</h3>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>For building SPAs (Single Page Applications).</li>
        <li>When you need reusable, maintainable components.</li>
        <li>If you prefer flexibility and the option to integrate various libraries and tools.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vue</h2>
      <p className="text-lg text-gray-700 mb-4">
        Vue is a progressive JavaScript framework designed to be incrementally adoptable. It’s known for its simplicity, ease of integration, and gentle learning curve. Vue combines the best features of React and Angular, offering both flexibility and structure. It’s perfect for developers who want a lightweight framework with the power to scale as projects grow.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Vue is ideal for small to medium-sized projects, and its clear documentation and simple syntax make it accessible to developers with varying levels of experience. It’s also highly customizable, allowing developers to integrate only the parts of Vue they need for their project.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">When to Use Vue</h3>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>For projects that require quick development without sacrificing flexibility.</li>
        <li>If you want a smooth learning curve and a framework that’s easy to integrate into existing projects.</li>
        <li>When building medium-sized applications that require both flexibility and structure.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Angular</h2>
      <p className="text-lg text-gray-700 mb-4">
        Angular is a powerful, full-fledged framework developed by Google. It follows a Model-View-Controller (MVC) architecture and provides an extensive set of tools for building large-scale, enterprise-level applications. Angular’s built-in tools for routing, form validation, and state management make it a comprehensive solution for complex web applications.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        While Angular has a steeper learning curve compared to React and Vue, its all-in-one approach makes it ideal for large projects with complex requirements. Angular’s strong typing with TypeScript provides better tooling, which is especially useful for teams working on large applications.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">When to Use Angular</h3>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>For large-scale, enterprise-level applications that require a comprehensive, all-in-one framework.</li>
        <li>If you need strong typing (TypeScript) for better tooling and code maintainability.</li>
        <li>When building applications with complex routing, forms, and state management needs.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
      <p className="text-lg text-gray-700 mb-4">
        Each of these frontend frameworks—React, Vue, and Angular—has its unique advantages and use cases. Choosing the right one depends on your project requirements, team experience, and long-term scalability. React is perfect for flexibility and speed, Vue is ideal for simplicity and ease of adoption, and Angular excels in complex, enterprise-level applications.
      </p>
      <p className="text-lg text-gray-700">
        By understanding the strengths and trade-offs of each framework, you can make an informed decision about which one to use for your next project, ensuring that you deliver high-quality, maintainable web applications.
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
