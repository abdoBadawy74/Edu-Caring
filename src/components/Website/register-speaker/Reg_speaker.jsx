import logo from "../../../assets/logo-removebg-preview.png";
import style from "./Reg_speaker.module.css";
import flag from "../../../assets/sudia-arabia-flag.png";

export default function Reg_Attendace() {
  function date() {
    let input = document.getElementById("date");
    input.addEventListener("click", function () {
      this.setAttribute("type", "date");
    });
  }
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Create new account as an speaker</h5>
          </div>
          <div className={style.icon}>
            <input type="file" id="img" hidden />
            <label htmlFor="img">
              <i className="fa-solid fa-camera"></i>
            </label>
          </div>
        </div>
        <div className={style.form}>
          <div className={style.row}>
            <div className={style.input}>
              <i className="fa-regular fa-user"></i>
              <input type="text" placeholder="الإسم (باللغة العربية)" />
            </div>

            <div className={style.input}>
              <i className="fa-regular fa-user"></i>
              <input type="text" placeholder="name (English)" />
            </div>

            <div className={style.input}>
              <i className="fa-regular fa-envelope"></i>
              <input type="text" placeholder="email" />
            </div>
          </div>

          <div className={style.row}>
            <div className={style.tele}>
              <img src={flag} alt="flag" />
              <input type="tel" value="+966" readOnly className={style.num} />
              <input type="tel" placeholder="phone"></input>
            </div>

            <div className={style.date}>
              <div className={style.input}>
                <i className="fa-regular fa-calendar-days"></i>
                <input
                  type="text"
                  id="date"
                  placeholder="birth of date"
                  onClick={date}
                />
              </div>
              <div className={style.input}>
                <select name="gender" id="gender">
                  <option value="">gender</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>
            </div>
            <div className={style.input}>
              <i className="fa-solid fa-heart-pulse"></i>
              <input type="text" placeholder="health authority number" />
            </div>
          </div>

          <div className={style.row}>

            <div className={style.input}>
            <i className="fa-regular fa-address-card"></i>
            <input type="text" placeholder="passport" />
            </div>

            <div className={style.input}>
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="password" />
              <i className="fa-regular fa-eye-slash fa-flip-horizontal"></i>
            </div>
            <div className={style.input}>
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="confirm password" />
              <i className="fa-regular fa-eye-slash fa-flip-horizontal"></i>
            </div>
          </div>
          <button>Sign Up</button>
        </div>
        <span>
          have account? <a href="#">sign in</a>
        </span>
      </div>
    </>
  );
}
