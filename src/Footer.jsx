import {TopFooterSection} from './TopFooterSection'
export const Footer =() =>{
    return(
        <footer className="">

          {/* top footer section  */}
          <div className="w-full flex flex-col justify-evenly items-center bg-gray-700 sm:flex-row">
            <TopFooterSection icon={"fa-solid fa-location-dot"} title={"Find Us"} text={"Jessore,Khulna"} link={"https://www.google.com/maps/place/Tejrol/@23.2686219,89.2486006,17z/data=!3m1!4b1!4m6!3m5!1s0x39ff05e7412e51eb:0xfdddfe9744d43552!8m2!3d23.2686219!4d89.2511755!16s%2Fg%2F11v6st5z7v?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"}/>
            <TopFooterSection icon={"fa-solid fa-phone"} title={"Contact Us"} text={"+8801724953889"}  link="tel:+8801724953889"/>
            <TopFooterSection icon={"fa-solid fa-envelope"} title={"Mail Us"} text={"mehedihassan6838@gmail.com"} link="mailto:mehedihassan6838@gmail.com"/>
          </div>

          {/* bottom footer section  */}
          <div className='w-full bg-gray-800 text-gray-400 text-center p-2 h-16 flex justify-center items-center'>
              <p>© {new Date().getFullYear()} World Info. All rights reserved.</p>

          </div>

        </footer>
    )
}