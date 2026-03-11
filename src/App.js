import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Homes from "./pages/Homes";
import About from "./pages/About";
import Logins from "./pages/Login";
import Navbar from "./component/Navbar";
import ProtectedRoute from "./component/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <br />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/about" element={<About />} />     
          <Route path="/logins" element={<Logins setIsLoggedIn={setIsLoggedIn} />} />
         <Route 
         path="dashboard"
         element={isLoggedIn ? <Dashboard /> : <Logins setIsLoggedIn={setIsLoggedIn} />}/>
        </Routes>
      </BrowserRouter>
      <br />
    </div>
  );
}
export default App;
