import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroText: {
    fontFamily: "'Poppins', sans-serif",
    marginBottom: theme.spacing(14),
    textAlign: "center",  
  },

  heroTitle: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    color: "#2d2d2d",
    position: "relative",
    left: '10px',
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    display: "flex",
    justifyContent: "left",  
    "&:nth-of-type(1)": {
      marginTop: theme.spacing(4),
    },
    "&:nth-of-type(3)": {
      marginBottom: theme.spacing(4),
    },
  },
  heroSubTextOne: {
    fontSize: "1.5rem",
    fontWeight: '400',
    color: "#757575",
    position: "relative",
    top: '5vh',
    left: '-10px',
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    display: "flex",
    justifyContent: "left",   
    alignItems: "flex-start",   
  },
  heroSubTextTwo: {
    fontSize: "1.5rem",
    fontWeight: '400',
    color: "#969696",
    position: "relative",
    top: '5vh',
    left: '-10px',
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    display: "flex",
    justifyContent: "left",   
    alignItems: "flex-start",   
  },
  heroSubTextThree: {
    fontSize: "1.5rem",
    fontWeight: '400',
    color: "#c2c1c1",
    position: "relative",
    top: '5vh',
    left: '-10px',
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    display: "flex",
    justifyContent: "left",   
    alignItems: "flex-start",   
  },
}));


export default function AboutTextApp() {
  const classes = useStyles();

  const titleAbout = "About Andra's";

  const subText = "Hi, I'm Andra - a web explorer. I design and build digital wonders ";
  const subtexttwo = "that marry style and functionality. Let's bring your ideas to life ";
  const subtextThree = "and make  the web a little more awesome together!";



  const controlsOne = useAnimation();
  const controlsTwo = useAnimation();
  const controlsThree = useAnimation();
  const controlsFour = useAnimation();

  useEffect(() => {
    controlsOne.start("animate");
    controlsTwo.start("animate");
    controlsThree.start("animate");
    controlsFour.start("animate");
  }, [controlsOne, controlsTwo, controlsThree, controlsFour]);

  const containerVariants = {
    hidden: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
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
  const subTextWordVariants = {
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

  const subTextLetterVariants = {
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

  const titleTwoElements = titleAbout.split("").map((char, charIndex) => {
    if (char === " ") {
      return (
        <motion.span
          key={charIndex}
          variants={letterVariants}
          style={{ display: "inline-block", width: "1ch" }}
        >
          {" "}
        </motion.span>
      );
    }
    return (
      <motion.span
        key={charIndex}
        variants={letterVariants}
        style={{ display: "inline-block", width: "1ch" }}
      >
        {char}
      </motion.span>
    );
  });

  return (
    <div>
      <div className={classes.heroText}>
        <motion.div
          className={classes.heroTitle}
          variants={containerVariants}
          initial="hidden"
          animate={controlsTwo}
        >
          {titleTwoElements}
        </motion.div>
        <motion.div
          className={classes.heroSubTextOne}
          variants={containerVariants}
          initial="hidden"
          animate={controlsThree}
        >
          {subText.split(" ").map((word, wordIndex) => (
            <motion.div
              key={wordIndex}
              variants={subTextWordVariants}
              style={{ display: "inline-block" }}
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  variants={subTextLetterVariants}
                >
                  {letter}
                </motion.span>
              ))}
              {}
              {wordIndex !== subText.split(" ").length - 1 && (
                <motion.span
                  key={`space-${wordIndex}`}
                  variants={spaceVariant}
                  style={{ display: "inline-block", width: "0.5ch" }}
                >
                  &nbsp;
                </motion.span>
              )}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className={classes.heroSubTextTwo}
          variants={containerVariants}
          initial="hidden"
          animate={controlsThree}
        >
          {subtexttwo.split(" ").map((word, wordIndex) => (
            <motion.div
              key={wordIndex}
              variants={subTextWordVariants}
              style={{ display: "inline-block" }}
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  variants={subTextLetterVariants}
                >
                  {letter}
                </motion.span>
              ))}
              {}
              {wordIndex !== subtexttwo.split(" ").length - 1 && (
                <motion.span
                  key={`space-${wordIndex}`}
                  variants={spaceVariant}
                  style={{ display: "inline-block", width: "0.5ch" }}
                >
                  &nbsp;
                </motion.span>
              )}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className={classes.heroSubTextThree}
          variants={containerVariants}
          initial="hidden"
          animate={controlsThree}
        >
          {subtextThree.split(" ").map((word, wordIndex) => (
            <motion.div
              key={wordIndex}
              variants={subTextWordVariants}
              style={{ display: "inline-block" }}
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  variants={subTextLetterVariants}
                >
                  {letter}
                </motion.span>
              ))}
              {}
              {wordIndex !== subtextThree.split(" ").length - 1 && (
                <motion.span
                  key={`space-${wordIndex}`}
                  variants={spaceVariant}
                  style={{ display: "inline-block", width: "0.5ch" }}
                >
                  &nbsp;
                </motion.span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}



