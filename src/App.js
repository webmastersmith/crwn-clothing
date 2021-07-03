import React from "react";
import { HomePage } from "./pages/homepage/homepage.component.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
