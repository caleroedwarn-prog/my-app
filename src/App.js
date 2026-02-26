import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  let message;
  if (count < 50) {
    message = "Low";
  } else if (count <= 150) {
    message = "Medium";
  } else {
    message = "high";
  }
  const handler = () => {
    setCount((prev) => prev + 1);
  };
  const handler2 = () => {
    if (count < 1) {
      setCount(0);
    } else {
      setCount((prev) => prev - 1);
    }
  };
  const handler3 = () => {
    setCount(0);
  };
  return (
    <div className="container">
      <h2>Counter: {count}</h2>
      <p id="message">level: {message}</p>
      <button onClick={handler}>Increase</button>
      <button onClick={handler2}>decrease</button>
      <button onClick={handler3}>Reset</button>
    </div>
  );
}
export default App;
