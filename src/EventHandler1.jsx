function Example() {
  function Clickable(number) {
    console.log(number);
  }
  return (
    <>
      <button onClick={() => Clickable(10)}>Send 10</button>
    </>
  );
}
export default Example;
//Passing Arguement