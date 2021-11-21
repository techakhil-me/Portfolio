import React, { useState } from "react";
import ScrollArrow from "../assets/ScrollArrow.svg";

import Easter from "./Easter";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
const Footer = () => {
  const [EasterEgg, setEasterEgg] = useState(false);
  const [Once, setOnce] = useState(true);
  const { scroll } = useLocomotiveScroll();
  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        {EasterEgg && <Easter setEasterEgg={setEasterEgg} setOnce={setOnce} Once={Once}/>}
      </AnimatePresence>
      <div
        data-scroll-section
        className="flex items-center md:justify-between justify-center  pt-4 pb-2"
      >
        <div
          className="md:flex hidden items-center"
          onClick={() =>
            scroll.scrollTo("top", {
              duration: 1,
            })
          }
        >
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
            onClick={() => {
              setEasterEgg(!EasterEgg);
              setOnce(false);
            }}
            className="wobble-hor-bottom"
          >
            <a>
              {Once ? (
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
              ) : (<motion.span transition={{ duration: 1 }} layoutId="heart">
                <svg
                  width="35"
                  height="30"
                  viewBox="0 0 35 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dii_1394_80)">
                    <path
                      d="M16.1443 5.75024L14.996 4.78665C12.6685 2.83369 9.19856 3.13727 7.24559 5.46473C5.29262 7.79218 5.59621 11.2622 7.92366 13.2151L9.07202 14.1787L17.5005 21.251L17.7654 17.9837L16.6821 17.0746L17.504 14.9951L15.2501 12.1808L17.0682 10.0141L14.9015 8.19604L16.1443 5.75024Z"
                      fill="url(#paint0_linear_1394_80)"
                    />
                  </g>
                  <g filter="url(#filter1_dii_1394_80)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.9659 3.55791C25.4195 3.68508 26.763 4.38465 27.7006 5.50264C28.6388 6.62018 29.0945 8.06473 28.9673 9.51831C28.8401 10.9719 28.1406 12.3154 27.0226 13.253L25.8742 14.2166L17.4457 21.2889L18.274 18.1172L17.365 17.0339L18.5355 15.1286L16.8046 11.9658L18.9713 10.1477L17.1532 7.98097L18.8019 5.78815L19.9502 4.82457C21.0678 3.88639 22.5123 3.43074 23.9659 3.55791Z"
                      fill="url(#paint1_linear_1394_80)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dii_1394_80"
                      x="0.740382"
                      y="0.890516"
                      width="22.243"
                      height="28.1874"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                        result="effect1_dropShadow_1394_80"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1394_80"
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
                        result="effect2_innerShadow_1394_80"
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
                        in2="effect2_innerShadow_1394_80"
                        result="effect3_innerShadow_1394_80"
                      />
                    </filter>
                    <filter
                      id="filter1_dii_1394_80"
                      x="11.5866"
                      y="0.928113"
                      width="22.6197"
                      height="28.1879"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                        result="effect1_dropShadow_1394_80"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1394_80"
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
                        result="effect2_innerShadow_1394_80"
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
                        in2="effect2_innerShadow_1394_80"
                        result="effect3_innerShadow_1394_80"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1394_80"
                      x1="15.9117"
                      y1="3.0886"
                      x2="17.5008"
                      y2="21.251"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#760F0F" />
                      <stop offset="1" stop-color="#FF2727" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1394_80"
                      x1="19.035"
                      y1="3.12651"
                      x2="17.446"
                      y2="21.289"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#760F0F" />
                      <stop offset="1" stop-color="#FF2727" />
                    </linearGradient>
                  </defs>
                </svg>
                </motion.span>
              )}
            </a>
          </span>
          <span> techakhil</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
