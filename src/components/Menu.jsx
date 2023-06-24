import React from "react";
import Pizza from "../components/Pizza";
import data from "../../public/data";
import "../index.css";

const Menu = () => {
  const pizzas = data?.map((pizza, index) => {
    return <Pizza key={index} pizzaObj={pizza} />;
  });
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">{pizzas}</ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};

export default Menu;
