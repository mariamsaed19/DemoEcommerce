import Form from "./Form";
import "../Styles/Checkout.scss";
import { Fragment } from "react";
import { useHistory } from "react-router";
import Button from "../Buttons/Button";
import Payment from "./Payment";
const Checkout = () => {
      
  const history = useHistory();

  const routeChange = () =>{ 
    history.push("/");
  }
  return (
    <Fragment>
      <div className="check-header"> Shipping and Payment </div>
      <div className="check-cont">
        <div className="info">
          <div>
            <Button className="log-in"> Log In </Button>
            <Button className="sign-up">Sign Up</Button>
            <div className="check-info">Shipping information </div>
          </div>
          <Form />
        </div>
        <div className="payment">
          <Payment />
        </div>
        <div className="check-cart">
          <div className="check-info">Your cart </div>
          <div className="check-grid-cart">
            <img
              src={
                require("../../assets/stock-photo-full-height-young-boy-standing-near-gray-wall-and-looking-at-camera-studio-shot-773747848.png")
                  .default
              }
              alt="img"
            />
            <span className="check-name">T-Shirt Summer Vibes </span>
            <span className="check-code"> #261311</span>
            <span className="check-price">$89.99 </span>
          </div>
          <Button className="total"> Total cost $89,99 </Button>
        </div>
        <div className="check-footer">
          <div className="go-back" onClick={routeChange}>
            <img
              src={require("../../assets/noun_Arrow Left_-1.png").default}
              alt="back-arrow"
            />
            <span>Back </span>
          </div>
          <Button className="b1"> CONTINUE SHOPPING </Button>
          <Button className="b2"> PROCEED TO PAYMENT </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Checkout;
