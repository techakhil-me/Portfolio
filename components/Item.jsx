import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Project from "./Project";
import ScrollArrow from "../assets/ScrollArrow.svg";
import { useRouter } from "next/router";
import items from "./ProjectData.json";
export default function Item({ id }) {
  const { asPath } = useRouter();
  const { category, title, pid, description, link, isMob } = items.find(
    (item) => item.pid === id
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        transition={{ delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="fixed bg-dark flex items-center flex-col  md:flex-row  md:px-4 container w-screen h-full md:h-screen z-50 transform  top-0 left-1/2 -translate-x-1/2"
      >
        <motion.div className="mt-12 mb-6 md:mb-0 md:mt-0 w-full h-full inline-flex flex-col space-y-0 md:space-y-2 items-center justify-center text-center">
          <div className="fixed top-4 left-0 ">
            <Link href={asPath.split("?")[0]}>
              <a className="cursor-pointer flex items-center">
                <div className="transform rotate-90">
                  <ScrollArrow />
                </div>
                <div
                  href="/about"
                  className="text-sm font-medium tracking-widest leading-snug text-gray-100 uppercase"
                >
                  explore other projects
                </div>
              </a>
            </Link>
          </div>
          <p className="text-2xl md:text-4xl font-bold tracking-widest leading-10 uppercase text-stroke">
            {category}
          </p>
          <p className="text-4xl md:text-7xl font-bold tracking-widest uppercase">
            {title}
          </p>
          <p className="text-base leading-loose text-center p-10">
            {description}
          </p>
          <a
            href={link}
            target="_blank"
            className="px-8 py-5 bg-gray-100 rounded-full text-xs tracking-widest leading-none text-center text-dark uppercase"
          >
            See more
          </a>
        </motion.div>
        <motion.div className="w-full h-full flex items-center">
          <Project pid={pid} isMob={isMob} view={false} />
        </motion.div>
      </motion.div>
    </>
  );
}
