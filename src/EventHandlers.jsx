function ClickExample(){
    function handleClick(){
        alert("button clicked");
    }
    return( 
    <>
    <button type="button" onClick={handleClick}>Me</button>

    <button onClick={() => alert("I have been clicked")}>Click</button>

    <button onClick={() => handleClick(5)}>Click</button>
    </>
);
}
export default ClickExample;
// All the examples are seperated by a line
// example1 function handler
//example2 inline Arrow Function
// example3, Passing Arguments