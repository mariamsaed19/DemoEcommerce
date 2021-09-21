import "./Styles/Header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="shop-icon">
        <img src={require("../assets/noun_cloth_-1.png").default} alt="logo" />
      </div>
      <div className="shop-title">
        <span>E-</span>Shop
      </div>
      <ul className="shop-catgs">
        <li> Men </li> 
        <li> Women </li>
        <li> Kids </li>
      </ul>

      <ul className="shop-icons">
        <li><img src={require("../assets/noun_Search_-1.png").default} alt="search" /></li> 
        <li><img src={require("../assets/noun_cart_-1.png").default} alt="cart" /></li>
        <li><img src={require("../assets/noun_avatar_2102861 (2).png").default} alt="profile" /></li>
      </ul>
    </header>
  );
};

export default Header;
