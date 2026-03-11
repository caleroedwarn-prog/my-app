import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homes from "./pages/Homes";
import About from "./pages/About";
import Logins from "./pages/Login";
import Navbar from "./component/Navbar";
function App() {
  return (
    <div>
      <br />
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path ="/" element={<Homes />} />
        <Route path="/about" element={<About />} />
        <Route path="/logins" element={<Logins />} />
      </Routes>
      </BrowserRouter>
      <br />
    </div>
  );
}
export default App;
