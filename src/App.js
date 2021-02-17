import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Login3 from "./views/Login3";
import Register3 from "./views/Register3";
//import Product from "./views/Product";
import Home from "./views/Home";

function App() {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Route exact path="/home" component={Home}></Route>
          <Route path="/register" component={Register3}></Route>
          <Route path="/login" component={Login3}></Route>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
