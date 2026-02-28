import PasswordToggle  from "./PasswordToggel";
import Counter from './ExeciseOne';
import PasswordCheck from "./PasswordCheck";
import ClickExample from "./EventHandlers";
import Example from "./EventHandler1";
import InputExample from "./EventHandler2";
import FormExample from "./EventHandler3";
import KeyExample from "./EventHandler4";
import HandleClick from "./E-Exercise1";
import HandleAlert from "./E-Exercise2";
import HandleClicks from "./E-Exercise3";
import ConditionalRendering from "./CR-exercise1";
function App() {
  return (
    <div>
      <Counter />
      <PasswordToggle />
      <PasswordCheck />
      <br />
      <ClickExample />
      <Example /><br />
      <InputExample />
      <FormExample />
      <br />
      <KeyExample /><br />
      <HandleClick /><br />
      <HandleAlert /><br />
      <HandleClicks />
      <ConditionalRendering />
    </div>
  );
}
export default App;
