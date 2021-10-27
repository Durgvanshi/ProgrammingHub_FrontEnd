import "./App.css";
import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Learn from "./components/Learn";
import { useSelector } from "react-redux";
function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          {!isLoggedIn && <Route path="/login" component={LoginPage} />}
          <Route path="/signup" component={SignUpPage} />
          <Route path="/">
            {isLoggedIn && <Learn />}
            {!isLoggedIn && <Redirect to="/login" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
