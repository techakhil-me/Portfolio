import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import BrandText from "../assets/BrandText.svg";

const DigitalCard = () => {
  const tilt = useRef(null);
  const card = useRef(null);
  useEffect(() => {
    VanillaTilt.init(tilt.current, {
      reverse: true,
      // glare: true,
      // "max-glare": 0.2
    });
    tilt.current.addEventListener("click", () => {
      card.current.classList.toggle("DigitalCard_flipped");
    });
  }, []);

  return (
    <div className="absolute DigitalCard__holder z-50 ">
      <div
        ref={tilt}
        className="relative DigitalCard_parent grid place-content-center"
      >
        <div ref={card} className="DigitalCard w-full h-full  FlipCard">
          <div className="DigitalCard_face w-full h-full grid place-content-center">
            <BrandText />
          </div>
          <div
            style={{ color: "#d9d9d9" }}
            className="DigitalCard_face DigitalCard_back w-full h-full grid place-content-center"
          >
            <div className="Card_top absolute w-full top-4">
              <p className="text-2xl font-bold text-center  uppercase">
                Akhil Padmanabhan
              </p>
              <p className="text-sm font-medium tracking-widest leading-snug text-center uppercase">
                UI/UX Designer, Web Developer
              </p>
            </div>
            <div className="Card_left absolute bottom-4 left-4 flex flex-col space-y-2 md:space-y-4">
              <div className="inline-flex space-x-2.5 items-center justify-start">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M2.66671 2.66675H13.3334C14.0667 2.66675 14.6667 3.26675 14.6667 4.00008V12.0001C14.6667 12.7334 14.0667 13.3334 13.3334 13.3334H2.66671C1.93337 13.3334 1.33337 12.7334 1.33337 12.0001V4.00008C1.33337 3.26675 1.93337 2.66675 2.66671 2.66675Z"
                      stroke="#d9d9d9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 4L8.00004 8.66667L1.33337 4"
                      stroke="#d9d9d9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <a
                  href="mailto:akhil07pc@gmail.com?subject=Hi%20I%20saw%20your%20website&body=Got%20something%20?"
                  className="text-base leading-none text-#d9d9d9"
                >
                  akhil07pc@gmail.com
                </a>
              </div>
              <div className="inline-flex space-x-2.5 items-center justify-start">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M10.6666 5.33325C11.7275 5.33325 12.7449 5.75468 13.4951 6.50482C14.2452 7.25497 14.6666 8.27239 14.6666 9.33325V13.9999H12V9.33325C12 8.97963 11.8595 8.64049 11.6094 8.39044C11.3594 8.14039 11.0202 7.99992 10.6666 7.99992C10.313 7.99992 9.97387 8.14039 9.72382 8.39044C9.47377 8.64049 9.33329 8.97963 9.33329 9.33325V13.9999H6.66663V9.33325C6.66663 8.27239 7.08805 7.25497 7.8382 6.50482C8.58834 5.75468 9.60576 5.33325 10.6666 5.33325V5.33325Z"
                      stroke="#d9d9d9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.00004 6H1.33337V14H4.00004V6Z"
                      stroke="#d9d9d9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.66671 3.99992C3.40309 3.99992 4.00004 3.40296 4.00004 2.66659C4.00004 1.93021 3.40309 1.33325 2.66671 1.33325C1.93033 1.33325 1.33337 1.93021 1.33337 2.66659C1.33337 3.40296 1.93033 3.99992 2.66671 3.99992Z"
                      stroke="#d9d9d9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>

                <a
                  href="https://www.linkedin.com/in/techakhil/"
                  className="text-base leading-none text-#d9d9d9"
                >
                  @techakhil
                </a>
              </div>
              <div className="inline-flex space-x-2.5 items-center justify-start">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M11.3334 1.33325H4.66671C2.82576 1.33325 1.33337 2.82564 1.33337 4.66659V11.3333C1.33337 13.1742 2.82576 14.6666 4.66671 14.6666H11.3334C13.1743 14.6666 14.6667 13.1742 14.6667 11.3333V4.66659C14.6667 2.82564 13.1743 1.33325 11.3334 1.33325Z"
                      stroke="#d9d9d9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.6667 7.57996C10.7489 8.13479 10.6542 8.70143 10.3958 9.1993C10.1375 9.69717 9.72877 10.1009 9.22776 10.3531C8.72675 10.6052 8.15897 10.693 7.6052 10.6039C7.05142 10.5148 6.53985 10.2533 6.14323 9.85673C5.74662 9.46012 5.48516 8.94854 5.39605 8.39477C5.30694 7.84099 5.39472 7.27322 5.64689 6.77221C5.89907 6.27119 6.3028 5.86245 6.80066 5.60412C7.29853 5.34578 7.86518 5.25102 8.42001 5.33329C8.98596 5.41721 9.50991 5.68093 9.91447 6.08549C10.319 6.49006 10.5828 7.01401 10.6667 7.57996Z"
                      stroke="#d9d9d9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6666 4.33325H11.6733"
                      stroke="#d9d9d9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>

                <a
                  href="https://www.instagram.com/techakhil.me/"
                  target="_blank"
                  className="text-base leading-none text-#d9d9d9"
                >
                  @teckakhil.me
                </a>
              </div>
              <div className="inline-flex space-x-2.5 items-center justify-start">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M6.66663 8.66672C6.95293 9.04948 7.3182 9.36618 7.73766 9.59535C8.15712 9.82452 8.62096 9.9608 9.09773 9.99495C9.57449 10.0291 10.053 9.9603 10.5009 9.79325C10.9487 9.62619 11.3554 9.36477 11.6933 9.02672L13.6933 7.02672C14.3005 6.39805 14.6365 5.55604 14.6289 4.68205C14.6213 3.80806 14.2707 2.97202 13.6527 2.354C13.0347 1.73597 12.1986 1.38541 11.3246 1.37781C10.4506 1.37022 9.60863 1.7062 8.97996 2.31339L7.83329 3.45339"
                      stroke="#d9d9d9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.33334 7.33332C9.04704 6.95057 8.68177 6.63387 8.26231 6.40469C7.84285 6.17552 7.37901 6.03924 6.90224 6.0051C6.42548 5.97095 5.94695 6.03974 5.49911 6.2068C5.05127 6.37386 4.6446 6.63527 4.30668 6.97332L2.30668 8.97332C1.69948 9.60199 1.3635 10.444 1.3711 11.318C1.37869 12.192 1.72926 13.028 2.34728 13.646C2.96531 14.2641 3.80135 14.6146 4.67534 14.6222C5.54933 14.6298 6.39134 14.2938 7.02001 13.6867L8.16001 12.5467"
                      stroke="#d9d9d9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>

                <a
                  href="https://www.techakhil.me/"
                  target="_blank"
                  className="text-base leading-none text-#d9d9d9"
                >
                  www.techakhil.me
                </a>
              </div>
            </div>
            <div className="Card_right absolute right-2 translate-x-full bottom-4 transform origin-bottom-left -rotate-90 ">
              <div className="inline-flex space-x-2.5 items-center justify-start">
                <svg
                  className="transform rotate-90"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.28 1.3333L13.28 1.3333C13.4656 1.33254 13.6494 1.37057 13.8195 1.44496C13.9897 1.51934 14.1424 1.62843 14.2679 1.76524C14.3934 1.90206 14.489 2.06358 14.5485 2.23946C14.6079 2.41535 14.63 2.60171 14.6133 2.78663C14.3904 4.83807 13.6894 6.80863 12.5666 8.53996C11.5431 10.1507 10.1774 11.5164 8.56665 12.54C6.82745 13.6666 4.84731 14.3678 2.78665 14.5866C2.60229 14.6033 2.41649 14.5814 2.24107 14.5223C2.06564 14.4632 1.90444 14.3682 1.76773 14.2435C1.63102 14.1187 1.52179 13.9668 1.447 13.7974C1.37221 13.6281 1.33349 13.4451 1.33332 13.26L1.33332 11.26C1.33013 10.9364 1.4447 10.6228 1.65567 10.3775C1.86664 10.1321 2.15961 9.97191 2.47998 9.92663C3.12003 9.84221 3.74847 9.68566 4.35332 9.45996C4.59193 9.37027 4.85126 9.35085 5.10057 9.40403C5.34988 9.4572 5.57872 9.58072 5.75998 9.75996L6.60665 10.6066C8.27568 9.65759 9.65761 8.27566 10.6066 6.60663L9.75998 5.75996C9.58074 5.5787 9.45722 5.34986 9.40404 5.10055C9.35087 4.85124 9.37029 4.59191 9.45998 4.3533C9.68568 3.74845 9.84223 3.12001 9.92665 2.47996C9.97234 2.15612 10.1355 1.86036 10.385 1.64894C10.6345 1.43752 10.953 1.32518 11.28 1.3333Z"
                    stroke="#d9d9d9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a href="tel:+917977675557" className="text-base leading-none">
                  +91 7977675557
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute CardTexture"></div> */}
      </div>
    </div>
  );
};

export default DigitalCard;
