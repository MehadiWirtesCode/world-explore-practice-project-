import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { axiosInstances } from "../api/axiosInstances";
import { Loader } from "../Loader";
import { Country } from "../pages/Country";
export const CountryDetails =() =>{
    
    const [isLoading,setLoading] = useState(false);
    const [country,setCountry] =useState();

    const params = useParams();

    useEffect(()=>{
        
        setLoading(true);
        axiosInstances.get(`/name/${params.id}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
        .then((res) =>{
                setCountry(res.data[0])
                setLoading(false)
        }) 
        .catch((err) => console.log("error fetching CountryDetails data",err))
    
    },[params.id]);
    
    if(isLoading) return <Loader />
    return (

        <div className=" p-5 md:p-0 flex justify-center items-center min-h-screen">

     {
        country && (
             
            <div className="w-full h-[70%] bg-gradient-to-r from-[#17011a] via-[#401046] to-[#17011a] p-5 flex md:flex-row flex-col justify-evenly items-center">
                <div className="p-5 md:w-[30%]">
                  <img src={country.flags.svg} alt={country.flags.alt} className="object-center object-cover" />
                </div>

                <div className="flex flex-col gap-5">
                    <p className="text-2xl font-bold text-gray-200">{country.name.official}</p>
                    <p className="text-gray-400">Native Name:{" "}      <span className="text-gray-100">{Object.keys(country.name.nativeName).map((key)=> country.name.nativeName[key].common).join(", ")}</span></p>
                    <p className="text-gray-400">Population:{" "}       <span className="text-gray-100">{country.population.toLocaleString()}</span></p>
                    <p className="text-gray-400">Region:{" "}           <span className="text-gray-100">{country.region}</span></p>
                    <p className="text-gray-400">Sub Region:{" "}       <span className="text-gray-100">{country.subregion}</span></p>
                    <p className="text-gray-400">Capital:{" "}          <span className="text-gray-100">{country.capital}</span></p>
                    <p className="text-gray-400">Top Level Domain:{" "} <span className="text-gray-100">{country.tld}</span></p>
                    <p className="text-gray-400">Language:{" "}         <span className="text-gray-100">{Object.keys(country.languages).map((key)=> country.languages[key]).join(", ")}</span></p>
                    <p className="text-gray-400">Currency:{" "}         <span className="text-gray-100">{Object.keys(country.currencies).map((key) => country.currencies[key].name).join(", ")}</span></p>

                </div>
            </div>
        )}
    </div>
 )
}