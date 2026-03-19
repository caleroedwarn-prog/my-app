import { useEffect, useState } from "react";
import axios from "axios";
import api from "../api/api";
function Users(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        async function getUsers(){

            try{
            const res = await  api.get("/users");

            setUsers(res.data);

        }catch(err){
            setError("Failed to load users");
        }finally{
            setLoading(false);
        }
    }
    getUsers();
}, [])

    if(loading){
        return <h2>Loading user ...</h2>
    }
    if (error){
        return <h2>{error}</h2>
    }
    return (
        <>
        <h3>User page</h3>
        { users.map(user => (
            <p key={user.id}>
            { user.name }
            <br />
            {user.email}
            </p>
        ))}
        </>
    );
}
export default Users;