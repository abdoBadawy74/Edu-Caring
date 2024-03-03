import React, { useState } from "react";
import logo from "../../assets/logo-removebg-preview.png";
import loginImage from "../../assets/login-image.jpg";
import style from "./Login.module.css";
import Role from "./Popups/Role";

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);

  const handleSignupClick = () => {
    setIsSignup(true);
  };

  const handleSignInClick = () => {
    setIsSignup(false);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.form}>
          <img src={logo} alt="logo" />
          <h2>{isSignup ? "Sign up" : "Sign in"}</h2>
          <div>
            <i className="fa-regular fa-envelope"></i>
            <input type="email" placeholder="email" />
          </div>
          <div>
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder="password" />
            <a href="#">forget password!</a>
            <i className="fa-regular fa-eye"></i>
          </div>
          <button>{isSignup ? "Sign Up" : "Sign In"}</button>
          <p>
            {isSignup ? (
              <>
                Already have an account?{" "}
                <a href="#" onClick={handleSignInClick}>
                  Sign in
                </a>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <a href="#" onClick={handleSignupClick}>
                  Sign up
                </a>
              </>
            )}
          </p>
        </div>
        <div className={style.image}>
          <img src={loginImage} alt="loginImage" />
        </div>
      </div>
      {isSignup && <Role onClose={() => setIsSignup(false)} />}
    </>
  );
}
