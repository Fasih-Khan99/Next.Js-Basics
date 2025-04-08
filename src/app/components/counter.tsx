"use client";   //Now server component is converted into client component
import { useState } from "react";   //By default it's a server component, so you can't use useState/useEffect
import { useAuth, useUser } from "@clerk/nextjs";

export const Counter = () => {
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    console.log("Counter Component");
    const [count, setCount] = useState(0);

    if (!isLoaded || !userId){    //you'll only see the count component if you're signed in
        return null;
    }

    return(
        <button onClick={()=> setCount(count+1)}>Clicked {count} times</button>
    )

}