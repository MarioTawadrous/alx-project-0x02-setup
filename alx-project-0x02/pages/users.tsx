// pages/users.tsx
import React from "react";
import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";
import { type UserProps } from "../interfaces";

interface UsersPageProps {
  users: UserProps[];
  error?: string;
}

interface ApiUser {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

const Users: React.FC<UsersPageProps> = ({ users, error }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">All Users</h1>
        <p className="text-gray-600 mb-8">Community members of our platform</p>

        {error ? (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
            <p className="font-medium">Error loading users:</p>
            <p>{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                address={user.address}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Update to use function declaration with parentheses
export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.status}`);
    }

    const data: ApiUser[] = await response.json();

    const users: UserProps[] = data.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      address: {
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode,
      },
    }));

    return {
      props: {
        users,
      },
      revalidate: 60,
    };
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred";
    return {
      props: {
        users: [],
        error: errorMessage,
      },
      revalidate: 60,
    };
  }
}

export default Users;