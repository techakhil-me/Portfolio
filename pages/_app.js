import "tailwindcss/tailwind.css";
import "./styles.css";
// import "./style.css";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Layout from "../components/Layout";
import React from "react";

// This default export is required in a new `pages/_app.js` file.
export default function Portfolio({ Component, pageProps, router }) {
  const url = `https://wallis.dev${router.route}`;
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence exitBeforeEnter initial={false}>
        <Layout>
          <Component {...pageProps} key={url} />
        </Layout>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
