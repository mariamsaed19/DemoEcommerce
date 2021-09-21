import Button from "../Buttons/Button";
import { useHistory } from "react-router";
import "../Styles/ShoppingFooter.scss";
const ShoppingFooter = () => {
  
  const history = useHistory();

  const routeChange = () =>{ 
    history.push("/checkout");
  }
  return (
    <footer>
      <div className="go-back">
        <img
          src={require("../../assets/noun_Arrow Left_-1.png").default}
          alt="back-arrow"
        />
        <span>Continue Shopping </span>
      </div>

      <div className="input-container">
        <input type="text" placeholder="Promo Code" name="Promocode" />
        <img
          src={require("../../assets/noun_send_2043076.png").default}
          alt="send"
        />
      </div>

      <div className= "total-cost"> Total cost <span> $180 </span> </div>
      <Button className="checkout" onClick={routeChange}> CHECKOUT </Button>
    </footer>
  );
};
export default ShoppingFooter;
