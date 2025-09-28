import { useEffect, useState } from "react";
import { axiosInstances } from "../api/axiosInstances";
import { Loader } from "../Loader";
import { CountryCard } from "../CountryCard";
import { CountryHeader } from "../Sections/CountryHeader";
import { Pagination } from "../Sections/Pagination";
import { SearchError } from "../Sections/SearchError";

export const Country = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [search,setSearch] = useState("");
  const [sortOrder,setSortOrder] = useState("");
  const [region,setRegion] = useState("all");
  const [currentPage,setCurrentPage] = useState(1);
  const cardPerPage = 8;

//  API CALL
  useEffect(() => {
    setLoading(true);
    axiosInstances
      .get("/all?fields=name,population,region,capital,flags,cca3")
      .then((res) => {
        setLoading(false);
        setCountry(res.data);
      })
      .catch((err) => console.log("error fetching country data.", err));

  }, []);

  if (isLoading) return <Loader />; //Loader animation

  const lastCardIndex = currentPage * cardPerPage;
  const firsCardIndex = lastCardIndex - cardPerPage;

//  Search filtering
  let filteredCountries = country.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()));

//  Region filter 
if(region != "all"){
    filteredCountries = filteredCountries.filter(c => c.region.toLowerCase() === region.toLowerCase());
}

//  ASC or Desc order
 if(sortOrder ==="asc"){
    filteredCountries.sort((a,b) => a.name.common.localeCompare(b.name.common));

 }else if(sortOrder === "desc"){
    filteredCountries.sort((a,b) => b.name.common.localeCompare(a.name.common));
 }

  let currentCountries = filteredCountries.slice(firsCardIndex,lastCardIndex)

  return (
    <section className="min-h-screen ">
      <div className="flex flex-col md:flex-row md:justify-evenly md:items-center gap-3 p-4 mt-5">
        <CountryHeader search={search} setSearch={setSearch} setSortOrder={setSortOrder} region={region} setRegion={setRegion}/>
      </div>

      {/* card section */}
      <div className="w-full flex justify-center items-center">
        {
          currentCountries.length === 0?(<SearchError />):(
           <div className="max-w-[1200px] px-4 grid gap-8 grid-cols-1 sm:p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <CountryCard country={currentCountries} />
        </div>
          )
        }

      </div>
      {/* --------------------- */}
      
      <div className="flex justify-center items-center p-4">
          <Pagination totalCountries={filteredCountries.length} cardPerPage={cardPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </section>
  );
};
