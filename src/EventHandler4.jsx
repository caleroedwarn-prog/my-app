function KeyExample(){
    function handleKeyDown(e){
        if(e.key === "Enter"){
            alert("You pressed Enter")
        }else{
            if(e.key === "Shift"){
                alert("You pressed Shift");
            }
        }
    }
    return(
        <>
        <input onKeyDown={handleKeyDown} />
        </>
    );
}
export default KeyExample;