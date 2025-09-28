import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  return (
    <>
      {country.map((item) => {
        const { flags, name, population, region, capital, cca3 } = item;
        return (
          <div
            key={cca3}
            className="p-[1px] rounded-2xl bg-gradient-to-r from-[#b0afb0] via-blue-400 to-[#121013]
                     hover:from-blue-600 hover:via-blue-600 hover:to-blue-600 active:from-blue-600 active:via-blue-600 active:to-blue-600"
          >
            <div className="p-4 h-full w-full flex flex-col rounded-2xl gap-3 bg-gray-800">
              <img
                src={flags.svg}
                alt={flags.alt}
                className="h-1/2 object-center object-contain rounded-2xl"
              />

              <p className="text-3xl font-bold text-gray-300">{name.common}</p>
              <p className="text-gray-300">
                Population: <span>{population.toLocaleString()}</span>
              </p>
              <p className="text-gray-300">
                Region: <span>{region}</span>
              </p>
              <p className="text-gray-300">
                Capital: <span>{capital?.[0] || "N/A"}</span>
              </p>
              <NavLink to={`/CountryDetails/${name.common}`}>
              <button className="text-sm flex justify-center items-center w-full
                    text-gray-200 border-[1px] border-gray-300 px-1 py-2
                     bg-black rounded-3xl hover:bg-purple-600 active:bg-purple-600">
                Read More <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
              </NavLink>

            </div>
          </div>
        );
      })}
    </>
  );
};
