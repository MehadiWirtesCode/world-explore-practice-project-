import { About } from "./About"
import {Link} from 'react-router-dom'
export const Home =() =>{

    return(

        <main className="w-full flex flex-col justify-center items-center min-h-screen">

            {/* hero section */}
            <div className="w-full py-10 px-5 flex flex-col-reverse sm:flex sm:flex-row justify-between items-center lg:w-[80%]">

                {/* left content */}
                <div className="w-full flex flex-col gap-8 lg:w-1/2">
                    <h1 className="text-3xl font-bold text-gray-200">Explore the world,<br />one Country at a time.</h1>
                    <p className="text-gray-400">Discover the history,culture and beauty of evry nation.Sort,search and filter through countries to find ther details you need</p>
                    <Link to="/Country" className="text-center text-gray-400 border-[1px] w-50 p-2 rounded-3xl hover:bg-gray-800 active:bg-gray-800">Start Exploring <i class="fa-solid fa-arrow-right pl-2"></i></Link>
                </div>


                {/* right content */}
                <div className="w-full flex justify-center items-center lg:w-1/2">
                    <img src="/images/hero_section_image.jpg" alt="hero section image"/>
                </div>

            </div>
            {/* ------------------------ */}
           
           {/* about section */}
           <About/>

        </main>

    )
}