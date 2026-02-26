import "./App.css";
import { useState } from "react";
// Number State
// Functional Update
// Boolean State
// Toggle
function App() {
  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: ""
  });
  
  return (
    <div>
      <h1>Counter: [{count}]</h1>
      <button onClick={() => setCount(count + 4410)}>Increase</button>

      <button onClick={() => setCount(count - 991)}>Decrease</button>

      <button onClick={() => setCount(prev => prev +  9)}>Increase</button><br /><br />

      <button onClick={() => setIsOpen(prev => !prev)}>toggle</button><br /><br />

      {isOpen && <p>Now Visible
        hello babe how are you <br /> doing i love you
        okay na
        </p>}
      <input 
        value = {name}
        onChange= {(e) => setName(e.target.value)}
      />
      <h2>Hello: {name}</h2>
    </div>
  );
}
export default App;
