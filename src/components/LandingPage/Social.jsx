import spotify from "../../assets/spotify.png";
import google from "../../assets/google.png";
import stripe from "../../assets/stripe.png";
import youtube from "../../assets/youtube.png";
import microsoft from "../../assets/microsoft.png";
import medium from "../../assets/medium.png";
import zoom from "../../assets/zoom.png";
import uber from "../../assets/uber.png";
import grab from "../../assets/grab.png";

export default function Social() {
  return (
    <>
      <div className="container-fluid">
        <div className="social-media">
          <img src={spotify} width="167px" height="50px" alt="spotify" />
          <img src={google} width="150px" height="50px" alt="google" />
          <img src={stripe} width="132px" height="62px" alt="stripe" />
          <img src={youtube} width="212px" height="131px" alt="youtube" />
          <img src={microsoft} width="278px" height="124px" alt="microsoft" />
          <img src={medium} width="275px" height="83px" alt="medium" />
          <img src={zoom} width="170px" height="30px" alt="zoom" />
          <img src={uber} width="125px" height="44px" alt="uber" />
          <img src={grab} width="136px" height="52px" alt="grab" />
        </div>
      </div>
    </>
  );
}
