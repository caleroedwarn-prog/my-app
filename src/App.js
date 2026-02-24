import "./App.css";
import Greeting from "./Greetings";

const name = "Emmanuel";
const age = 19;
const Uni = "University of Buea";
function App() {
  return (
    <div>
      <Greeting />
      <pre>
        <h1>Hello world I am {name}</h1>
        <p>
          I am {age} years old and will be turning {age + 1} this june 6 2026
        </p>
        <p>From the {Uni} Cameroon</p>
        <p>This is my first real React Lesson</p>
      </pre>
    </div>
  );
}

export default App;
