import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav style={{display: "flex", gap: "10px"}}>
            <Link to ="/">Home</Link> |
            <Link to="/about">About</Link> |
            <Link to = "/logins">Login</Link>
        </nav>
    );
}
export default Navbar