"use client";   //converts server component to client component so you can use hooks (useState, useEffect, useRouter)
import { useRouter } from "next/navigation";

export default function About(){
    const router = useRouter();
    return(
        <div>
             <h1>About Us</h1>
             <br/>
             <button onClick={()=> router.push("/")} className="rounded-md bg-blue-500 hover:bg-green-500 p-2 ml-170 w-20">Home</button>

        </div>
       
    ) 
}