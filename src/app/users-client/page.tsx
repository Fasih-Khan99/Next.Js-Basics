"use client"   //converts server components into client components
//In client side rendering, we have to manually manage the loading and error states using useEffect hook
import { useState, useEffect } from "react";

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}

export default function UsersClient(){
    const [users, setUsers] = useState<User []>([]);    //User array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");   //empty string

    useEffect(()=> {
        async function fetchUsers(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");   //fetch data from this link
                if(!response.ok) throw new Error("Failed to fetch users");  //if successful
                const data = await response.json();
                setUsers(data);    //update user data
            } catch(err){               
                setError("Failed to fetch users");
                if(err instanceof Error){                      //if error found
                    setError(`Failed to fetch users: ${err.message}`);   //update error state
                }
            } finally {
                    setLoading(false);    //when all done set loading to false
            }
        }
        fetchUsers();
    }, [] );   //runs only on mount



    if(loading) return <div>Loading...</div>
    if(error) return <div>{error}</div>

    return(
        <>
        <h1 className="text-center mb-10 mt-10 text-xl">Fetching Data from JsonPlaceholder (Client Component)</h1>
        <ul className="space-y-4 p-4">
            {users.map((user) => (
                <li key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                    {user.name} ({user.email})
                </li>
            ))}
        </ul>
        </>
       
    );
}
