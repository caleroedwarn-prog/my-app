import PasswordToggle  from "../PasswordToggel";
import Counter from '../ExeciseOne';
import PasswordCheck from "../PasswordCheck";
import ClickExample from "../EventHandlers";
import Example from "../EventHandler1";
import InputExample from "../EventHandler2";
import FormExample from "../EventHandler3";
import KeyExample from "../EventHandler4";
import HandleClick from "../E-Exercise1";
import HandleAlert from "../E-Exercise2";
import HandleClicks from "../E-Exercise3";
import ConditionalRendering from "../CR-exercise1";
import Rendering from "../CR-Exercise2";
import Toggle from "../CR-Exercise3";
import ToDoList from "../Keys-&-Lists-ToDoList";
import {useState, useEffect} from "react";
import Component from "../component-live-cycle";
import Examples from "../Ex1-CLC";
import Reference from "../Ex2-CLC";
import MemoExample from "../UseMemo";
import DoubleCalculation from "../UM-ex1";
import Apps from "../UC-ex1";
import AppTest from "../Controled";
import DisableButton from "../C-DisabledButton";
import LoginForm from "../SimpleLogin";
import LoginForms from "../ShowLoginMsg";
import Login from "../LoginExercise"
import SignUp from "../MultipleInputForm";
import SignUps from "../ExerciseLogin";
import ButtonSignUp from "../DisableButtonLogin";
import  LiveValidation from "../LiveFormValidation";
import FormExercise from "../Show-PasswordLoding-ValidationForm";
import CustomHookForm  from "../CustomHooksLogin";
import Home from "../pages/Home";
import Home1 from "../pages/Home1";
import Home2 from "../pages/Home2";


function  Homes(){
    const [show, setShow] = useState(true);
    const [count, setCount] = useState(0);
    useEffect(() => {
      console.log("count changed to", count);
    }, [count]);
    const names = ["Emmanuel", "Teniola", "React", "JavaScript"];
    const users = [
      { id: 1, name: "Emmanuel" },
      { id: 2, name: "Teniola" },
    ];
    const items = [
      { id: 1, title: "Learn Jsx" },
      { id: 2, title: "Learn React" },
      { id: 3, title: "Learn List" },
      { id: 4, title: "Learn CSS" },
      { id: 5, title: "Learn JavaScript" },
    ];
    return( 
        <>
    <h2>Home page</h2>
        <Home2 /> 
        <br />
        <Home1 />
        <br />
        <h1>My App</h1>
        <Home />
        <br />
        <br />
        <CustomHookForm />
        <br />
        <FormExercise />
        <br />
        <LiveValidation />
        <br />
        <ButtonSignUp />
        <br />
        <SignUps />
        <br />
        <SignUp />
        <br />
        <Login />
        <br></br>
        <LoginForms />
        <br></br>
        <LoginForm />
        <br></br>
        <DisableButton />
        <br></br>
        <AppTest />
        <br></br>
        <Apps />
        <br></br>
        <DoubleCalculation />
        <Reference />
        <Counter />
        <PasswordToggle />
        <PasswordCheck />
        <br />
        <ClickExample />
        <Example />
        <br />
        <InputExample />
        <FormExample />
        <br />
        <KeyExample />
        <br />
        <HandleClick />
        <br />
        <HandleAlert />
        <br />
        <HandleClicks />
        <ConditionalRendering />
        <br />
        <Rendering />
        <Toggle />
        <ul>
          {names.map((names, index) => (
            <li key={index}>{names}</li>
          ))}
        </ul>
        <ul>
          {users.map((users) => (
            <li key={users.id}>{users.name}</li>
          ))}
        </ul>
        <ul>
          {items.map((items) => (
            <li key={items.id}>
              {items.title}
              <button> ✅</button>
            </li>
          ))}
          ;
        </ul>
        <br />
        <ToDoList />
        <p>Counter: {count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Toggle</button>
  
        <Component />
  
        <button onClick={() => setShow(!show)}>toggle</button>
        {show && <Counter />}
        <Examples />
        <MemoExample number={5} />
        </>
    );

}
export default Homes