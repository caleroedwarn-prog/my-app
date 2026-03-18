import { useEffect, useState } from "react";
function Users(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(data => {
            console.log(data);
            setUsers(data)

        });
    }, []);
    return (
        <>
        <h3>User page</h3>
        { users.map(user => (
            <p key={user.id}>
            { user.name }
            {user.email}
            </p>
        ))}
        </>
    );
}
export default Users;