import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { isMobile } from "react-device-detect";
import Phone from "./Phone";
import Laptop from "./Laptop";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Project = ({ isMob = false, pid, view = true }) => {
  const ProjectRef = useRef(null);
  const refItem = useRef(null);

  return (
    <motion.div
      ref={ProjectRef}
      // layoutId={`container-${pid}`}
      className="Container__ProjectModel_reveal Container__ProjectModel cursor-pointer relative h-full w-full"
    >
      <div className="relative w-full h-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-screen w-screen overflow-hidden"
          layoutId={`image-${pid}`}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <img
            className="object-cover  h-full"
            src={`./project/${pid}_thumbnail.png`}
            alt=""
            draggable={false}
          />
        </motion.div>
      </div>
      {!isMobile && view ? (
        <div
          ref={refItem}
          className="opacity-0 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 ProjectModel"
        >
          {isMob ? (
            <Phone key={pid} ProjectRef={ProjectRef} pid={pid} />
          ) : (
            <Laptop ProjectRef={ProjectRef} pid={pid} />
          )}
        </div>
      ) : null}
    </motion.div>
  );
};

export default Project;
