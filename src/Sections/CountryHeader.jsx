export const CountryHeader =({search,setSearch,setSortOrder,region,setRegion})=>{

    return(
        <>
        {/* Search box */}
        <div className="relative w-full md:w-64">
          <input onChange={(e) => setSearch(e.target.value)} value={search}
            type="text"
            placeholder="Search"
            id="search"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800 text-gray-200 placeholder-gray-400 outline-none border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition"
          />
          <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 w-full md:w-auto justify-center">
          <button onClick={()=> setSortOrder("asc")} className="btn btn-outline">Ascending</button>
          <button onClick={()=> setSortOrder("desc")} className="btn btn-outline">Descending</button>
        </div>

        {/* Select */}
        <select className="select select-info text-gray-700 w-full md:w-auto" value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="all">All</option>
          <option value="asia">Asia</option>
          <option value="africa">Africa</option>
          <option value="antartica">Antartica</option>
          <option value="americas">America</option>
          <option value="oceania">Ocenia</option>
          <option value="europe">Europe</option>
         </select>
        </>
    )
}