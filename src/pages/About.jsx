import countryData from "../api/countryApi.json";
export const About = () => {
  return (
    // card container
    <div className="flex flex-col w-full justify-center items-center pb-5">
      <h2 className="px-2 text-xl sm:text-3xl sm:p-0 font-bold text-gray-200 text-center mt-10">
        Here are some Interesting Facts <br />
        we're proud of
      </h2>
      <div className="grid grid-cols-1 mt-5 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 sm:px-10 max-w-[1200px]">
        {countryData.map((item) => {
          return (
            <div
              key={item.id}
              className="p-1 rounded-3xl bg-gradient-to-r from-[#b0afb0] via-blue-400 to-[#121013]
             hover:from-green-400 hover:via-green-500 hover:to-green-700
             transition-all duration-500 ease-in-out shadow-2xl hover:shadow-3xl">
              <div
                className="relative w-full h-full rounded-3xl bg-gradient-to-tr from-[#0c0a0f]/70 via-[#1f1b25]/70 to-[#0c0a0f]/70 
                  backdrop-blur-md text-gray-300 flex flex-col gap-4 p-6 overflow-hidden transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
                
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-green-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-blue-500 rounded-full opacity-10 blur-2xl"></div>

                
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-100 drop-shadow-lg">
                  {item.name}
                </h1>

                
                <p className="text-gray-400">
                  Capital:{" "}
                  <span className="text-gray-200 font-medium">
                    {item.capital}
                  </span>
                </p>

                <p className="text-gray-400">
                  Population:{" "}
                  <span className="text-gray-200 font-medium">
                    {item.population.toLocaleString()}
                  </span>
                </p>

                <p className="text-gray-400">
                  Interesting Fact:{" "}
                  <span className="text-gray-200 font-medium">
                    {item.interestingFact}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
