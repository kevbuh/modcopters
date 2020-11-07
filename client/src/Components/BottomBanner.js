import React from "react";
import "../css/BottomBanner.css";
import { Link } from "react-router-dom";

function BottomSection() {
  return (
    <section className="bottomsection">
      <Link to="/shop">
        <div className="bottomsection__text">
          <span>View More</span>
        </div>
      </Link>
    </section>
  );
}

export default BottomSection;
