import { makeStyles } from "@material-ui/core";
import { blueGrey, grey, teal } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      position: "realitive",
      height: "120vh",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "0",
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: "5vh",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "10vh",
    },
  },
  distance: {
    marginBottom: theme.spacing(2),
  },
  /*link: {
    fontSize: "1.1em",
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      top: "115vh",
      left: theme.spacing(4),
    },
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      bottom: theme.spacing(2),
      left: "40vw",
    },
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      bottom: "20vh",
      left: "46vw",
    },
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      bottom: "10vh",
      left: "46vw",
    },
  },*/
  linkInButton: {
    color: blueGrey[800],

    "&:hover": {
      color: "#fff",
    },
    "&:active": {
      color: "#fff",
      boxShadow: "none",
    },
  },
  margin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  marginDivider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  paper: {
    position: "relative",
    padding: "1.2em",
    margin: "1.2em auto",
    minWidth: 280,
    height: "auto",
  },
  focusButton: {
    fontSize: "1.1em",
    textTransform: "none",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontWeight: 600,
    color: theme.palette.getContrastText(blueGrey[800]),
    backgroundColor: blueGrey[800],
    "&:hover": {
      color: "#fff",
      backgroundColor: grey[700],
      borderColor: grey[700],
    },
    "&:active": {
      color: "#fff",
      boxShadow: "none",
      backgroundColor: teal[600],
      borderColor: teal[600],
    },
  },
  heading: {
    margin: "1.2em auto",
    fontWeight: 700,
    textAlign: "center",
  },
  secondaryButton: {
    border: "2px solid",
    borderColor: blueGrey[800],
    fontSize: "1.1em",
    fontWeight: 600,
    textTransform: "none",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    color: blueGrey[800],
    backgroundColor: "#fff",
    "&:hover": {
      color: "#fff",
      backgroundColor: grey[700],
      borderColor: grey[700],
    },
    "&:active": {
      color: "#fff",
      boxShadow: "none",
      backgroundColor: teal[600],
      borderColor: teal[600],
    },
  },
}));

/*
[theme.breakpoints.down("sm")]: {
      height: "150vh",
    },
    [theme.breakpoints.up("sm")]: {
      height: "auto",
    },
    [theme.breakpoints.up("md")]: {
      height: "90vh",
    },
    [theme.breakpoints.down("lg")]: {
      height: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      height: "70vh",
    },
    */
