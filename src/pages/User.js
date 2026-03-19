import { useEffect, useState } from "react";
function Users(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
    useEffect(() => {
        async function getUsers(){
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUsers(data)
        }
        getUsers();
    }, []);
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