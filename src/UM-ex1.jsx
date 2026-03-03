import {useState, useMemo} from "react";

function DoubleCalculation() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
       const double = useMemo(() => {
        console.log("Calculating...")
        return count * 2;
        }, [count]);

    return (
      <>
        <input
          type="text"
          value={text}
          placeholder="type in something.."
          onChange={(e) => setText(e.target.value)}
        />
        <h2>Counter : {count} </h2>
        <h2>Double : {double} </h2>

        <button onClick={() => setCount(prev => prev + 1)}>Count</button>
      </>
    );
}
export default DoubleCalculation;