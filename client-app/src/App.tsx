import React, { Fragment } from "react";
import SignupForm from "./features/user/SignupForm";
import WelcomeForm from "./features/user/WelcomeForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
