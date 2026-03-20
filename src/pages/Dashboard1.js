import useStores from "../store/Store1";

function Dashboard(){

    const user = useStores((state) => state.user);
    const logout = useStores((state) => state.logout);

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