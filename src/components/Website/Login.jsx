import logo from "../../assets/logo-removebg-preview.png";
import loginImage from "../../assets/login-image.jpg";
import style from "./Login.module.css";


export default function Login() {
  return (
    <>
      <div className={style.container}>
        <div className={style.form}>
          <img src={logo} alt="logo" />
          <h2>Sign in</h2>
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
          <button>Sign In</button>
          <p>Don’t have an account? <a href="#">Sign up</a></p>
        </div>
        <div className={style.image}>
          <img src={loginImage} alt="loginImage" />
        </div>
      </div>
    </>
  );
}
//
