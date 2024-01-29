

export default function Contacts() {
  return <>
  
  <div className="contact">
      <svg
        className="rectangle"
        xmlns="http://www.w3.org/2000/svg"
        width="486"
        height="288"
        viewBox="0 0 486 288"
        fill="none"
      >
        <path
          opacity="0.5"
          d="M113.752 644.465C-16.5688 719.676 -183.21 675.042 -258.45 544.773C-333.691 414.503 -289.04 247.928 -158.719 172.717L77.2479 36.5353C207.569 -38.6759 374.21 5.9578 449.45 136.227C524.691 266.497 480.04 433.072 349.719 508.283L113.752 644.465Z"
          fill="white"
        />
      </svg>
      <div className="text">
        <h2>Contact Us</h2>
        <div className="form">
          <input type="text" placeholder="Email address" />
          <button>
            Send
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.14 2.96004L7.11 5.96004C1.04 7.99004 1.04 11.3 7.11 13.32L9.79 14.21L10.68 16.89C12.7 22.96 16.02 22.96 18.04 16.89L21.05 7.87004C22.39 3.82004 20.19 1.61004 16.14 2.96004ZM16.46 8.34004L12.66 12.16C12.51 12.31 12.32 12.38 12.13 12.38C11.94 12.38 11.75 12.31 11.6 12.16C11.31 11.87 11.31 11.39 11.6 11.1L15.4 7.28004C15.69 6.99004 16.17 6.99004 16.46 7.28004C16.75 7.57004 16.75 8.05004 16.46 8.34004Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="shapes">
        <div className="quarter"></div>
        <div className="half"></div>
        <div className="three-quarter">
          <svg
            width="200px"
            height="200px"
            viewBox="0 0 24.00 24.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(90)"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.144"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12 21C16.9706 21 21 16.9706 21 12H12V3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                stroke="#ffffff"
                strokeWidth="0.12000000000000002"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  
  </>;
}
