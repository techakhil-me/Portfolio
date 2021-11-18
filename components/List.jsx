import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Project from "./Project";
import { useRouter } from "next/router";
import items from "./ProjectData.json";
function Card({ pid, isMob }) {
  const { asPath } = useRouter();

  return (
    <Link href={`${asPath}?pid=` + pid}>
      <li className="card">
        <a>
          <Project
            pid={pid}
            isMob={isMob}
            thumbnail={`./project/${pid}_thumbnail.png`}
          />
        </a>
      </li>
    </Link>
  );
}

export default function List({ isComponent }) {
  const variants = {
    hidden: { opacity: 0 },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        ease: "easeInOut",
        duration: 2,
      },
    },
    exit: {
      opacity: 0,
      x: 0,
      y: -100,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <motion.ul data-scroll-section className="flex flex-wrap">
      <motion.div className="card">
        <span className="grid text-center place-content-center h-full text-2xl font-medium tracking-widest leading-tight text-light uppercase">
          PROMINENT WORKS
        </span>
      </motion.div>
      {isComponent
        ? items.slice(0, 4).map((card) => <Card key={card.pid} {...card} />)
        : items.map((card) => <Card key={card.pid} {...card} />)}
      {isComponent ? (
        <div className="card">
          <span className="grid text-center place-content-center h-full text-2xl font-medium tracking-widest leading-tight text-light uppercase">
            <Link href="/work">
              <a className="px-8 py-5 bg-gray-100 rounded-full text-xs tracking-widest leading-none text-center text-dark uppercase">
                See more
              </a>
            </Link>
          </span>
        </div>
      ) : (
        <motion.div className="card">
          <span className="grid text-center place-content-center h-full text-2xl font-medium tracking-widest leading-tight text-light uppercase">
            More Soon
          </span>
        </motion.div>
      )}
    </motion.ul>
  );
}
