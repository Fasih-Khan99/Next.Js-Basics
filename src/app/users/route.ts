export const users = [
    { id: 1, name: "Ali Ahmed"},     //An (list) array of users and exports it so it can be used outside the file.
    { id: 2, name: "John Felix"},
];

//GET()	Send back all users
//POST(request)	Receive a new user data, add it to the list, and return it

export async function GET(){
    // This defines a GET API function.
    // When someone sends a GET request to this API, it will:
    // Return the list of users (in JSON format)
    // Like sending the full list back to the browser/app
    return Response.json(users);    
}

export async function POST(request: Request){   //POST API function that accepts a request, POST is used to send new data to server.
    const user = await request.json();      //It reads data sent in the request body (like { name: "New Name" })
    // The await waits for the data to be fully received and turned into a JS object.

    const newUser = {              // It creates a new user object with:
        id: users.length + 1,      // A new ID (based on how many users are already there), already 2 users there, so new id = 3
        name: user.name,           // The name received in the request
    };
    users.push(newUser);    //Adds the new user to the users list (temporarily in memory)

    return new Response(JSON.stringify(newUser), {        // Sends back a response:
        headers: {                                        // With the new user in JSON format
            "Content-Type" : "application/json",          // Content-Type: application/json tells the browser it's JSON
        },
        status: 201,                                      // status: 201 means "Created Successfully"
    });

}