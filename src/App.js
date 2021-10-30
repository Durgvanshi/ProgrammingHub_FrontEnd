import "./App.css";
import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import LoginPage from "./components/auth/LoginPage";
import SignUpPage from "./components/auth/SignUpPage";
import Learn from "./components/Learn";
import { useSelector } from "react-redux";
function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const token=useSelector((state)=>state.user.token)
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          {!isLoggedIn && <Route path="/login" component={LoginPage} />}
          <Route path="/signup" component={SignUpPage} />
          <Route path="/">
            {token && <Learn />}
            {!token && <Redirect to="/login" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
