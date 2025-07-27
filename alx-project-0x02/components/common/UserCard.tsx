// components/common/UserCard.tsx
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, email, address }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
          <div>
            <h2 className="text-xl font-bold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-600">ID: {id}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Email</h3>
            <p className="text-gray-800">{email}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">Address</h3>
            <p className="text-gray-800">
              {address.street}, {address.suite}
              <br />
              {address.city}, {address.zipcode}
            </p>
          </div>
        </div>

        <div className="mt-6 flex space-x-3">
          <button className="flex-1 bg-blue-100 text-blue-700 hover:bg-blue-200 font-medium py-2 px-4 rounded-lg transition-colors">
            View Profile
          </button>
          <button className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium py-2 px-4 rounded-lg transition-colors">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
