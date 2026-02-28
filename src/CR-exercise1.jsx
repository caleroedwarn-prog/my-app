import { useState } from "react";

function ConditionalRendering(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
      <>
      <p><strong>Exercise1 on Conditional Rendering</strong></p>
        <button type onClick={() => setIsLoggedIn((prev) => !prev)}>
          {isLoggedIn ? "logout" : "login"}
        </button>
        {isLoggedIn ? "Welcome Back" : "please Login"}
      </>
    );
}
export default ConditionalRendering;