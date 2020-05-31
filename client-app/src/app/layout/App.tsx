import React, { Fragment } from "react";
import SignupForm from "../../features/user/SignupForm";
import WelcomeForm from "../../features/user/WelcomeForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import FeedDashboard from "../../features/feed/dashboard/FeedDashboard";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomeForm} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/feeds" component={FeedDashboard} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
