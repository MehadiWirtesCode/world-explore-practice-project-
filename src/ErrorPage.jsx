import {Link} from "react-router-dom";
export const ErrorPage = () => {

  return (
      <div className="flex flex-col  items-center justify-center min-h-screen bg-gray-950 px-6">

         <h1 className="text-9xl font-extrabold text-red-500 mb-6">404</h1>

         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-500">
           Page Not Found
         </h2>

         <p className="text-white mb-8 text-center max-w-md">
           Oops! The page you are looking for does not exist. It might have been
           removed or the URL is incorrect.
         </p>

         <Link
           to="/"
           className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
         >
           Go Back Home
         </Link>

         <p className="mt-10 text-white text-sm">
           © 2025 MySite. All rights reserved.
         </p>
        </div>
    )
};
