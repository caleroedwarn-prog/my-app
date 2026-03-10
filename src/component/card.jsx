function Card({ name, age, job }) {
    return(
        <div style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            width:"200px" 
        }}>
           <h3>{name}</h3> 
           <p>Age: {age}</p>
           <p>Job: {job}</p>
        </div>
    );
}
export default Card;