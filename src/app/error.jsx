import React from "react";
import Head from "next/head";
import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Head>
        <title>Error | Your App Name</title>
        <meta name="description" content="An error occurred on the page." />
      </Head>

      <div className="text-center max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg text-gray-600 mb-6">
          {error?.message || "An error occurred on the page."}
        </p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 mr-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Try again
        </button>
        <Link href="/">
          <a className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
            Go back to homepage
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
