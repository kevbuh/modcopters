import React from "react";
import "../css/HomeScreen.css";

function HomeScreen() {
  return (
    <section className="homescreen">
      <div className="homescreen__info">
        <div className="homescreen__logo">
          <h1>SPACE COMP</h1>
          <h2 className="homescreen__logoInfo"> Reimagining aerial vehicles</h2>
        </div>
        <div className="homescreen__button">
          <a href="/shop" className="homescreen__buttonField">
            VIEW
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeScreen;
