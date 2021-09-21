import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header";
import ShoppingCart from "./components/Shoppingcart/ShoppingCart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="page-container">
      <Router>
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <ShoppingCart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
