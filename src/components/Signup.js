import React, { useState } from "react";
import "./signup.css"; // Import the CSS for signup

function SignUp() {
  const [signIn, toggle] = useState(true);

  const handleToggle = () => {
    toggle(!signIn);
  };

  return (
    <div className={`signup-container ${signIn ? "signin" : "signup"}`}>
      <form>
        <h1>Create Account</h1>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
      <div className="overlay-container">
        <div className={`overlay ${signIn ? "right-overlay-panel" : "left-overlay-panel"}`}>
          <div className="overlay-panel">
            {signIn ? (
              <>
                <h1>Welcome Back!</h1>
                <p>To keep connected with us, please login with your personal info</p>
                <button className="ghost-button" onClick={handleToggle}>Sign Up</button>
              </>
            ) : (
              <>
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start your journey with us</p>
                <button className="ghost-button" onClick={handleToggle}>Sign In</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
