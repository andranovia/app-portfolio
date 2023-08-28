import { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion, useAnimation } from "framer-motion";

const defaultTheme = createTheme();

const useStyles = makeStyles(() => ({
  heroSection: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    fontFamily: "'Poppins', sans-serif",
    overflow: "hidden",
  },
  Background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#EEEEEE",
  },
  textHeroSection: {
    fontSize: "6rem",
    fontWeight: "bold",
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#272828",
    textAlign: "center",
    zIndex: 1,
  },
  animatedLine: {
    width: "100px",
    height: "2px",
    backgroundColor: "#FF5722",
    marginTop: "16px",
  },
}));

function HeroApp() {
  const classes = useStyles();
  const textControls = useAnimation();
  const controlsTwo = useAnimation();

  const containerVariants = {
    hidden: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };



  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };
  const titleTwoWordvariants = {
    hidden: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
      },
    },
  };

  const spaceVariant = {
    hidden: { opacity: 0, y: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  };

  const animatedTextOne = "Andra";
  const animatedTextTwo = "Renandra";

  useEffect(() => {
    textControls.start("visible");
    controlsTwo.start("animate");
  }, [textControls, controlsTwo]);

  const titleOne = animatedTextOne.split(" ").map((word, wordIndex) => (
    <motion.div
      key={wordIndex}
  
      style={{ display: "inline-block" }}
    >
      {word.split("").map((char, charIndex) => (
        <motion.span
          key={charIndex}
          variants={letterVariants} 
          style={{ display: "inline-block", width: "1ch" }}
        >
          {char}
        </motion.span>
      ))}
      {wordIndex !== animatedTextOne.split(" ").length - 1 && (
        <motion.span
          key={`space-${wordIndex}`}
          variants={spaceVariant}
          style={{ display: "inline-block", width: "0.5ch" }}
        >
          &nbsp;
        </motion.span>
      )}
    </motion.div>
  ));


  const titleTwo = animatedTextTwo.split(" ").map((word, wordIndex) => (
    <motion.div
      key={wordIndex}
      variants={titleTwoWordvariants}
      style={{ display: "inline-block" }}
    >
      {word.split("").map((letter, letterIndex) => (
        <motion.span
          key={letterIndex}
          variants={titleTwoWordvariants}
        >
          {letter}
        </motion.span>
      ))}
      {}
      {wordIndex !== animatedTextTwo.split(" ").length - 1 && (
        <motion.span
          key={`space-${wordIndex}`}
          variants={spaceVariant}
          style={{ display: "inline-block", width: "0.5ch" }}
        >
          &nbsp;
        </motion.span>
      )}
    </motion.div>
  ))
  
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={classes.heroSection}>
        <motion.div
          className={classes.Background}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
        />
        <motion.div
          className={classes.textHeroSection}
          initial="hidden"
        >
          <motion.div
            className={classes.heroTitle}
            variants={containerVariants}
            initial="hidden"
            animate={controlsTwo}
          >
            {titleOne}
          </motion.div>
          <motion.div
            className={classes.heroTitleTwo}
            variants={containerVariants}
            initial="hidden"
            animate={controlsTwo}
          >
            {titleTwo}
           
          </motion.div>

          <motion.div
            className={classes.animatedLine}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          />
        </motion.div>
      </div>
    </ThemeProvider>
  );
}

export default HeroApp;
