import LandingPage from "./components/LandingPage";
import Login from "./components/Website/Login";
import Home from "./components/Website/home/Home.jsx";
import Reg_Attendace from "./components/Website/register-attendance/Reg_Attendace";
import Reg_speaker from "./components/Website/register-speaker/Reg_speaker.jsx";
import Verfication from "./components/Website/verfiy-number/Verfication.jsx";
import SideBar from "./components/Website/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import Community from "./components/Website/community/Community.jsx";
import Profile from "./components/Website/Profile/Profile.jsx";
import MyEvents from "./components/Website/myEvents/MyEvents";
import NotFoundPage from "./components/Website/Notfound/NotFoundPage.jsx";
import TopBar from './components/Website/topBar/TopBar';
import Role from "./components/Website/Popups/Role.jsx";

function App() {
  return (
    <>
      {/* <LandingPage></LandingPage> */}
      {/* <Login></Login> */}
      {/* <Role></Role> */}
      {/* <Reg_Attendace></Reg_Attendace> */}
      <Reg_speaker></Reg_speaker>
      {/* <Verfication></Verfication> */}

      {/* <div className="d-flex min-vh-100">
        <div className="col-auto">
          <SideBar></SideBar>
        </div>
        <div className="flex-grow-1">
          <TopBar></TopBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="community" element={<Community></Community>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route path="myevents" element={<MyEvents></MyEvents>}></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
        </div>
      </div> */}
    </>
  );
}

export default App;
