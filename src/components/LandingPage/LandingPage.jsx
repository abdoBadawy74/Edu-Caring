import About from "./About";
import Landing from "./Landing";
import NavBar from "./NavBar";
import Period from "./Period";
import Social from "./Social";

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
