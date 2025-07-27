// pages/posts.tsx
import React from "react";
import Header from "../components/layout/Header";
import PostCard from "../components/common/PostCard";
import { type PostProps } from "../interfaces";

interface PostsPageProps {
  posts: PostProps[];
  error?: string;
}

// Define interface for API response data
interface ApiPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const Posts: React.FC<PostsPageProps> = ({ posts, error }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">All Posts</h1>
        <p className="text-gray-600 mb-8">Latest posts from our community</p>

        {error ? (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
            <p className="font-medium">Error loading posts:</p>
            <p>{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                userId={post.userId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=6"
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const data: ApiPost[] = await response.json();

    // Map API data to match PostProps interface
    const posts: PostProps[] = data.map((post) => ({
      id: post.id,
      title: post.title,
      content: post.body, // Map body to content
      userId: post.userId,
    }));

    return {
      props: {
        posts,
      },
      revalidate: 60,
    };
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred";
    return {
      props: {
        posts: [],
        error: errorMessage,
      },
      revalidate: 60,
    };
  }
};

export default Posts;