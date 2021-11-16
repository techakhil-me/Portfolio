import React, { useState } from "react";
import ScrollArrow from "../assets/ScrollArrow.svg";

import Easter from "./Easter";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [EasterEgg, setEasterEgg] = useState(false);
  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        {EasterEgg && <Easter setEasterEgg={setEasterEgg}/>}
      </AnimatePresence>
      <div
        data-scroll-section
        className="flex items-center md:justify-between justify-center  pt-4 pb-2"
      >
        <div className="md:flex hidden items-center">
          <div className="transform rotate-180">
            <ScrollArrow />
          </div>
          <p className="text-sm font-medium tracking-widest leading-snug text-gray-100 uppercase">
            scroll to top and live again
          </p>
        </div>

        <div className="text-sm font-medium flex flex-col md:flex-row tracking-widest leading-snug text-right text-gray-100 uppercase items-center">
          <span className="text-center">Designed and developed with</span>
          <span
            onClick={() => setEasterEgg(!EasterEgg)}
            className="wobble-hor-bottom"
          >
            <a>
              <motion.span transition={{ duration: 1 }} layoutId="heart">
                <motion.svg
                  width="33"
                  height="30"
                  viewBox="0 0 33 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dii_1025:112)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25.2913 4.61183C24.2598 3.57982 22.8604 3 21.4013 3C19.9422 3 18.5428 3.57982 17.5113 4.61183L16.4513 5.67183L15.3913 4.61183C13.2429 2.46344 9.75968 2.46344 7.61129 4.61183C5.4629 6.76021 5.4629 10.2434 7.61129 12.3918L8.67129 13.4518L16.4513 21.2318L24.2313 13.4518L25.2913 12.3918C26.3233 11.3603 26.9031 9.96096 26.9031 8.50183C26.9031 7.04269 26.3233 5.64335 25.2913 4.61183Z"
                      fill="url(#paint0_linear_1025:112)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dii_1025:112"
                      x="0.782008"
                      y="0.391004"
                      width="31.3391"
                      height="28.6679"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="2.609" />
                      <feGaussianBlur stdDeviation="2.609" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.178039 0 0 0 0 0.0227451 0 0 0 0 0.0227451 0 0 0 0.8 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1025:112"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1025:112"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1.73933" />
                      <feGaussianBlur stdDeviation="0.869665" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 0.168314 0 0 0 0 0.168314 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect2_innerShadow_1025:112"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="-1.73933" />
                      <feGaussianBlur stdDeviation="0.869665" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.356078 0 0 0 0 0.0454902 0 0 0 0 0.0454902 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect2_innerShadow_1025:112"
                        result="effect3_innerShadow_1025:112"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1025:112"
                      x1="16.4516"
                      y1="3"
                      x2="16.4516"
                      y2="21.2318"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#760F0F" />
                      <stop offset="1" stopColor="#FF2727" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </motion.span>
            </a>
          </span>
          <span> techakhil</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
