import React from "react";

const Footer = () => {
  const currentHour = 22; //new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = currentHour >= openHour && currentHour <= closeHour;
  console.log(currentHour, isOpen);

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We're open from {openHour}:00 to {closeHour}:00. Come visit us or
            order online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
