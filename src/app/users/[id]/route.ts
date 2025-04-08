//dynamic routing for each user  (dynamic route handler)
import { users } from "../route";

export async function GET(_request: Request, {params} : {params : {id: string}}){
    const {id} = params;
    const user = users.find((user) => user.id === parseInt(id));  //finding individual user
    return Response.json(user);        //returns individual user with his id and name
}