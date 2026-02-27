function InputExample(){
    function handleChange(event){
        console.log(event.target.value);
    }
    return(
        <>
        <input onChange={handleChange} />
        </>
    );
}
export default InputExample;

// Onchange