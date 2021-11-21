import React from "react";
import Link from "next/link";

const FourOhFour = () => {
  return (
    <section
      data-scroll-section
      className="flex flex-col items-center justify-center h-screen w-full"
    >
      <div className="inline-flex flex-col space-y-20 items-center justify-center">
        <div className=" uppercase text-stroke">
        <div className="stack" style={{"--stacks": 3}}>
    <span style={{"--index": 0}}>404</span>
    <span style={{"--index": 2}}>404</span>
    <span style={{"--index": 1}}>404</span>
  </div>
        </div>
        <p className="text-base tracking-widest leading-loose text-center text-gray-100 uppercase">
          Sometimes websites break just as much as hearts do.
        </p>
      </div>
      <Link href="/">
        <a className="text-xs py-2 tracking-widest leading-normal text-center text-gray-100 uppercase fx-underline">
          got to Home
        </a>
      </Link>
    </section>
  );
};

export default FourOhFour;
