import { NavLink } from "react-router-dom"

export const NavBar =() =>{

    return(
        <nav className="w-full h-16 bg-gray-800 flex items-center justify-around text-white text-lg font-semibold px-8">
        
          <div>
            <NavLink to="/"><h1 className="text-amber-600 font-bold text-3xl italic">World Info</h1></NavLink>
          </div>

           <ul className="md:flex space-x-8 flex-row hidden">
            <li className="hover:text-blue-400"><NavLink className={({isActive})=>isActive?"text-blue-400 underline":""} to="/">Home</NavLink></li>
            <li className="hover:text-blue-400"><NavLink className={({isActive})=>isActive?"text-blue-400 underline":""} to="/About">About</NavLink></li>
            <li className="hover:text-blue-400"><NavLink className={({isActive})=>isActive?"text-blue-400 underline":""} to="/Country">Country</NavLink></li>
            <li className="hover:text-blue-400"><NavLink className={({isActive})=>isActive?"text-blue-400 underline":""} to="/Contact">Contact</NavLink></li>
           </ul>

        </nav>
    )
}