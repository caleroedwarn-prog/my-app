import useStore from "../store/Store1";

function Dashboard(){

    const user = useStore((state) => state.user);
    const logout = useStore((state) => state.logout);

    return(
        <div>
            <h2> Dashboard</h2>

            <h3>Welcome {user}</h3>

            <button onClick={logout}>
                Logout
            </button>
        </div>
    );
}
export default Dashboard;