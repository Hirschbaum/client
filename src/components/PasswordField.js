import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: "25ch",
  },
}));

export default function PasswordField() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
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

  return (
    <div className={classes.root}>
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="standard-adornment-password">Lösenord</InputLabel>
        <Input
          id="standard-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handlePassword("password")}
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
    </div>
  );
}

/*
<TextField
          className={classes.distance}
          fullWidth
          label="lösenord"
          placeholder="Skriv in ditt lösenord"
          required
          type="password"
        />
*/
Use equal casing. Compare these module identifiers:
/*
* 
C:\Users\adrie\projekter\React\client\node_modules\babel-loader\lib\index.js??
ref--5-oneOf-3!
C:\Users\adrie\projekter\React\client\node_modules\webpack\buildin\global.js
    Used by 2 module(s), i. e.
C:\Users\adrie\projekter\React\client\node_modules\babel-loader\lib\index.js
??ref--5-oneOf-3!
C:\Users\adrie\projekter\React\client\node_modules\@pmmmwh\react-refresh-webpack-plugin\client\utils\safeThis.js
* 
C:\Users\adrie\projekter\React\client\node_modules\babel-loader\lib\index.js
??ref--5-oneOf-3!
C:\Users\adrie\projekter\react\client\node_modules\webpack\buildin\global.js
    Used by 1 module(s), i. e.
C:\Users\adrie\projekter\React\client\node_modules\babel-loader\lib\index.js
??ref--5-oneOf-3!
C:\Users\adrie\projekter\react\client\node_modules\popper.js\dist\esm\popper.js
    */