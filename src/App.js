import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/Home";
import { AuthContext } from "./context/AuthContext";

function App() {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Route exact path="/home" component={Home}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
          </Router>
        </div>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
