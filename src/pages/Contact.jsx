import { useState } from "react"

export const Contact =()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [isSubmit,setSubmit] = useState(false);
    const formHandler =(e)=>{
        e.preventDefault();
        
        setSubmit(true);
        setName("");
        setEmail("");
        setMessage("");

        setSubmit(false);

    }
    return (
           <div className="w-full flex justify-center p-4 items-center min-h-screen">
             
             <form action="https://api.web3forms.com/submit" method="POST" onSubmit={formHandler}  className="w-full md:w-[70%] lg:w-[40%] border-[1px] rounded-2xl border-[#b0afb0] flex flex-col gap-10 justify-center items-center p-10">
                <input type="hidden" name="access_key" value="13d3d3ec-16c1-43ba-9855-ae744414f68c"></input>
                <input onChange={(e)=>setName(e.target.value)} value={name} className="p-2 border border-[#b0afb0] w-full focus:border-blue-600 outline-none rounded-md" type="text" placeholder="enter your name" required/>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className="p-2 border border-[#b0afb0] w-full focus:border-blue-600 outline-none rounded-md" type="email" placeholder="enter your email" required/>
               <textarea  onChange={(e)=>setMessage(e.target.value)} value={message} className="p-2 border border-[#b0afb0] w-full focus:border-blue-600 outline-none rounded-md h-20" name="message" id="message" placeholder="enter your message">
                </textarea>

                <button className="w-full text-center rounded-md bg-blue-500 hover:bg-blue-700 active:bg-blue-700 p-2" type="submit"><i className="mr-1 fa-solid fa-envelope"></i>{isSubmit?"Submitting...":"Submit"}</button>
                <button className="w-full text-center rounded-md bg-red-500 hover:bg-red-700 active:bg-red-700 p-2" type="reset"><i className="mr-1 fas fa-redo"></i>Clear</button>
             </form>

           </div>
    )
}