import {useState} from "react";
import './passwordCheck.css';

function PasswordCheck(){
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
      <div className="main">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="confirmpassword"
          placeholder="ConfirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {password && confirmPassword && (
            <p
                style={{
                    color : password === confirmPassword ? "green" : "red"
                }}>
                {password === confirmPassword ? "Passwords match" : "passwords donot match"}
            </p>
        )};
        <button onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    );
}
export default PasswordCheck;