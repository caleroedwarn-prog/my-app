import { useCallback, useState} from "react";
import Button from "./Button";
function Apps() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const increment = useCallback(() => {
      setCount((prev) => prev + 1)
    }, []);
  
  return (
    <div>
      <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
      />
      <h2>Count: {count}</h2>
      <Button handleClick={increment}>Increase</Button>
    </div>
  );
}
export default Apps;