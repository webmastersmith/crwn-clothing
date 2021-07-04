import React from "react";
import { HomePage } from "./pages/homepage/homepage.component.jsx";
import Hats from "./pages/shop/hats/hats.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hats" component={Hats} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
