import React from 'react';

const Page = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-blue-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS in Action</h1>
      <p className="text-lg text-gray-700 mb-4">
        CSS (Cascading Style Sheets) is the backbone of modern web design, enabling developers and designers to bring their creative visions to life. From stunning animations to responsive layouts, CSS transforms the appearance of websites, ensuring they look great on every device. Whether you're a beginner experimenting with basic styles or an experienced developer mastering advanced techniques, CSS offers endless possibilities to enhance your designs.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        With CSS, you can control the color, typography, spacing, and layout of web pages, crafting user experiences that are both visually appealing and functional. It bridges the gap between HTML structure and dynamic interactivity, making your websites more engaging and user-friendly.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why CSS Matters</h2>
      <p className="text-lg text-gray-700 mb-4">
        CSS is more than just a styling tool—it's a critical skill for any web developer. Here’s why:
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li><strong>Responsive Design:</strong> Create layouts that adapt seamlessly to any screen size.</li>
        <li><strong>Enhanced User Experience:</strong> Use CSS transitions, animations, and effects to engage users.</li>
        <li><strong>Customizable Styling:</strong> Define your brand identity through unique designs and themes.</li>
        <li><strong>Performance Optimization:</strong> Implement efficient styles for faster page loading.</li>
        <li><strong>Interactivity:</strong> Combine CSS with JavaScript for dynamic and interactive elements.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">What You’ll Learn in This Guide</h2>
      <p className="text-lg text-gray-700 mb-4">
        This guide provides an in-depth look at CSS techniques to take your web design skills to the next level. Here’s what we’ll cover:
      </p>
      <ol className="list-decimal pl-6 text-gray-700 mb-4">
        <li>Core concepts of the CSS box model, selectors, and specificity.</li>
        <li>Creating responsive layouts using Flexbox and CSS Grid.</li>
        <li>Advanced typography techniques for beautiful text styling.</li>
        <li>Implementing CSS animations and transitions for dynamic effects.</li>
        <li>Mastering pseudo-elements and pseudo-classes for targeted styling.</li>
        <li>Using custom properties (CSS variables) for maintainable code.</li>
        <li>Building dark and light mode themes with minimal effort.</li>
        <li>Optimizing CSS for performance and maintainability.</li>
      </ol>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Getting Started with CSS</h2>
      <p className="text-lg text-gray-700 mb-4">
        To start styling your web pages, ensure you include a CSS file in your HTML project. You can use inline styles, internal stylesheets, or external CSS files for your projects. External stylesheets are recommended for better organization and scalability. Here's a simple example:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-4">
        {`/* Example CSS */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: #333;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`}
      </pre>
      <p className="text-lg text-gray-700 mb-4">
        This CSS snippet demonstrates basic styling for typography, layout, and structure. By mastering these foundational concepts, you can expand into more advanced techniques like animations and responsive design.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
      <p className="text-lg text-gray-700 mb-4">
        CSS is the art of web design. With its wide array of features and capabilities, it empowers developers to craft beautiful, functional, and responsive websites. Whether you’re looking to enhance user experiences or create standout designs, mastering CSS will unlock a world of possibilities in web development.
      </p>
      <p className="text-lg text-gray-700">
        So dive into the world of CSS today! Transform your designs and create web experiences that captivate and inspire.
      </p>
    </div>
  );
};

export default Page;
