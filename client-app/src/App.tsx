import React, { Fragment } from "react";
import { Grid, Image, Container, Responsive } from "semantic-ui-react";
import LoginForm from "./features/user/LoginForm";
import SignupForm from "./features/user/SignupForm";
import WelcomeForm from "./features/user/WelcomeForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./app/layout/Login";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomeForm />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
