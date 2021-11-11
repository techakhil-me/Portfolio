import React, { useState, useEffect } from "react";
import Project from "../../components/Project";
import {
  motion,
  useAnimation,
  AnimatePresence,
  AnimateSharedLayout
} from "framer-motion";
import Loader from "../../components/Loader";
import { useRouter } from "next/router";

import Item from "../../components/Item";
import List from "../../components/List";
const WorkPage = ({ isComponent = false }) => {
  const [Loading, setLoading] = useState(true);
  const [ProjectId, setProjectId] = useState(false);
  const controls = useAnimation();
  const router = useRouter();
  const variants = {
    hidden: { opacity: 0 },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        ease: "easeInOut",
        duration: 2
      }
    },
    exit: {
      opacity: 0,
      x: 0,
      y: -100,
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  useEffect(() => {
    if (!Loading) {
      controls.start("enter");
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      controls.start("hidden");
    }
  }, [Loading, controls]);
  useEffect(() => {
    const { pid } = router.query;
    if (pid) {
      setProjectId(pid);
    } else setProjectId(false);
  }, [router]);

  return (
    <>
      {/* <AnimateSharedLayout type="crossfade"> */}
      {isComponent ? null : (
        <AnimatePresence exitBeforeEnter initial={false}>
          {Loading ? <Loader /> : null}
        </AnimatePresence>
      )}

      <motion.div
        variants={variants}
        initial="hidden"
        animate={controls}
        exit="exit"
        className="w-full"
        className="opacity-1 transition duration-2000"
      >
        <List isComponent={isComponent} controls={controls} />
      </motion.div>
      <AnimatePresence>
        {ProjectId && <Item id={ProjectId} key="item" />}
      </AnimatePresence>
      {/* </AnimateSharedLayout> */}
    </>
  );
};

export default WorkPage;
