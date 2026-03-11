import { useNavigate } from "react-router-dom";
function Logins({ setIsLoggedIn }){

    const navigate = useNavigate();

    function handleLogin(){

        setIsLoggedIn(true);
        navigate("/dashboard");
    };
    return ( 
    <>
    <h2>Login Page</h2>

    <button onClick={handleLogin}>
        Login
    </button>
    </>
    );
}
export default Logins;