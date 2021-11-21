import SocialTray from "../../components/SocialTray";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Loader from "../../components/Loader";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [Loading, setLoading] = useState(true);
  const [fsubmit, setFsubmit] = useState(false);
  const controls = useAnimation();
  const formEl = useRef(null);
  const [GlitchCount, setCount] = useState(0);

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
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_ctagpxn",
        "template_4xpgavf",
        formEl.current,
        "user_8qGnTYzGbf2u0N4z5xjCL"
      )
      .then(
        (result) => {
          setFsubmit(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // emailjs.send("service_ctagpxn","template_4xpgavf",{
    //   name: "Akhil Padmanabhan",
    //   email: "turboracer47@gmail.com",
    //   message: "heyya",
    //   });
  };
  useEffect(() => {
    if (GlitchCount < 5) {
      setTimeout(() => setLoading(!Loading), 200);
      setCount(GlitchCount + 1);
    } else setLoading(false);
  }, [Loading]);
  useEffect(() => {
    if (!Loading) {
      setTimeout(() => {
        controls.start("enter");
      }, 1000);
    } else {
      controls.start("hidden");
    }
  }, [Loading, controls]);
  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        {Loading ? <Loader /> : null}
      </AnimatePresence>
      <motion.section
        variants={variants}
        animate={controls}
        data-scroll-section
        className="h-full min-h-screen w-full space-y-4 text-light flex flex-col items-center justify-center uppercase"
      >
        {!fsubmit ? (
          <>  
            <div className="w-full flex md:space-x-6 md:flex-row flex-col items-center justify-center">
              <div className="md:text-6xl text-5xl max-w-lg font-bold md:text-left text-center">
                please contact the <span className="text-stroke-sm">admin</span>{" "}
                of this page
              </div>
              <form
                ref={formEl}
                // method="POST"
                id="contact"
                onSubmit={handleSubmit}
                // data-email="example@gmail.com"
                // action="https://script.google.com/macros/s/AKfycbxlm2wfg30HgkG2vuGDKmF-Y0t8KgtyuIFIINXS83p_/dev"
                className="flex flex-col w-full space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  className="bg-transparent border-b-2 p-1 w-full"
                  placeholder="Name"
                  required
                />
                <input
                  name="email"
                  type="text"
                  className="bg-transparent border-b-2 p-1 w-full"
                  placeholder="Email Address"
                  required
                />
                <textarea
                  name="message"
                  className="bg-transparent border-2 p-1"
                  rows="5"
                  placeholder="Hi,
  I Just came across your website and I...."
                  required
                ></textarea>
                <div className="flex md:flex-row flex-col items-center md:space-x-24">
                <a><button type="submit" className="py-6 flex space-x-12">
                  <span
                    href="/"
                    className="px-8 py-5 bg-gray-100 rounded-full text-xs tracking-widest leading-none text-center text-dark uppercase"
                  >
                    Send
                  </span>
                </button></a>
                <SocialTray />
                </div>
              </form>
            </div>
          </>
        ) : (
          <div className="md:text-6xl text-5xl">
            Thank you, I'll try to get in touch with you!
          </div>
        )}
      </motion.section>
    </>
  );
};

export default ContactPage;
