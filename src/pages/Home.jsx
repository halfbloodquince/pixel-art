import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ mult, setMult }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/app");
  };

  const handleChange = (event) => {
    setMult(event.target.value);
  };

  useEffect(() => {
    document.body.style.cursor = "auto";
  }, []);

  return (
    <div className="Home">
      <div className="svg--container">
        <div className="svg">
          <svg
            width="275"
            height="434"
            viewBox="0 0 275 434"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="brush--blur" filter="url(#filter0_f_0_1)">
              <path
                d="M247 34C247 37.3137 244.314 40 241 40C237.686 40 235 37.3137 235 34C235 30.6863 237.686 28 241 28C244.314 28 247 30.6863 247 34Z"
                stroke="#BEF3F0"
                strokeWidth="2"
              />
              <path
                d="M108 107L171 166C175 159.6 176.667 144.667 177 138C176.2 121.2 182.667 110.333 186 107C190.667 105.333 205 97.6 225 80C245 62.4 255.333 48 258 43C263.333 32.3333 269.8 11 253 11C236.2 11 227.333 17.6667 225 21C210.6 25 193 53.3333 186 67C176.4 87 165.333 94.6667 161 96C118.6 98.4 108 104.333 108 107Z"
                stroke="#BEF3F0"
                strokeWidth="2"
              />
              <path
                d="M64 146L127 211C112.6 221.4 91.6667 248.667 83 261C70.2 255.4 33.6667 212.667 17 192C52.2 164.8 63 150 64 146Z"
                stroke="#BEF3F0"
                strokeWidth="2"
              />
              <path
                d="M144 195L83 132L104 110L166 172L144 195Z"
                stroke="#BEF3F0"
                strokeWidth="2"
              />
              <path
                d="M131 207L69 145L79 135L140 197L131 207Z"
                stroke="#BEF3F0"
                strokeWidth="2"
              />
            </g>
            <path
              className="paint--brush--2"
              d="M247 34C247 37.3137 244.314 40 241 40C237.686 40 235 37.3137 235 34C235 30.6863 237.686 28 241 28C244.314 28 247 30.6863 247 34Z"
              stroke="#BEF3F0"
              strokeWidth="2"
            />
            <path
              className="paint--brush--2"
              d="M108 107L171 166C175 159.6 176.667 144.667 177 138C176.2 121.2 182.667 110.333 186 107C190.667 105.333 205 97.6 225 80C245 62.4 255.333 48 258 43C263.333 32.3333 269.8 11 253 11C236.2 11 227.333 17.6667 225 21C210.6 25 193 53.3333 186 67C176.4 87 165.333 94.6667 161 96C118.6 98.4 108 104.333 108 107Z"
              stroke="#BEF3F0"
              strokeWidth="2"
            />
            <path
              className="paint--brush--2"
              d="M64 146L127 211C112.6 221.4 91.6667 248.667 83 261C70.2 255.4 33.6667 212.667 17 192C52.2 164.8 63 150 64 146Z"
              stroke="#BEF3F0"
              strokeWidth="2"
            />
            <path
              className="paint--brush"
              d="M144 195L83 132L104 110L166 172L144 195Z"
              stroke="#BEF3F0"
              strokeWidth="2"
            />
            <path
              className="paint--brush"
              d="M131 207L69 145L79 135L140 197L131 207Z"
              stroke="#BEF3F0"
              strokeWidth="2"
            />
            <path
              className="paint--on--brush"
              d="M59 194C59.8 186.8 48.6667 178.333 43 175C38.2 171.696 20.3333 186.29 12 194L20 205C25 216 54 235 59 244C64 253 77 253 72 260C68 265.6 70.3333 268.333 72 269C72 278 85 286 90 279C95 272 85 261 85 260C85 259 115 227 102 235C91.6 241.4 94.3333 225 97 216C92.2 224.8 87 219.667 85 216C77 217.6 76.3333 209.333 77 205C65 203.4 72 197 77 194C70.6667 197 58.2 201.2 59 194Z"
              fill="#FF0000"
              stroke="#FF0000"
              strokeWidth="2"
            />
            <g className="paint--blur" filter="url(#filter1_f_0_1)">
              <path
                className="paint--blur"
                d="M59 194C59.8 186.8 48.6667 178.333 43 175C38.2 171.696 20.3333 186.29 12 194L20 205C25 216 54 235 59 244C64 253 77 253 72 260C68 265.6 70.3333 268.333 72 269C72 278 85 286 90 279C95 272 85 261 85 260C85 259 115 227 102 235C91.6 241.4 94.3333 225 97 216C92.2 224.8 87 219.667 85 216C77 217.6 76.3333 209.333 77 205C65 203.4 72 197 77 194C70.6667 197 58.2 201.2 59 194Z"
                fill="#FF0000"
              />
              <path
                className="paint--blur"
                d="M59 194C59.8 186.8 48.6667 178.333 43 175C38.2 171.696 20.3333 186.29 12 194L20 205C25 216 54 235 59 244C64 253 77 253 72 260C68 265.6 70.3333 268.333 72 269C72 278 85 286 90 279C95 272 85 261 85 260C85 259 115 227 102 235C91.6 241.4 94.3333 225 97 216C92.2 224.8 87 219.667 85 216C77 217.6 76.3333 209.333 77 205C65 203.4 72 197 77 194C70.6667 197 58.2 201.2 59 194Z"
                stroke="#FF0000"
                strokeWidth="2"
              />
            </g>
            <path
              className="drop--1"
              d="M36.1025 328.134C27.222 320.464 48.8851 306.849 56.2855 300C38.1208 317.807 66.377 310.328 56.2855 328.134C48.2123 342.38 39.4663 334.07 36.1025 328.134Z"
              fill="#FF0000"
              stroke="#FF0000"
              strokeWidth="2"
            />
            <g filter="url(#filter2_f_0_1)">
              <path
                className="blur--1"
                d="M36.1025 328.134C27.222 320.464 48.8851 306.849 56.2855 300C38.1208 317.807 66.377 310.328 56.2855 328.134C48.2123 342.38 39.4663 334.07 36.1025 328.134Z"
                fill="#FF0000"
              />
              <path
                className="blur--1"
                d="M36.1025 328.134C27.222 320.464 48.8851 306.849 56.2855 300C38.1208 317.807 66.377 310.328 56.2855 328.134C48.2123 342.38 39.4663 334.07 36.1025 328.134Z"
                stroke="#FF0000"
                strokeWidth="2"
              />
            </g>
            <path
              className="drop--2"
              d="M36.1025 415.134C27.222 407.464 48.8851 393.849 56.2855 387C38.1208 404.807 66.377 397.328 56.2855 415.134C48.2123 429.38 39.4663 421.07 36.1025 415.134Z"
              fill="#FF0000"
              stroke="#FF0000"
              strokeWidth="2"
            />
            <g filter="url(#filter3_f_0_1)">
              <path
                className="blur--2"
                d="M36.1025 415.134C27.222 407.464 48.8851 393.849 56.2855 387C38.1208 404.807 66.377 397.328 56.2855 415.134C48.2123 429.38 39.4663 421.07 36.1025 415.134Z"
                fill="#FF0000"
              />
              <path
                className="blur--2"
                d="M36.1025 415.134C27.222 407.464 48.8851 393.849 56.2855 387C38.1208 404.807 66.377 397.328 56.2855 415.134C48.2123 429.38 39.4663 421.07 36.1025 415.134Z"
                stroke="#FF0000"
                strokeWidth="2"
              />
            </g>
            <path
              className="drop--3"
              d="M71.1025 364.134C62.222 356.464 83.8851 342.849 91.2855 336C73.1208 353.807 101.377 346.328 91.2855 364.134C83.2123 378.38 74.4663 370.07 71.1025 364.134Z"
              fill="#FF0000"
              stroke="#FF0000"
              strokeWidth="2"
            />
            <g filter="url(#filter4_f_0_1)">
              <path
                className="blur--3"
                d="M71.1025 364.134C62.222 356.464 83.8851 342.849 91.2855 336C73.1208 353.807 101.377 346.328 91.2855 364.134C83.2123 378.38 74.4663 370.07 71.1025 364.134Z"
                fill="#FF0000"
              />
              <path
                className="blur--3"
                d="M71.1025 364.134C62.222 356.464 83.8851 342.849 91.2855 336C73.1208 353.807 101.377 346.328 91.2855 364.134C83.2123 378.38 74.4663 370.07 71.1025 364.134Z"
                stroke="#FF0000"
                strokeWidth="2"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_0_1"
                x="5.58066"
                y="0"
                width="269.228"
                height="272.244"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="5"
                  result="effect1_foregroundBlur_0_1"
                />
              </filter>
              <filter
                id="filter1_f_0_1"
                x="0.668579"
                y="163.521"
                width="115.598"
                height="129.144"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="5"
                  result="effect1_foregroundBlur_0_1"
                />
              </filter>
              <filter
                id="filter2_f_0_1"
                x="22.9999"
                y="289.266"
                width="46.5324"
                height="57.7339"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="5"
                  result="effect1_foregroundBlur_0_1"
                />
              </filter>
              <filter
                id="filter3_f_0_1"
                x="22.9999"
                y="376.266"
                width="46.5324"
                height="57.7339"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="5"
                  result="effect1_foregroundBlur_0_1"
                />
              </filter>
              <filter
                id="filter4_f_0_1"
                x="57.9999"
                y="325.266"
                width="46.5324"
                height="57.7339"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="5"
                  result="effect1_foregroundBlur_0_1"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <h1 className="game--title">PIXEL ART x TIMES TABLES</h1>
      <div className="select">
        <h3>Choose your times table: </h3>
        <select
          onChange={(event) => handleChange(event)}
          value={mult}
          className="select--button"
          name="times--table--selct"
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <button className="play--button" onClick={handleClick}>
        Play
      </button>
    </div>
  );
}
