import React from "react";
import "../css/Lulu.css";

function Lulu() {
  return (
    <section className="lulu">
      <div className="lulu__left">
        <span className="lulu__leftTextTwo">Whats our</span>
        <span className="lulu__leftTextOne">goal?</span>
        <span className="lulu__leftTextSmall">
          Here at SPACE COMP, we are commited to advancing human civilization.
        </span>
      </div>
      <div className="lulu__right">
        <img
          src="https://images.unsplash.com/photo-1481819613568-3701cbc70156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
          alt="lulu"
          className="lulu__image"
        />
      </div>
    </section>
  );
}

export default Lulu;
