//In server side rendering, the loading and error states are handled automatically by Next.js
type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}

export default async function UsersServer(){
    await new Promise((resolve) => setTimeout(resolve, 2000))   //content loads after 2 secs (loading.tsx will appear for 2 sec)
    //fetch data from this link (change this url if you want to show error.tsx content)
    const response = await fetch("https://jsonplaceholder.typicode.com/users");  
    const users = await response.json();




    return(
        <>
        <h1 className="text-center mb-10 mt-10 text-xl">Fetching Data from JsonPlaceholder (Server Component)</h1>
        <ul className="space-y-4 p-4">
            {users.map((user: User) => (
                <li key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                    {user.name} ({user.email})
                </li>
            ))}
        </ul>
        </>
       
    );
}