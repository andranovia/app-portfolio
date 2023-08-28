import Navbar from "./components/nav-page/nav-section";
import HeroApp from "./components/hero-section/hero-app";
import "./App.css";
import AboutApp from "./components/About-section/About-app";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./components/Loader-section/LoaderImage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimatePresence mode='wait'>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <Navbar />
          <HeroApp />
          <AboutApp />
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
