import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  //Paper,
  Typography,
} from "@material-ui/core";
//import clsx from "clsx";

import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useStyles } from "../components/formStyles";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    password: "",
    passwordAgain: "",
    email: "",
    showPassword: false,
  });

  const handleForm = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const classes = useStyles();

  return (
    <Grid container spacing={3} justify="center" className={classes.container}>
      <Grid item xs={12} sm={6} md={5} lg={3} xl={3}>
        {/*<Paper elevation={10} className={classes.paper}>*/}
        {/*----------------------------link to login----------------------------*/}
        <Grid container>
          <Typography variant="h5" className={classes.heading}>
            Vällkommen tillbaka
          </Typography>

          <Grid container justify="center">
            <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
              <Button
                className={classes.secondaryButton}
                fullWidth
                size="large"
                textcolor="secondary"
                variant="contained"
                href="/login"
              >
                Logga in
              </Button>
            </Grid>
            <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
              <Divider variant="fullWidth" className={classes.marginDivider} />
            </Grid>
          </Grid>
        </Grid>

        {/*----------------------------part to register----------------------------*/}

        <Box align="center" className={classes.distance}>
          <Typography variant="h5" className={classes.heading}>
            Jag är ny här
          </Typography>
        </Box>
        <Grid container justify="center">
          <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
            <FormControl fullWidth className={classes.distance}>
              <InputLabel htmlFor="standard-adornment-name">Namn</InputLabel>
              <Input
                id="standard-adornment-name"
                label="e-postadress"
                value={values.name}
                onChange={handleForm("name")}
                placeholder="Skriv in ditt namn"
                required
                type="text"
              />
            </FormControl>
          </Grid>

          <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
            <FormControl fullWidth className={classes.distance}>
              <InputLabel htmlFor="standard-adornment-email">
                E-postadress
              </InputLabel>
              <Input
                id="standard-adornment-email"
                label="e-postadress"
                value={values.email}
                onChange={handleForm("email")}
                placeholder="Skriv in din e-postadress"
                required
                type="email"
              />
            </FormControl>
          </Grid>
          <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
            <FormControl fullWidth className={classes.distance}>
              <InputLabel htmlFor="standard-adornment-password">
                Lösenord
              </InputLabel>
              <Input
                id="standard-adornment-password"
                onChange={handleForm("password")}
                placeholder="Skriv in ditt lösenord"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
            <FormControl fullWidth className={classes.distance}>
              <InputLabel htmlFor="standard-adornment-passwordAgain">
                Lösenord
              </InputLabel>
              <Input
                id="standard-adornment-passwordAgain"
                onChange={handleForm("passwordAgain")}
                placeholder="Skriv in ditt lösenord"
                type={values.showPassword ? "text" : "password"}
                value={values.passwordAgain}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
              <Button
                className={classes.focusButton}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Registrera dig
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/*onClick={(e) => hereFunction(e)} */}
        {/*</Paper>*/}
      </Grid>
      <Box>
        <Link href="/home" className={classes.link} underline="hover">
          Tillbaka till butiken
        </Link>
      </Box>
    </Grid>
  );
};

export default Register;
