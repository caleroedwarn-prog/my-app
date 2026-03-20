import useStore from "../store/Store";
import Signin from "./Login1";
import Dashboard1 from "./Dashboard1";

function About() {
    const count = useStore((state) => state.count);
    const increase = useStore((state) => state.increase)
    const decrease = useStore((state) => state.decrease)
    const isLoggedIn = useStore((state) => state.isLoggedIn)
    return (
        <>
    <h2>About Page</h2>

    <h1>Count : {count}</h1>

    <button onClick={increase}>
        add
    </button>
    <button onClick={decrease}>
        minus
    </button>

    {isLoggedIn ? <Dashboard1 /> : <Signin />}

    </>
    );
}
export default About;