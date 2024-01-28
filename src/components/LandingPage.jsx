import About from "./LandingPage/About";
import Landing from "./LandingPage/Landing";
import NavBar from "./LandingPage/NavBar";
import Period from "./LandingPage/Period";
import Social from "./LandingPage/Social";

export default function LandingPage() {
  return (
    <>
      <NavBar></NavBar>
      <Landing></Landing>
      <Social></Social>
      <Period></Period>
      <About></About>
    </>
  );
}
