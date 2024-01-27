import landing1 from "../../assets/landing1.png"
import landing2 from "../../assets/landing2.png"
import landing3 from "../../assets/landing3.png"
import landing4 from "../../assets/landing4.png"


export default function Landing() {
  return (
    <>
      <div className="home">
        <div className="ellips1"></div>
        <div className="ellips2"></div>
        <div className="ellips3"></div>
        <div className="landing">
          <div className="text">
            <h1>
              Welcome To <span>Edu Caring</span>
            </h1>
            <span>
              Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
              senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
              facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
              urna, faucibus aenean lorem faucibus integer.
            </span>
            <a className="button">
              Register <i className="fas fa-chevron-right"></i>
            </a>
          </div>

          <div className="images">
          <div>
            <img src={landing1} className="landing1" width="200px" height="397px" alt="landing1" />
            <img src={landing4} className="landing4" width="200px" height="185px" alt="landing4" />
          </div>

          <div>
            <img src={landing2} className="landing2" width="200px" height="192px"alt="landing2" />
            <img src={landing3} className="landing3" width="200px" height="390px" alt="landing3" />
            
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
