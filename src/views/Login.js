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
  Typography,
} from "@material-ui/core";
//import clsx from "clsx";
import LoginAvatar from "../components/LoginAvatar";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useStyles } from "../components/formStyles";

const Login = () => {
  const [values, setValues] = useState({
    password: "",
    email: "",
    showPassword: false,
  });

  const handlePassword = (prop) => (event) => {
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
        <Grid container justify="center">
          <Box align="center" className={classes.distance}>
            <LoginAvatar />
            <Typography variant="h5">Välkommen tillbaka</Typography>
          </Box>

          <Grid item xs={10} sm={10} md={8} lg={12} xl={12}>
            <FormControl fullWidth className={classes.distance}>
              <InputLabel htmlFor="standard-adornment-email">
                E-postadress
              </InputLabel>
              <Input
                id="standard-adornment-email"
                label="e-postadress"
                placeholder="Skriv in din e-postadress"
                required
                type="email"
                value={values.email}
              />
            </FormControl>
          </Grid>

          <Grid item xs={10} sm={10} md={8} lg={12} xl={12}>
            <FormControl fullWidth className={classes.distance}>
              <InputLabel htmlFor="standard-adornment-password">
                Lösenord
              </InputLabel>
              <Input
                id="standard-adornment-password"
                onChange={handlePassword("password")}
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

          <Grid container justify="center">
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
                Logga In
              </Button>
            </Grid>
            <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
              <Divider variant="fullWidth" className={classes.marginDivider} />
            </Grid>
          </Grid>
        </Grid>

        {/*----------------------------link to register----------------------------*/}

        <Grid container justify="center">
          <Grid item md={8}>
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

        <Link href="/home" className={classes.link} underline="hover">
          Tillbaka till butiken
        </Link>
      </Grid>
    </Grid>
  );
};

export default Login;
