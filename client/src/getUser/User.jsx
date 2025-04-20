import React from 'react';

const User = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col bg-gray-100">
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 ease-in-out mb-4">
        Add User
      </button>
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full border-collapse border border-gray-300 shadow-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 border border-gray-300 text-left">S.No.</th>
              <th className="px-6 py-3 border border-gray-300 text-left">Name</th>
              <th className="px-6 py-3 border border-gray-300 text-left">Email</th>
              <th className="px-6 py-3 border border-gray-300 text-left">Address</th>
              <th className="px-6 py-3 border border-gray-300 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 transition duration-300 ease-in-out">
              <td className="px-6 py-4 border border-gray-300">1</td>
              <td className="px-6 py-4 border border-gray-300">Name</td>
              <td className="px-6 py-4 border border-gray-300">Email</td>
              <td className="px-6 py-4 border border-gray-300">Address</td>
              <td className="px-6 py-4 border border-gray-300">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 ease-in-out">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
