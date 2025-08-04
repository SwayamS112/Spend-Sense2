import React from 'react';

const Dashboard = ({ name, email }) => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p><strong>Username:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      {/* <p><strong>ID:</strong> {id}</p> */}
      {/* Add more info as needed */}
    </div>
  );
};

export default Dashboard;
