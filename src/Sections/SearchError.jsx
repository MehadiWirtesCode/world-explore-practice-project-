export const SearchError = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[60vh]">
      <img
        src="/public/images/no_data.jpeg"
        alt="No countries"
        className="w-32 h-32 mb-4"
      />
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        No Countries Found
      </h2>
      <p className="text-gray-500 text-center max-w-sm">
        Sorry, we couldn't find any countries matching your search or filter.
      </p>
    </div>
  );
};
