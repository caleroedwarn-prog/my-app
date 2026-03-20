import useStore from "../store/Store1";

function Signin() {
    const login = useStore((state) => state.login);

    return (
      <>
        <h2>Login page</h2>

        <button onClick={() => login("Emmanuel")}>Login</button>
      </>
    );
}
export default Signin;