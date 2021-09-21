import { useState } from "react";
import "../Styles/Payment.scss";
const PayMethods = [
  "/paypal-logo-preview",
  "/Visa_2014_logo_detail",
  "/1200px-Mastercard-logo",
  "/1200px-Maestro_2016",
  "/1280px-Discover_Card_logo",
  "/ideal-logo-png-transparent",
];

const DeliveryMethod = [
  { logo: "image0", price: "$20.00" },
  { logo: "DPD_logo(red)2015", price: "$12.00" },
  { logo: "DHL_Logo", price: "$15.00" },
  { logo: "DPD_logo(red)-1", price: "$10.00" },
];
const active = { border: "1px solid #FBB03B" };

const Payment = () => {
  const [selectedPay, setPay] = useState(null);
  const [selectedDeli, setDeli] = useState(null);
  const handlePay = (id) => {
    setPay(id);
  };

  const handleDeli = (id) => {
    setDeli(id);
  };
  return (
    <div className="payment-cont">
      <div className="pay-text">Payment Method </div>
      <div className="method-container">
        {PayMethods.map((method) => {
          return (
            <div
              className="pay-method"
              key={method}
              style={selectedPay === method ? active : {}}
              onClick={handlePay.bind(null,method)}
            >
              <img
                key={method}
                src={require(`../../assets${method}.png`).default}
                alt="method"
              />
            </div>
          );
        })}
      </div>
      <div className="pay-text">Delivery Method </div>
      <div className="deli-container">
        {DeliveryMethod.map((method) => {
          return (
            <div
              key={method.logo}
              style={selectedDeli === method.logo ? active : {}}
              onClick={handleDeli.bind(null,method.logo)}
            >
              <img
                src={require(`../../assets/${method.logo}.png`).default}
                alt="method"
              />
              <span>{method.price} </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Payment;
