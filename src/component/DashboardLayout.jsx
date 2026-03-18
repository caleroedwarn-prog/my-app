import { Outlet, Link } from "react-router-dom";

function DashboardLayout() {
    return(
        <div style={{display:"block", gap:"20px"}}>
            <div style={{gap:"300px"}}>
                <h3>Dashboard Menu</h3>
                <Link to= "profile">Profile</Link>
                <Link to="setting">Settings</Link>
                <Link to="stats">Stats</Link>
                <Link to="user">Users</Link>
            </div>
            <Outlet />
        </div>
    );
}
export default DashboardLayout