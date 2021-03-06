import { useFormik } from "formik";
import * as yup from "yup";
import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import LoginAvatar from "../components/LoginAvatar";
import { useStyles } from "../components/formStyles";
import axios from "axios";

const validationSchema = yup.object({
  email: yup
    .string("Ange din e-postadress")
    .email("Ange en giltig e-postadress")
    .required("Detta är ett obligatoriskt fält"),
  password: yup
    .string("Ange ditt lösenord")
    .min(8, "Ange minst 8 tecken, utan mellanslag")
    .required("Detta är ett obligatoriskt fält"),
});

const Login3 = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Login values", formik.values);
      handleSubmit();
    },
  });

  const handleSubmit = () => {
    axios
      .post("/api/users/login", {
        email: formik.values.email,
        password: formik.values.password,
      })
      .then((res) => {
        console.log("LOGIN SUCCESS", res);
        alert("Du är nu inloggat.");
        //if time left: modal for this message
      })
      .catch((err) => {
        console.log("LOGIN FAILED", err);
        alert("Något gick fel. E-post eller lösenord stämmer inte.");
        //if time left: modal for this message
      });
  };

  const classes = useStyles();

  return (
    <Grid container spacing={3} justify="center" className={classes.container}>
      <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container justify="center">
            {/*---------------------------- LOGIN HEADLINE -------------------------------------- */}
            <Box align="center" className={classes.distance}>
              <LoginAvatar />
              <Typography variant="h5">Välkommen tillbaka</Typography>
            </Box>
            {/*-------------------------------- EMAIL INPUT -------------------------------------- */}
            <Grid item xs={10} sm={10} md={8} lg={12} xl={12}>
              <TextField
                className={classes.distance}
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            {/*-------------------------------- PASSWORD INPUT -------------------------------------- */}
            <Grid item xs={10} sm={10} md={8} lg={12} xl={12}>
              <TextField
                className={classes.distance}
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            {/*-------------------------------- LOGIN BUTTON -------------------------------------- */}
            <Grid item xs={10} sm={10} md={8} lg={12} xl={12}>
              <Button
                className={classes.focusButton}
                color="primary"
                fullWidth
                size="large"
                textcolor="secondary"
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
            {/*-------------------------------- DIVIDER <HR/> -------------------------------------- */}
            <Grid item xs={10} sm={10} md={8} lg={12} xl={12}>
              <Divider variant="fullWidth" className={classes.marginDivider} />
            </Grid>
            {/*------------------------------ LINK TO REGISTER ------------------------------------ */}
            <Grid
              container
              justify="center"
              alignItems="center"
              alignContent="center"
            >
              <Grid container>
                <Typography variant="overline" className={classes.heading}>
                  Jag är ny här
                </Typography>
              </Grid>
              <Grid item xs={10} sm={10} md={8} lg={12} xl={12}>
                <Button
                  className={classes.secondaryButton}
                  color="primary"
                  fullWidth
                  size="large"
                  textcolor="secondary"
                  variant="contained"
                  href="/register"
                >
                  Registrera dig
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
        {/*---------------------------- LINK BACK TO THE SHOP ---------------------------------- */}
        <Grid container justify="center">
          <Link href="/home" className={classes.link} underline="hover">
            Tillbaka till butiken
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login3;
