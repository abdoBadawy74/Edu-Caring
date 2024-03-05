// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.jpg";
// export default function NavBar() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-transperant px-2">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/home">
//             <img src={logo} alt="logo" width={"184px"} height={"62px"} />
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mx-auto m-2 mb-lg-0">
//               <li className="nav-item active">
//                 <Link className="nav-link" to="/home">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/movies">
//                   Movies
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="events">
//                   Events
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="photos">
//                   Photos and Videos
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="speakers">
//                   Speakers
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="contacts">
//                   Contact us
//                 </Link>
//               </li>
//             </ul>

//             <ul className="navbar-nav m-2 mb-lg-0">
//               <li className="nav-item  ">
//                 <Link
//                   className="btn btn-outline-info m-2 order-lg-last order-first"
//                   to="/login"
//                 >
//                   Login
//                 </Link>
//               </li>

//               <li className="nav-item m-2 order-lg-last order-first">
//                 <Link className="btn btn-outline-info" to="/register">
//                   Register
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent px-2">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img src={logo} alt="logo" width={"184px"} height={"62px"} />
          </Link>
          {/* Toggle button always visible */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Menu content */}
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto m-2 mb-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="events">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="photos">
                  Photos and Videos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="speakers">
                  Speakers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contacts">
                  Contact us
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav m-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="btn btn-outline-info m-2 order-lg-last order-first"
                  to="/login"
                >
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="btn btn-outline-info m-2" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
