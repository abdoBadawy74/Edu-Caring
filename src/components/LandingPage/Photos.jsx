import { Link } from "react-router-dom";
import photo1 from "../../assets/photos1.png";
import photo2 from "../../assets/photos2.png";
import photo3 from "../../assets/photos3.png";
import photo4 from "../../assets/photos4.png";
import photo5 from "../../assets/photos5.png";
import photo6 from "../../assets/photos6.png";
import photo7 from "../../assets/photos7.png";
import photo8 from "../../assets/photos8.png";
import photo9 from "../../assets/photos9.png";
import photo10 from "../../assets/photos10.png";

export default function Photos() {
  return (
    <>
      <div className="photos">
      <svg
      className="shape"
        xmlns="http://www.w3.org/2000/svg"
        width="123"
        height="108"
        viewBox="0 0 123 108"
        fill="none"
      >
        <path
          opacity="0.2"
          d="M116.309 47.2915C114.045 36.9157 110.763 24.6694 105.439 15.3813C102.523 10.2696 97.8836 6.42323 92.27 4.71298C86.1084 2.88168 80.443 3.86399 74.2965 4.97518C63.3797 6.561 52.4903 9.21095 41.8017 12.6107C32.2487 15.4383 21.0518 17.9027 13.2248 24.2859C1.84498 33.7639 3.75033 46.6468 6.95251 60.5215C9.21716 70.8973 12.4985 83.1435 17.8227 92.4316C22.1302 99.8492 30.0573 104.422 38.2221 104.109C48.9927 103.902 70.7717 98.602 81.2867 95.5166C90.3587 92.8179 100.527 90.3613 108.314 84.7924C121.338 75.6775 119.913 62.6657 116.309 47.2915ZM44.2911 41.1412C43.2866 37.3924 44.8758 35.6272 48.538 36.7889C58.3618 39.7818 68.4931 42.9603 78.3169 45.9532C81.9791 47.1149 82.5818 49.3642 80.058 52.4512C73.0468 59.9551 66.1026 67.7089 59.0914 75.2128C56.2602 78.1143 54.3088 77.5657 53.1308 74.1312C52.729 72.6317 45.2287 44.6402 44.2911 41.1412Z"
          fill="white"
          stroke="#C5CCDA"
          strokeWidth="7.24801"
          strokeMiterlimit="10"
        />
      </svg>
        <div className="images">
          <div className="col">
            <img
              src={photo1}
              alt="photos1"
              width="128px"
              height="192px"
            />
            <img
              src={photo2}
              alt="photos2"
              width="172px"
              height="258px"
            />
          </div>
          <div className="col">
            <img
              src={photo3}
              alt="photos3"
              width="128px"
              height="212px"
            />
            <img
              src={photo4}
              alt="photos4"
              width="128px"
              height="215px"
            />
            <img
              src={photo5}
              alt="photos5"
              width="128px"
              height="160px"
            />
          </div>
          <div className="col">
            <img
              src={photo6}
              alt="photos6"
              width="128px"
              height="171px"
            />
            <img
              src={photo7}
              alt="photos7"
              width="128px"
              height="172px"
            />
            <img
              src={photo8}
              alt="photos8"
              width="128px"
              height="192px"
            />
          </div>
          <div className="col">
            <img
              src={photo9}
              alt="photos9"
              width="160px"
              height="255px"
            />
            <img
              src={photo10}
              alt="photos10"
              width="128px"
              height="165px"
            />
          </div>
        </div>

        <div className="text">
          <h2>Photos and Videos</h2>
          <span>
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
            senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
            facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
            urna, faucibus aenean lorem faucibus integer.
          </span>
          <div className="more">
            <Link to="#">view more</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.586 10.657L11.636 6.70704C11.4538 6.51844 11.353 6.26584 11.3553 6.00364C11.3576 5.74144 11.4628 5.49063 11.6482 5.30522C11.8336 5.11981 12.0844 5.01465 12.3466 5.01237C12.6088 5.01009 12.8614 5.11088 13.05 5.29304L18.707 10.95C18.8002 11.0427 18.8741 11.1529 18.9246 11.2742C18.9751 11.3955 19.001 11.5256 19.001 11.657C19.001 11.7884 18.9751 11.9186 18.9246 12.0399C18.8741 12.1612 18.8002 12.2714 18.707 12.364L13.05 18.021C12.9578 18.1166 12.8474 18.1927 12.7254 18.2451C12.6034 18.2976 12.4722 18.3251 12.3394 18.3263C12.2066 18.3274 12.0749 18.3021 11.952 18.2519C11.8291 18.2016 11.7175 18.1273 11.6236 18.0334C11.5297 17.9395 11.4555 17.8279 11.4052 17.705C11.3549 17.5821 11.3296 17.4504 11.3307 17.3176C11.3319 17.1849 11.3595 17.0536 11.4119 16.9316C11.4643 16.8096 11.5405 16.6993 11.636 16.607L15.586 12.657H6C5.73478 12.657 5.48043 12.5517 5.29289 12.3641C5.10536 12.1766 5 11.9223 5 11.657C5 11.3918 5.10536 11.1375 5.29289 10.9499C5.48043 10.7624 5.73478 10.657 6 10.657H15.586Z"
                fill="#3296D4"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
