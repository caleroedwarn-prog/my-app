function FormExample(){
    function handleSubmit(e){
        e.preventDefault();
        console.log("Form submitted");
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
        <button onDoubleClick={() => alert("I am dobule clicked")}>Double Click me</button>
        </>
    );
}
export default FormExample;
// Form submit Prevent default.
// Double Click