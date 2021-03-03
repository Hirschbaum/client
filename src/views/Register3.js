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
import { useStyles } from "../components/formStyles";
import axios from "axios";

const validationSchema = yup.object({
  email: yup
    .string("Ange din e-postadress")
    .email("Ange en giltig e-postadress")
    .required("Detta är ett obligatoriskt fält"),
  name: yup
    .string("Ange ditt namn")
    .min(2, "Ange minst 2 tecken, utan mellanslag")
    .required("Detta är ett obligatoriskt fält")
    .matches(/^(?!\s+$).*/, "Ange minst 2 tecken, utan mellanslag"),
  password: yup
    .string("Ange ditt lösenord")
    .min(8, "Ange minst 8 tecken, utan mellanslag")
    .required("Detta är ett obligatoriskt fält")
    .matches(/^\S*$/, "Ange minst 8 tecken, utan mellanslag"),
  passwordConfirm: yup
    .string("Bekräfta ditt lösenord")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Register3 = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("ON SUBMIT", formik.values);
      handleSubmit();
    },
  });

  const handleSubmit = () => {
    axios
      .post("/api/users/register", {
        name: formik.values.name,
        email: formik.values.email,
        password: formik.values.password,
      })
      .then((res) => {
        console.log("GOT RESPONSE: REGISTRERING NEW USER", res);
        alert("registrering lyckades");
        //forward to login
      })
      .catch((err) => {
        console.log("error by registrering new user", err);
        alert("något gick fel");
        //if time left: errorMsg as modal
      });
  };

  const classes = useStyles();

  return (
    <Grid container spacing={3} justify="center" className={classes.container}>
      <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container justify="center">
            {/*---------------------------- REGISTER HEADLINE -------------------------------------- */}
            {/*--------- LINK TO LOGIN ------------------------------------------------------------- */}
            <Box align="center" className={classes.distance}>
              <Typography variant="h5">Välkommen tillbaka</Typography>
            </Box>
            <Grid item xs={10} sm={10} md={8} lg={12} xl={12}>
              <Button
                className={classes.secondaryButton}
                color="primary"
                fullWidth
                size="large"
                textcolor="secondary"
                variant="contained"
                href="/login"
              >
                Logga in
              </Button>
            </Grid>
            {/*-------------------------------- DIVIDER <HR/> -------------------------------------- */}
            <Grid item xs={10} sm={10} md={8} lg={12} xl={12}>
              <Divider variant="fullWidth" className={classes.marginDivider} />
            </Grid>
            {/*-------------------------------- NAME INPUT REGISTER -------------------------------------- */}
            <Grid item xs={10} sm={10} md={8} lg={12} xl={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Namn"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                className={classes.distance}
              />
            </Grid>
            {/*-------------------------------- EMAIL INPUT REGISTER -------------------------------------- */}
            <Grid item xs={10} sm={10} md={8} lg={12} xl={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Epostadress"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                className={classes.distance}
              />
            </Grid>
            {/*-------------------------------- PASSWORD INPUT -------------------------------------- */}
            <Grid item xs={10} sm={10} md={8} lg={12} xl={12}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Lösenord"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                className={classes.distance}
              />
            </Grid>
            {/*-------------------------------- PASSWORD CONFIRM -------------------------------------- */}
            <Grid item xs={10} sm={10} md={8} lg={12} xl={12}>
              <TextField
                fullWidth
                id="passwordConfirm"
                name="passwordConfirm"
                label="Bekräfta lösenord"
                type="password"
                value={formik.values.passwordConfirm}
                onChange={formik.handleChange}
                error={
                  formik.touched.passwordConfirm &&
                  Boolean(formik.errors.passwordConfirm)
                }
                helperText={
                  formik.touched.passwordConfirm &&
                  formik.errors.passwordConfirm
                }
                className={classes.distance}
              />
            </Grid>
            {/*-------------------------------- REGISTER BUTTON -------------------------------------- */}
            <Grid item xs={10} sm={10} md={8} lg={12} xl={12}>
              <Button
                className={classes.focusButton}
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Registrera dig
              </Button>
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

export default Register3;
