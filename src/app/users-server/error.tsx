"use client"   //converts server components into client components
import { useEffect } from "react"
export default function Error ({error} : Readonly<{error: Error}>){
    useEffect(()=>{
        console.log(error);
    }, [error]);    //runs error on mount + whenever error changes

    return(
        <div className="flex items-center justify-center h-screen">
            <div className="text-2xl text-red-500">Error fetching users data</div>
        </div>
    )

}