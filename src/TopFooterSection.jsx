export const TopFooterSection =({icon,title,text,link}) =>{

    return(

        <div className="flex justify-evenly items-center py-2">
            <i  className={`${icon} aria-hidden="true" text-xl hover:text-amber-800 text-amber-600`}></i>

            <div className="px-2 text-gray-400">
                <p>{title}</p>
                <a href={`${link}`} className="hover:underline active:underline">{text}</a>  
            </div>
        </div>
       
    )
}