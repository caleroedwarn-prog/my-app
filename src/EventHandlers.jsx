function ClickExample(){
    function handleClick(){
        alert("button clicked");
    }
    return( 
    <>
    <button type="button" onClick={handleClick}>Me</button>
    </>
);
}
export default ClickExample;