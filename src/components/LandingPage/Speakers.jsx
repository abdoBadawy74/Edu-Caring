import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from "../../assets/speaker1.png";
import s2 from "../../assets/speaker2.png";
import s3 from "../../assets/speaker3.png";
import s4 from "../../assets/speaker4.png";

function Arrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#3296D4",
        height: "30px",
        width: "30px",
        borderRadius: "9px",
        color: "#c9c9c9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
}

export default function Speakers() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="speakers">
        <h2>Our speakers</h2>

        <div className="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85"
            height="56"
            viewBox="0 0 85 56"
            fill="none"
          >
            <g clipPath="url(#clip0_744_6735)">
              <path
                d="M1.00567 32.4003C7.33002 36.8537 15.0455 40.1437 22.9177 38.8615C29.3404 37.816 35.232 33.6194 37.331 27.3635L35.671 27.5834C38.2906 31.2133 41.8692 34.0487 46.0074 35.7735C50.1457 37.4982 54.6811 38.0444 59.1077 37.3511C63.2489 36.6298 67.1334 34.8625 70.3905 32.218C74.4192 28.9899 76.6513 24.4512 79.3273 20.16C79.9876 19.1133 78.3216 18.1393 77.6676 19.1877C75.2953 22.9785 73.3397 27.0431 69.957 30.0711C67.0087 32.6855 63.424 34.4847 59.5587 35.29C51.1648 37.0335 42.3672 33.4435 37.2483 26.6512C37.155 26.502 37.0204 26.3827 36.8608 26.3077C36.7011 26.2327 36.5233 26.2053 36.3485 26.2287C36.1738 26.2521 36.0097 26.3254 35.8759 26.4396C35.7422 26.5539 35.6445 26.7043 35.5946 26.8728C33.6665 32.7464 27.8586 36.5102 21.8916 37.3376C14.6732 38.3416 7.48763 35.3292 1.54048 31.4937C0.968163 31.1243 0.466865 32.0064 1.00905 32.3878L1.00567 32.4003Z"
                fill="#9DB2CE"
              />
              <path
                d="M76.976 19.3083C72.9771 19.5238 68.8855 20.6519 64.9621 21.4571C63.8655 21.6823 64.1311 23.3818 65.222 23.3761C69.6619 23.3333 74.0624 22.5569 78.2445 21.0787L77.0812 20.4084L78.3569 26.4203C78.7388 28.2116 78.8848 30.3275 79.758 31.9438C79.8517 32.093 79.9909 32.2083 80.1551 32.2729C80.3193 32.3375 80.4999 32.3479 80.6702 32.3026C80.8406 32.2573 80.9918 32.1587 81.1015 32.0213C81.2112 31.8838 81.2738 31.7149 81.2799 31.5392C81.4117 29.713 80.6484 27.6911 80.2585 25.9043L78.9466 19.9027C78.8772 19.6627 78.7172 19.4588 78.5002 19.3338C78.2832 19.2088 78.0263 19.1724 77.7833 19.2324C73.7574 20.6635 69.5178 21.4116 65.2409 21.4456L65.5009 23.3646C69.3359 22.4885 73.477 21.8226 77.1416 20.3846C77.6617 20.1773 77.6594 19.2926 76.9977 19.3276L76.976 19.3083Z"
                fill="#9DB2CE"
              />
              <path
                d="M64.7335 22.6477C67.3982 24.5263 70.0587 26.4128 72.7147 28.3069L76.554 31.0621C77.7667 31.9467 78.9461 33.1035 80.374 33.591C80.512 33.6248 80.6569 33.618 80.7909 33.5714C80.9249 33.5248 81.0424 33.4403 81.129 33.3282C81.2156 33.2162 81.2677 33.0815 81.2789 32.9404C81.29 32.7992 81.2598 32.6579 81.1918 32.5334C80.3757 31.4013 79.1043 30.7085 77.964 29.9038C76.5969 28.9439 75.2156 27.9868 73.8098 27.07C70.9984 25.2364 68.1208 23.5144 65.1771 21.9039C65.0783 21.8495 64.9621 21.8354 64.8532 21.8648C64.7444 21.8941 64.6513 21.9645 64.5937 22.0611C64.5361 22.1577 64.5184 22.2729 64.5445 22.3823C64.5706 22.4918 64.6384 22.5869 64.7335 22.6477Z"
                fill="#9DB2CE"
              />
            </g>
            <defs>
              <clipPath id="clip0_744_6735">
                <rect
                  width="78"
                  height="36"
                  fill="white"
                  transform="translate(9.41724) rotate(15.1645)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <span className="no-speakers">54 speakers</span>

        <Slider {...settings}>
          <div className="speaker">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="238"
              height="237"
              viewBox="0 0 238 237"
              fill="none"
            >
              <circle
                cx="119"
                cy="118.342"
                r="118"
                transform="rotate(35 119 118.342)"
                fill="url(#paint0_linear_734_4437)"
                fillOpacity="0.1"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_734_4437"
                  x1="119"
                  y1="0.341965"
                  x2="102"
                  y2="83.342"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5CA9C3" />
                  <stop offset="1" stopColor="#5CA9C3" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <img src={s1} alt="speaker1" width="249px" height="249px" />
            <h4>Osama Montaser</h4>
            <span>xDoctor</span>
          </div>
          <div className="speaker">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="238"
              height="237"
              viewBox="0 0 238 237"
              fill="none"
            >
              <circle
                cx="119"
                cy="118.342"
                r="118"
                transform="rotate(35 119 118.342)"
                fill="url(#paint0_linear_734_4437)"
                fillOpacity="0.1"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_734_4437"
                  x1="119"
                  y1="0.341965"
                  x2="102"
                  y2="83.342"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5CA9C3" />
                  <stop offset="1" stopColor="#5CA9C3" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <img src={s2} alt="speaker1" width="249px" height="249px" />
            <h4>Osama Montaser</h4>
            <span>xDoctor</span>
          </div>
          <div className="speaker">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="238"
              height="237"
              viewBox="0 0 238 237"
              fill="none"
            >
              <circle
                cx="119"
                cy="118.342"
                r="118"
                transform="rotate(35 119 118.342)"
                fill="url(#paint0_linear_734_4437)"
                fillOpacity="0.1"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_734_4437"
                  x1="119"
                  y1="0.341965"
                  x2="102"
                  y2="83.342"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5CA9C3" />
                  <stop offset="1" stopColor="#5CA9C3" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <img src={s3} alt="speaker1" width="249px" height="249px" />
            <h4>Osama Montaser</h4>
            <span>xDoctor</span>
          </div>
          <div className="speaker">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="238"
              height="237"
              viewBox="0 0 238 237"
              fill="none"
            >
              <circle
                cx="119"
                cy="118.342"
                r="118"
                transform="rotate(35 119 118.342)"
                fill="url(#paint0_linear_734_4437)"
                fillOpacity="0.1"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_734_4437"
                  x1="119"
                  y1="0.341965"
                  x2="102"
                  y2="83.342"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5CA9C3" />
                  <stop offset="1" stopColor="#5CA9C3" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <img src={s4} alt="speaker1" width="249px" height="249px" />
            <h4>Osama Montaser</h4>
            <span>xDoctor</span>
          </div>
          <div className="speaker">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="238"
              height="237"
              viewBox="0 0 238 237"
              fill="none"
            >
              <circle
                cx="119"
                cy="118.342"
                r="118"
                transform="rotate(35 119 118.342)"
                fill="url(#paint0_linear_734_4437)"
                fillOpacity="0.1"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_734_4437"
                  x1="119"
                  y1="0.341965"
                  x2="102"
                  y2="83.342"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5CA9C3" />
                  <stop offset="1" stopColor="#5CA9C3" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <img src={s1} alt="speaker1" width="249px" height="249px" />
            <h4>Osama Montaser</h4>
            <span>xDoctor</span>
          </div>
          <div className="speaker">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="238"
              height="237"
              viewBox="0 0 238 237"
              fill="none"
            >
              <circle
                cx="119"
                cy="118.342"
                r="118"
                transform="rotate(35 119 118.342)"
                fill="url(#paint0_linear_734_4437)"
                fillOpacity="0.1"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_734_4437"
                  x1="119"
                  y1="0.341965"
                  x2="102"
                  y2="83.342"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5CA9C3" />
                  <stop offset="1" stopColor="#5CA9C3" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <img src={s2} alt="speaker1" width="249px" height="249px" />
            <h4>Osama Montaser</h4>
            <span>xDoctor</span>
          </div>
          <div className="speaker">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="238"
              height="237"
              viewBox="0 0 238 237"
              fill="none"
            >
              <circle
                cx="119"
                cy="118.342"
                r="118"
                transform="rotate(35 119 118.342)"
                fill="url(#paint0_linear_734_4437)"
                fillOpacity="0.1"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_734_4437"
                  x1="119"
                  y1="0.341965"
                  x2="102"
                  y2="83.342"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5CA9C3" />
                  <stop offset="1" stopColor="#5CA9C3" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <img src={s3} alt="speaker1" width="249px" height="249px" />
            <h4>Osama Montaser</h4>
            <span>xDoctor</span>
          </div>
          <div className="speaker">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="238"
              height="237"
              viewBox="0 0 238 237"
              fill="none"
            >
              <circle
                cx="119"
                cy="118.342"
                r="118"
                transform="rotate(35 119 118.342)"
                fill="url(#paint0_linear_734_4437)"
                fillOpacity="0.1"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_734_4437"
                  x1="119"
                  y1="0.341965"
                  x2="102"
                  y2="83.342"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5CA9C3" />
                  <stop offset="1" stopColor="#5CA9C3" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <img src={s4} alt="speaker1" width="249px" height="249px" />
            <h4>Osama Montaser</h4>
            <span>xDoctor</span>
          </div>
          <div className="speaker">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="238"
              height="237"
              viewBox="0 0 238 237"
              fill="none"
            >
              <circle
                cx="119"
                cy="118.342"
                r="118"
                transform="rotate(35 119 118.342)"
                fill="url(#paint0_linear_734_4437)"
                fillOpacity="0.1"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_734_4437"
                  x1="119"
                  y1="0.341965"
                  x2="102"
                  y2="83.342"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5CA9C3" />
                  <stop offset="1" stopColor="#5CA9C3" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <img src={s1} alt="speaker1" width="249px" height="249px" />
            <h4>Osama Montaser</h4>
            <span>xDoctor</span>
          </div>
        </Slider>
      </div>
    </>
  );
}
