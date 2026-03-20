import useStore from "../store/Store";
function About() {
    const count = useStore((state) => state.count);
    const increase = useStore((state) => state.increase)
    const decrease = useStore((state) => state.decrease)
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

    </>
    );
}
export default About;