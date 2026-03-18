import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Homes from "./pages/Homes";
import About from "./pages/About";
import Logins from "./pages/Login";
import Navbar from "./component/Navbar";
import ProtectedRoute from "./component/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Layout from "./component/Layout";
import DashboardLayout from "./component/DashboardLayout";
import Profile from "./pages/Profile";
import Settings from "./pages/Setting";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";
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
          <Route
            path="logins"
            element={<Logins setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Settings />} />
            <Route path="stats" element={<Stats />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <br />
    </div>
  );
}
export default App;
