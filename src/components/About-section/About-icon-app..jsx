import { useEffect, useState } from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { motion, AnimatePresence } from "framer-motion";
import ProfileImage from "/profile1.jpg";

const Reactlogo = "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png";
const cssLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png";
const JsLogo = "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png";
const muiLogo = "https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo.png";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "150vh",
    position: "relative",
    backgroundColor: "#EEEEEE",
    overflow: "hidden",
    marginTop: "-10px",
    marginRight: '20px'
  },
  logoContainer: {
    position: "relative",
    width: "200px",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "-100px",
  },
  logo: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    cursor: "pointer",
  },
  floatingImageContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    perspective: "800px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: "300px",
  },
  floatingImageContainer2: {
    position: "absolute",
    width: "100%",
    height: "100%",
    perspective: "800px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: "150px",
    marginRight: "300px",
  },
  floatingImageContainer3: {
    position: "absolute",
    width: "100%",
    height: "100%",
    perspective: "800px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "350px",
    marginLeft: "40px",
  },
  floatingImageContainer4: {
    position: "absolute",
    width: "100%",
    height: "100%",
    perspective: "800px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  floatingImage: {
    position: "absolute",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },
  floatingImage2: {
    position: "absolute",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },
  floatingImage3: {
    position: "absolute",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },
  floatingImage4: {
    position: "absolute",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },
}));

const AboutIcon = () => {
  const classes = useStyles();
  const [isInView, setIsInView] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const handleAnimationComplete = () => {
    setIsAnimated(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const container = document.getElementById("about-container");
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) {
      setIsAnimated(false);
    }
  }, [isInView]);

  const animation = {
    scale: isAnimated ? 1.5 : 1,
    transition: {
      duration: 0.4,
    },
  };

  const floatingImageAnimation = {
    x: {
      type: "spring",
      from: "-100%",
      to: 0,
    },
    opacity: {
      type: "spring",
      from: 0,
      to: 1,
    },
    transition: {
      duration: 2,
      repeat: isInView ? Infinity : 0,
      repeatType: "mirror",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <div className={classes.container} id="about-container">
          <div className={classes.logoContainer}>
            <AnimatePresence>
              {isInView && (
                <motion.img
                  src={ProfileImage}
                  alt="Profile"
                  className={classes.logo}
                  animate={animation}
                  onAnimationComplete={handleAnimationComplete}
                />
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {isAnimated && (
              <motion.div
                className={classes.floatingImageContainer}
                initial={{ opacity: 0, y: "150%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: "-100%" }}
              >
                <motion.img
                  className={classes.floatingImage}
                  src={Reactlogo}
                  animate={floatingImageAnimation}
                  style={{ padding: "2px" }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isAnimated && (
              <motion.div
                className={classes.floatingImageContainer2}
                initial={{ opacity: 0, y: "150%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: "100%" }}
              >
                <motion.img
                  className={classes.floatingImage2}
                  src={muiLogo}
                  animate={floatingImageAnimation}
                  style={{ padding: "2px" }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isAnimated && (
              <motion.div
                className={classes.floatingImageContainer3}
                initial={{ opacity: 0, y: "150%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: "100%" }}
              >
                <motion.img
                  className={classes.floatingImage3}
                  src={JsLogo}
                  animate={floatingImageAnimation}
                  style={{ padding: "2px" }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isAnimated && (
              <motion.div
                className={classes.floatingImageContainer4}
                initial={{ opacity: 0, y: "150%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: "100%" }}
              >
                <motion.img
                  className={classes.floatingImage4}
                  src={cssLogo}
                  animate={floatingImageAnimation}
                  style={{ padding: "2px" }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default AboutIcon;
