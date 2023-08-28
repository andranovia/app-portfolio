import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Image from "./image";
import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

const useStyles = makeStyles(() => ({
  loader: {
    backgroundColor: "#EEEEEE",
  },
  loaderInner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EEEEEE",
  },
  imageBlock: {
    position: "absolute",
    transformOrigin: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",


    "&.image-1": {
      width: 200,
      left: "16%",
      bottom: "14%",
    },
    "&.image-2": {
      width: 300,

      right: "12%",
      top: "8%",
    },
   
  },
}));

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: {
    x: -2000,
    opacity: 1,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1.6,
    },
  },
  exit: {
    opacity: 1,
    x: 2000,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const ImageLoader = ({ id, variants }) => {
  const [imageData, setImageData] = React.useState({
    src: "",
    fallback: "",
    alt: id,

  });

  useEffect(() => {
    async function loadImageData() {
      try {
        const imageWebp = await import(`/${id}.webp`);
        const imageJpg = await import(`/${id}.jpg`);

        setImageData({
          src: imageWebp.default,
          fallback: imageJpg.default,
          alt: id,
          
        });
      } catch (error) {
        console.error("Error loading images:", error);
      }
    }

    loadImageData();
  }, [id]);

  return (
    <motion.div className={`image-block ${id}`} variants={variants}>
      <Image src={imageData.src} fallback={imageData.fallback} />
    </motion.div>
  );
};

ImageLoader.propTypes = {
  id: PropTypes.string.isRequired,
  variants: PropTypes.object.isRequired,
};

const Loader = ({ setLoading }) => {
  const classes = useStyles();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={classes.loader}>
        <motion.div
          className={classes.loaderInner}
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
   
           
        >
          <ImageLoader
            variants={item}
            id="white-1"
            className={`${classes.imageBlock} ${classes["image-1"]}`}
           
          />
          <ImageLoader
            variants={item}
            id="white-2"
            className={`${classes.imageBlock} ${classes["image-2"]}`}
          />
          <ImageLoader
            variants={item}
            id="white-3"
            className={`${classes.imageBlock} ${classes["image-3"]}`}
          />
        </motion.div>
      </div>
    </ThemeProvider>
  );
};

Loader.propTypes = {
  setLoading: PropTypes.func.isRequired,
};

export default Loader;
