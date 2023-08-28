import AboutIcon from "./About-icon-app.";
import AboutTextApp from "./about-text-app";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const useStyles = makeStyles(() => ({

    aboutPage: {
        display: "flex",
        backgroundColor: "#EEEEEE",
        justifyContent: "center",
        alignItems: 'center',
        minHeight: "100vh",
        color: "#B2B2B2",
        padding: defaultTheme.spacing(4),
        background: "#f2f2f2",
      },
      containerAbout: {
        textAlign: "start",
        marginBottom:  defaultTheme.spacing(2), 
        marginTop: "-30px",
      },
      textContainer: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        bottom: '-15rem',
        left: '10px'
       
      },


}));

const AboutApp = () => {
  const classes = useStyles();

  return (
    
    <ThemeProvider theme={defaultTheme}>
      <div className={classes.aboutPage}>
        <div  className={classes.containerAbout}>
        <div className={classes.textContainer}>
            <AboutTextApp />
          </div>
          <AboutIcon />
          
        </div>
      </div>
    </ThemeProvider>

  );
};

export default AboutApp;
