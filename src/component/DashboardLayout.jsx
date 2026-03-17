import { Outlet, Link } from "react-router-dom";

function DashboardLayout() {
    return(
        <div style={{display:"flex", gap:"20px"}}>
            <div>
                <h3>Dashboard Menu</h3>
                <Link to= "profile">Profile</Link>
                <Link to="setting">Settings</Link>
                <Link to="stats">Stats</Link>
            </div>
            <Outlet />
        </div>
    );
}
export default DashboardLayout;