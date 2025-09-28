export const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      {/* Outer Spinner */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-gray-700 border-t-blue-500 animate-spin"></div>
        <div className="absolute inset-0 rounded-full border-4 border-gray-600 border-t-purple-500 animate-spin [animation-duration:1.25s]"></div>
        <div className="absolute inset-0 rounded-full border-4 border-gray-500 border-t-pink-500 animate-spin [animation-duration:1.5s]"></div>
      </div>
    </div>
  );
};

