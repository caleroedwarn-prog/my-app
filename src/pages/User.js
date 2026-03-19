import { useEffect, useState } from "react";
function Users(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {

        async function getUsers(){
            try{
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();
                setUsers(data);
            }catch(err){
                setError("Failed to Load Users")
            }finally{
                setLoading(false);
            }
        }
        getUsers();
    },[])

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