import { Link, useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }){
    const navigate = useNavigate();
    function handleLogout(){
        setIsLoggedIn(false);
        navigate("/logins");
    }
    return(
        <nav style={{display: "flex", gap: "10px"}}>
            <Link to ="/">Home</Link> |
            <Link to="/about">About</Link> |
            {isLoggedIn && (
                <Link to = "dashboard">Dashboard</Link>
            )}
            {!isLoggedIn && (
                <Link to= "/logins">Login</Link>
            )}
            {isLoggedIn && (
                <button onClick={handleLogout}>Logout</button>
            )}
        </nav>
    );
}
export default Navbar