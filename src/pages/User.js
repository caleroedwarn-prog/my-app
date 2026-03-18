import { useEffect } from "react";
function Users(){
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(data => {
            console.log(data);
        });
    }, []);
    return (
        <h3>User page</h3>
    );
}
export default Users;