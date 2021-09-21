import Amount from "../Buttons/Amount";
import "../Styles/ShoppingCart.scss";
import ShoppingFooter from "./ShoppingFooter";
const ShoppingCart = () => {
  return (
    <div className="cont">
      <div className="cart-header">
        <div className="cart"> Shopping Cart </div>
      </div>
      <div className="cart-details">
        <table>
          <thead>
            <tr>
              <th id="col1">Product</th>
              <th id="col2">Color</th>
              <th id="col3">Size</th>
              <th id="col4"> Amount </th>
              <th id="col5"> Price </th>
              <th id="col6"> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="product">
                <img
                  className="product-img"
                  src={
                    require("../../assets/stock-photo-full-height-young-boy-standing-near-gray-wall-and-looking-at-camera-studio-shot-1.png")
                      .default
                  }
                  alt="cancel"
                />
                <div className="product-name">T-Shirt Summer Vibes </div>
                <div className="product-code">#261311 </div>
              </td>
              <td className="product-description">black</td>
              <td className="product-description">xl</td>
              <td> <Amount/></td>
              <td className="product-price">$70 </td>
              <td>
                <img
                  src={require("../../assets/CANCEL.png").default}
                  alt="cancel"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ShoppingFooter/>
    </div>
  );
};
export default ShoppingCart;
