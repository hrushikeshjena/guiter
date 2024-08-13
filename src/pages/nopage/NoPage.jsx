import React from 'react';
import { Link } from 'react-router-dom';

function NoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-700 mb-8">Sorry, the page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NoPage;
