import logo from "../../../assets/logo-removebg-preview.png";
import { Link, NavLink } from "react-router-dom";

export default function SideBar() {
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <i className="fa-solid fa-house"></i>,
    },
    {
      path: "/myevents",
      name: "My Events",
      icon: <i className="fa-solid fa-ticket"></i>,
    },
    {
      path: "/community",
      name: "Community",
      icon: <i className="fa-regular fa-message"></i>,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <i className="fa-regular fa-user"></i>,
    },
  ];
  return (
    <>
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light" >
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <Link
            href="/"
            className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-secondary text-decoration-none"
          >
            <img src={logo} alt="logo" width="100%" className="my-2" />
          </Link>
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li className="nav-item">
              <Link href="#" className="nav-link align-middle px-0">
                <i className="fs-4 bi-house"></i>{" "}
                <span className="ms-1 d-none d-sm-inline text-secondary">Home</span>
              </Link>
            </li>

            <li>
              <Link href="#" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-table"></i>{" "}
                <span className="ms-1 d-none d-sm-inline text-secondary">My Events</span>
              </Link>
            </li>

            <li>
              <Link href="#" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-people"></i>{" "}
                <span className="ms-1 d-none d-sm-inline text-secondary">Comuunity</span>{" "}
              </Link>
            </li>

            <li>
              <Link href="#" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-people"></i>{" "}
                <span className="ms-1 d-none d-sm-inline text-secondary">Profile</span>{" "}
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </>
  );
}
