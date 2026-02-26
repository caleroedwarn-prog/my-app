import "./Password.css";
import { useState } from "react";

function PasswordToggle() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="content">
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={() => setShowPassword((prev) => !prev)}>
        toggle
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}
export default PasswordToggle;
