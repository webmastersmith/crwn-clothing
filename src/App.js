import React from "react";
import { HomePage } from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
