export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="info">
          <h4>eduCaring</h4>
          <div className="icons">
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
          <span>&copy; educaring . All rights reserved </span>
        </div>

        <div className="links">
          <div className="col">
            <h6>Company</h6>
            <ul>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Speakers</a>
              </li>
              <li>
                <a href="#">Photos and Videos</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h6>support</h6>
            <ul>
              <li>
                <a href="#">contact us</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h6>Subscribe</h6>
            <div className="subscribe">
              <input type="text" placeholder="mail"></input>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.969664 1.46966C0.765936 1.67339 0.69692 1.97581 0.792101 2.24775L6.0421 17.2478C6.14369 17.538 6.41216 17.7368 6.71942 17.7494C7.02668 17.7619 7.31046 17.5856 7.43535 17.3046L10.3182 10.8182L16.8046 7.93535C17.0856 7.81046 17.2619 7.52668 17.2494 7.21942C17.2368 6.91216 17.038 6.64368 16.7478 6.5421L1.74776 1.2921C1.47582 1.19692 1.17339 1.26593 0.969664 1.46966ZM8.85544 10.4161L6.83295 14.9667L3.2936 4.85425L8.85544 10.4161ZM4.35426 3.79359L14.4667 7.33294L9.9161 9.35543L4.35426 3.79359Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
