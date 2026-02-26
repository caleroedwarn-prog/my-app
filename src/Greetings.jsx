function Greeting(props) {
    const time = "Night"
    return (
        <div>
            <h2>Good {props.time}, {props.name}</h2>
            <p>Continue mastering REACT 🚀</p>
        </div>
    )
}

export default Greeting;