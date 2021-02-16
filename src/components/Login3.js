import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  //Checkbox,
  //FormControlLabel,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  Paper,
  Typography,
} from "@material-ui/core";
//import clsx from "clsx";
import LoginAvatar from "./LoginAvatar";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useStyles } from "./LoginStyles";

const Login3 = () => {
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
    <Grid>
      <Paper elevation={10} className={classes.paper}>
        <Container>
          <Box align="center" className={classes.distance}>
            <LoginAvatar />
            <Typography variant="h5">Välkommen tillbaka</Typography>
          </Box>

          <FormControl fullWidth className={classes.distance}>
            <InputLabel htmlFor="standard-adornment-email">
              E-postadress
            </InputLabel>
            <Input
              id="standard-adornment-email"
              label="e-postadress"
              placeholder="Skriv in din e-postadress"
              required
            />
          </FormControl>

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

          <Button
            className={classes.teal}
            color="primary"
            fullWidth
            size="large"
            textcolor="secondary"
            type="submit"
            variant="contained"
          >
            Logga In
          </Button>
        </Container>
        {/*----------------------------link to register----------------------------*/}
        <Container align="center" className={classes.margin}>
          <Divider variant="fullWidth" className={classes.margin} />
          <Typography variant="overline" className={classes.margin}>
            Jag är ny här
          </Typography>
          <Button
            className={classes.teal}
            color="primary"
            fullWidth
            size="large"
            textcolor="secondary"
            variant="contained"
          >
            Registrera dig
          </Button>
        </Container>

        <Link href="#" className={classes.link} underline="hover">
          Tillbaka till butiken
        </Link>
        {/*onClick={(e) => hereFunction(e)} */}
      </Paper>
    </Grid>
  );
};

export default Login3;
