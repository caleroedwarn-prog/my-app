import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Homes from "./pages/Homes";
import About from "./pages/About";
import Logins from "./pages/Login";
import Navbar from "./component/Navbar";
import ProtectedRoute from "./component/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Layout from "./component/Layout";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <br />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Homes />} />
          <Route path="about" element={<About />} />     
          <Route path="logins" element={<Logins setIsLoggedIn={setIsLoggedIn} />} />
         <Route 
         path="dashboard"
         element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </ProtectedRoute>
         } />
        </Routes>
      </BrowserRouter>
      <br />
    </div>
  );
}
export default App;
