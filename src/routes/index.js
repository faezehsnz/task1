import routes from "./Routes";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, component }, index) => (
          <Route exact path={path} component={component} key={index} />
        ))}
      </Switch>
    </Router>
  );
};
export default Routes;
