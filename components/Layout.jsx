import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cursor from "../components/Cursor";
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll
} from "react-locomotive-scroll";
import { AnimateSharedLayout } from "framer-motion";
import { useRouter } from "next/router";


const Layout = (props) => {
  const containerRef = useRef(null);
  const { pathname } = useRouter();
  const { scroll } = useLocomotiveScroll();
  const path = pathname.split("?")[0];
  return (
    // <div>
    <AnimateSharedLayout type="crossfade">
      <LocomotiveScrollProvider
        options={{
          smooth: true
        }}
        watch={[path]}
        location={path}
        containerRef={containerRef}
        onLocationChange={(scroll) =>
          scroll.scrollTo(0, { duration: 0, disableLerp: true })
        } // If you want to reset the scroll position to 0 for example
        onUpdate={() => console.log("Updated, but not on location change!")}
      ><div data-scroll-container className="w-screen" ref={containerRef}>
          <div
            className="Layout md:px-4 container mx-auto bg-dark antialiased text-light w-screen h-full"
          >
            <Navbar />
            {props.children}
            <Footer scroll={scroll}/>
          </div>
          </div>
      </LocomotiveScrollProvider>

      <Cursor />
    </AnimateSharedLayout>
    // </div>
  );
};

export default Layout;
