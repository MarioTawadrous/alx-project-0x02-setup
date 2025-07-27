// pages/posts.tsx
import React from "react";
import Header from "../components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">All Posts</h1>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Understanding React Components
              </h2>
              <p className="text-gray-600 mb-4">
                Learn how to create reusable components in React with TypeScript
                and Tailwind CSS.
              </p>
              <span className="text-sm text-gray-500">
                Published: October 15, 2023
              </span>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                State Management in Modern Apps
              </h2>
              <p className="text-gray-600 mb-4">
                Explore different state management solutions and when to use
                them.
              </p>
              <span className="text-sm text-gray-500">
                Published: September 28, 2023
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Building Responsive UIs
              </h2>
              <p className="text-gray-600 mb-4">
                Master responsive design principles with practical examples
                using Tailwind CSS.
              </p>
              <span className="text-sm text-gray-500">
                Published: September 10, 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
