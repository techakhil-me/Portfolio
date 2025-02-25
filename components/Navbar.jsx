import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import SocialTray from "./SocialTray";
import Head from "next/head";

const variants = {
  open: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    transition: {
      // duration: 0.1,
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const childVariants = {
  open: {
    y: 0,
    opacity: 1,
    rotateZ: "0deg",
    transition: { stiffness: 1000 },
  },
  closed: {
    y: 50,
    opacity: 0,
    rotateZ: "5deg",
    transition: { stiffness: 200, duration: 0.1 },
  },
};

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [page, setPage] = useState("home");
  const router = useRouter();
  const defaultNav = {
    home: "inActive",
    about: "inActive",
    contact: "inActive",
    work: "inActive",
  };
  const [isActive, setActive] = useState(defaultNav);
  useEffect(() => {
    let Path = router.asPath.slice(1);
    Path = Path === "" ? "home" : Path;
    setActive({ ...defaultNav, [Path]: "Active" });
    setPage(Path);
  }, [router]);

  return (
    <motion.nav
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      exitBeforeEnter
      className={
        isOpen
          ? "fixed container pointer-events-none left-1/2 transfrom -translate-x-1/2 md:px-2 px-4 mx-auto text-light  z-20 top-0 transition duration-1000 ease-in-out antialiased w-full py-4 bg-dark"
          : "fixed container pointer-events-none left-1/2 transfrom -translate-x-1/2 md:px-2 px-4 mx-auto text-light  z-20 top-0 transition duration-1000 ease-in-out antialiased w-full py-4"
      }
    >
      <Head>
        <title>{page.toUpperCase() + " | TechAkhil Portfolio"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="title" content="TechAkhil - Portfolio" />
        <meta
          name="description"
          content="Akhil Padmanabhan, Frontend Dev and Designer based in India. Explore more about me and my works here !"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.techakhil.me/" />
        <meta property="og:title" content="TechAkhil - Portfolio" />
        <meta property="og:site_name" content="techakhil" />
        <meta
          property="og:description"
          content="Akhil Padmanabhan, Frontend Dev and Designer based in India. Explore more about me and my works here !"
        />
        <meta property="og:image" content="/thumbnail.png" />
<meta name="keywords" content="PortFolio, about me, about techakhil,techakhil,  techakhil.me, akhil padmanabhan, akhil padmanabhan chathoth" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.techakhil.me/" />
        <meta name="twitter:site" content="@techakhil_me" />
		<meta name="twitter:creator" content="@techakhil_me" />
        <meta property="twitter:title" content="TechAkhil - Portfolio" />
        <meta
          property="twitter:description"
          content="Akhil Padmanabhan, Frontend Dev and Designer based in India. Explore more about me and my works here !"
        />
        <meta property="twitter:image" content="https://www.techakhil.me/thumbnail.png" />
      </Head>
      <div className="flex  justify-between items-center">
        <ul className="md:flex pointer-events-auto	 hidden items-center space-x-20 text-xs antialiased font-medium tracking-widest">
          <li>
            <Link href="/">
              <a
                className={`h-8 flex flex-col justify-center fx-underline ${isActive.home}`}
              >
                HOME
              </a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a
                className={`h-8 flex flex-col justify-center fx-underline ${isActive.work}`}
              >
                WORK
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={`h-8 flex flex-col justify-center fx-underline ${isActive.about}`}
              >
                ABOUT
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                className={`h-8 flex flex-col justify-center fx-underline ${isActive.contact}`}
              >
                CONTACT
              </a>
            </Link>
          </li>
	  <li>
              <a
	      	href="https://techakhil.vercel.app/resume.pdf"
		target="_blank"
                className={`h-8 flex flex-col justify-center fx-underline ${isActive.contact}`}
              >
                RESUME
              </a>
          </li>
        </ul>
        <button
          className="text-light pointer-events-auto	 md:hidden w-10 h-10 relative focus:outline-none"
          onClick={() => {
            setisOpen(!isOpen);
          }}
        >
          <div className="block w-10 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2 ">
            <span
              className={`block rounded-full absolute h-0.5 w-9 bg-current transform transition duration-1000 ease-in-out ${
                isOpen ? "-rotate-45" : "-translate-y-2.5"
              }`}
            ></span>
            <span
              className={`block rounded-full absolute  h-0.5 w-9 bg-current   transform transition duration-1000 ease-in-out ${
                isOpen ? "-translate-x-10 opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block rounded-full absolute  h-0.5 w-9 bg-current transform  transition duration-1000 ease-in-out ${
                isOpen ? "rotate-45" : "translate-y-2.5"
              }`}
            ></span>
          </div>
        </button>
        <Link href="/">
          <a className="pointer-events-auto">
            <motion.svg
              layoutId="loader"
              id="brand"
              width="129"
              height="21"
              viewBox="0 0 129 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.928 17.552V4.832L5.672 4.112H4.16C3.184 4.112 2.632 4.376 2.504 4.904H1.976L0.608 2.936C0.8 2.632 1.048 2.36 1.352 2.12C1.656 1.88 1.952 1.76 2.24 1.76H8.576C9.552 1.76 10.104 1.496 10.232 0.967999H10.76L12.128 2.936C11.936 3.24 11.688 3.512 11.384 3.752C11.08 3.992 10.784 4.112 10.496 4.112H7.808V16.304C7.808 16.896 7.872 17.32 8 17.576C8.128 17.832 8.392 17.96 8.792 17.96V18.704L3.872 20.768L3.488 20C3.84 20 4.176 19.792 4.496 19.376C4.784 18.976 4.928 18.368 4.928 17.552ZM20.6776 3.848C20.5176 3.848 20.3736 3.928 20.2456 4.088V10.424H23.6296V11L22.4296 11.6H20.2456V14C20.2456 15.776 20.4216 16.816 20.7736 17.12C21.3016 17.568 21.8776 17.824 22.5016 17.888C23.1256 17.952 23.7976 17.984 24.5176 17.984V18.68C24.4376 18.68 23.8456 18.904 22.7416 19.352C21.6376 19.784 20.9656 20 20.7256 20C20.2296 20 19.5416 19.616 18.6616 18.848C17.7976 18.08 17.3656 17.248 17.3656 16.352V3.728C17.3656 3.616 18.2776 3.224 20.1016 2.552C21.9416 1.864 22.9976 1.52 23.2696 1.52C23.3656 1.52 23.4776 1.752 23.6056 2.216C23.7336 2.68 23.8776 3.24 24.0376 3.896C24.2136 4.552 24.3896 5.04 24.5656 5.36C24.7576 5.664 25.1096 5.816 25.6216 5.816V6.296C25.2696 6.456 24.6696 6.744 23.8216 7.16C22.9896 7.56 22.5416 7.76 22.4776 7.76C22.2376 7.76 21.9336 7.112 21.5656 5.816C21.1976 4.504 20.9016 3.848 20.6776 3.848ZM35.7807 3.848C35.6207 3.848 35.4767 3.928 35.3487 4.088V14C35.3487 14.672 35.3887 15.216 35.4687 15.632C35.5487 16.032 35.7247 16.432 35.9967 16.832C36.5247 17.6 37.7327 17.984 39.6207 17.984V18.68C39.5407 18.68 38.9487 18.904 37.8447 19.352C36.7407 19.784 36.0687 20 35.8287 20C35.0287 20 34.2687 19.544 33.5487 18.632C32.8287 17.704 32.4687 16.728 32.4687 15.704V3.728C32.4687 3.616 33.3807 3.224 35.2047 2.552C37.0447 1.864 38.1007 1.52 38.3727 1.52C38.4687 1.52 38.5807 1.752 38.7087 2.216C38.8367 2.68 38.9807 3.24 39.1407 3.896C39.3167 4.552 39.4927 5.04 39.6687 5.36C39.8607 5.664 40.2127 5.816 40.7247 5.816V6.296C40.3727 6.456 39.7727 6.744 38.9247 7.16C38.0927 7.56 37.6447 7.76 37.5807 7.76C37.3407 7.76 37.0367 7.112 36.6687 5.816C36.3007 4.504 36.0047 3.848 35.7807 3.848ZM52.6119 10.184V5.96C52.6119 5.368 52.5479 4.944 52.4199 4.688C52.2919 4.432 52.0279 4.304 51.6279 4.304V3.56L56.5479 1.496L56.9319 2.264C56.5799 2.264 56.2439 2.472 55.9239 2.888C55.6359 3.288 55.4919 3.896 55.4919 4.712V10.184H56.6919V10.76L55.4919 11.36V16.448C55.4919 17.424 55.8199 17.976 56.4759 18.104V18.632L54.0519 20C53.6999 19.856 53.3719 19.624 53.0679 19.304C52.7639 18.968 52.6119 18.656 52.6119 18.368V11.36H50.4519V16.304C50.4519 16.896 50.5159 17.32 50.6439 17.576C50.7719 17.832 51.0359 17.96 51.4359 17.96V18.704L46.5159 20.768L46.1319 20C46.4839 20 46.8199 19.792 47.1399 19.376C47.4279 18.976 47.5719 18.368 47.5719 17.552V5.072C47.5719 4.096 47.2439 3.544 46.5879 3.416V2.888L49.0119 1.52C49.3639 1.664 49.6919 1.904 49.9959 2.24C50.2999 2.56 50.4519 2.864 50.4519 3.152V10.832L51.6519 10.184H52.6119ZM63.2844 17.552V3.776C63.2844 3.664 64.1964 3.272 66.0204 2.6C67.8444 1.912 68.8924 1.568 69.1644 1.568C69.4364 1.568 69.8444 1.896 70.3884 2.552C70.9484 3.208 71.2284 3.8 71.2284 4.328V10.616H72.4044V11.192L71.2284 11.792V16.448C71.2284 17.328 71.6124 17.848 72.3804 18.008V18.536L69.7644 20C69.4124 19.856 69.0844 19.624 68.7804 19.304C68.4764 18.968 68.3244 18.656 68.3244 18.368V11.792H66.1644V16.304C66.1644 16.896 66.2284 17.32 66.3564 17.576C66.4844 17.832 66.7484 17.96 67.1484 17.96V18.704L62.2284 20.768L61.8444 20C62.1964 20 62.5324 19.792 62.8524 19.376C63.1404 18.976 63.2844 18.368 63.2844 17.552ZM67.1004 3.8C66.7804 3.8 66.4684 3.92 66.1644 4.16V11.24L67.5804 10.616H68.3244V5.576C68.3244 4.392 67.9164 3.8 67.1004 3.8ZM86.9403 9.344C86.9723 9.456 86.1083 9.864 84.3483 10.568C84.3483 10.904 84.4603 11.464 84.6843 12.248C84.9083 13.016 85.1963 13.824 85.5483 14.672C85.9163 15.52 86.3723 16.264 86.9163 16.904C87.4603 17.544 88.0043 17.864 88.5483 17.864V18.584C87.0603 19.528 86.1163 20 85.7163 20C85.1563 20 84.3963 18.776 83.4363 16.328C82.4923 13.88 82.0203 12.232 82.0203 11.384L81.9003 11.432V16.304C81.9003 16.896 81.9643 17.32 82.0923 17.576C82.2203 17.832 82.4843 17.96 82.8843 17.96V18.704L77.9643 20.768L77.5803 20C77.9323 20 78.2683 19.792 78.5883 19.376C78.8763 18.976 79.0203 18.368 79.0203 17.552V5.12C79.0203 4.144 78.6923 3.592 78.0363 3.464V2.936L80.4603 1.568C80.8123 1.712 81.1403 1.952 81.4443 2.288C81.7483 2.608 81.9003 2.904 81.9003 3.176V10.304C82.3163 10.304 82.7803 10.176 83.2923 9.92C83.8043 9.648 84.0603 9.368 84.0603 9.08V5.96C84.0603 5.368 83.9963 4.944 83.8683 4.688C83.7403 4.432 83.4763 4.304 83.0763 4.304V3.56L87.9963 1.496L88.3803 2.264C88.0283 2.264 87.6923 2.472 87.3723 2.888C87.0843 3.288 86.9403 3.896 86.9403 4.712V9.344ZM99.6791 10.184V5.96C99.6791 5.368 99.6151 4.944 99.4871 4.688C99.3591 4.432 99.0951 4.304 98.6951 4.304V3.56L103.615 1.496L103.999 2.264C103.647 2.264 103.311 2.472 102.991 2.888C102.703 3.288 102.559 3.896 102.559 4.712V10.184H103.759V10.76L102.559 11.36V16.448C102.559 17.424 102.887 17.976 103.543 18.104V18.632L101.119 20C100.767 19.856 100.439 19.624 100.135 19.304C99.8311 18.968 99.6791 18.656 99.6791 18.368V11.36H97.5191V16.304C97.5191 16.896 97.5831 17.32 97.7111 17.576C97.8391 17.832 98.1031 17.96 98.5031 17.96V18.704L93.5831 20.768L93.1991 20C93.5511 20 93.8871 19.792 94.2071 19.376C94.4951 18.976 94.6391 18.368 94.6391 17.552V5.072C94.6391 4.096 94.3111 3.544 93.6551 3.416V2.888L96.0791 1.52C96.4311 1.664 96.7591 1.904 97.0631 2.24C97.3671 2.56 97.5191 2.864 97.5191 3.152V10.832L98.7191 10.184H99.6791ZM110.352 16.928V5.96C110.352 5.368 110.288 4.944 110.16 4.688C110.032 4.432 109.768 4.304 109.368 4.304V3.56L114.288 1.496L114.672 2.264C114.32 2.264 113.984 2.472 113.664 2.888C113.376 3.288 113.232 3.896 113.232 4.712V15.992C113.232 16.424 113.304 16.736 113.448 16.928C113.592 17.104 113.84 17.192 114.192 17.192V17.864C110.944 19.288 109.312 20 109.296 20L108.912 19.232C109.04 19.232 109.192 19.176 109.368 19.064C109.56 18.952 109.72 18.824 109.848 18.68C110.184 18.296 110.352 17.712 110.352 16.928ZM121.025 16.376V5.96C121.025 5.368 120.961 4.944 120.833 4.688C120.705 4.432 120.441 4.304 120.041 4.304V3.56L124.961 1.496L125.345 2.264C124.993 2.264 124.657 2.472 124.337 2.888C124.049 3.288 123.905 3.896 123.905 4.712V14.528C123.905 15.808 124.017 16.576 124.241 16.832C124.625 17.312 125.001 17.6 125.369 17.696C126.217 17.888 127.153 17.984 128.177 17.984V18.656C126.049 19.552 124.833 20 124.529 20C124.241 20 123.841 19.872 123.329 19.616C122.817 19.344 122.305 18.912 121.793 18.32C121.281 17.728 121.025 17.08 121.025 16.376Z"
                fill="#F7F7F7"
              />
            </motion.svg>
          </a>
        </Link>

        {/* <img src="https://placehold.co/120x42" alt="vx" /> */}
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            animate="open"
            initial="closed"
            exit="closed"
            variants={variants}
            className="flex pointer-events-auto	 flex-col md:hidden space-y-8 h-screen items-center justify-center text-xl tracking-widest"
          >
            <motion.li
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <Link
                title="HOME"
                className="h-10 text-4xl font-bold flex flex-col justify-center fx-underline"
                href="/"
              >
                HOME
              </Link>
            </motion.li>
            <motion.li
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <Link
                className="h-10 text-4xl font-bold flex flex-col justify-center fx-underline"
                href="/about"
              >
                ABOUT
              </Link>
            </motion.li>
            <motion.li
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <Link
                className="h-10 text-4xl font-bold flex flex-col justify-center fx-underline"
                href="/work"
              >
                WORK
              </Link>
            </motion.li>
            <motion.li
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <Link
                className="h-10 text-4xl font-bold flex flex-col justify-center fx-underline"
                href="/contact"
              >
                CONTACT
              </Link>
            </motion.li>
	    <motion.li
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <a
                className="h-10 text-4xl font-bold flex flex-col justify-center fx-underline"
                href="/resume.pdf"
		target="_blank"
              >
                RESUME
              </a>
            </motion.li>
            <motion.div
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <SocialTray />
            </motion.div>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
