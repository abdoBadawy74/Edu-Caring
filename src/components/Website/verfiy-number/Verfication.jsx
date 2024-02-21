import style from "./Verfication.module.css";
import logo from "../../../assets/logo.jpg";
export default function Verfication() {
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.body}>
          <h4>Verification</h4>
          <p>
            We’ve send you the verification code on{" "}
            <p className={style.num}> +966 2151515155</p>
          </p>
          <div className={style.form}>
            <input type="number" />
            <input type="number" />
            <input type="number" />
            <input type="number" />
          </div>
          <div className={style.resend}>
            <p>
              Re-send code in <span className={style.counter}>0:20</span>
            </p>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </>
  );
}
