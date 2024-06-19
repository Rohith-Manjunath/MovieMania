import React from "react";
// export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded hover:bg-blue-500"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
