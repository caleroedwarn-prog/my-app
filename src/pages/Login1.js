import useStores from "../store/Store1";

function Signin() {
    const signin = useStores((state) => state.login);

    return(
        <>
        <h2>Login page</h2>

        <button onClick={() => signin("Emmanuel")}>
            Login
        </button>
        </>
    );
}
export default Signin;