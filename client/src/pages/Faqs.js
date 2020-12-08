import React from "react";
import "../css/Faqs.css";

function Faqs() {
  return (
    <section className="faqs">
      <div className="faqs__title">FAQS</div>
      <div className="faqs__questions">
        <div className="faqs__question">
          <span className="faqs__questionTitle">How do I place an order?</span>
          <span className="faqs__questionInfo">
            Visit our "INFO" page and then click "add to cart". 
            </span>
            <span className="faqs__questionInfo">
            Then proceed to the cart in the upper left corner!
          </span>
        </div>
        <div className="faqs__question">
          <span className="faqs__questionTitle">Custom Made?</span>
          <span className="faqs__questionInfo">
            Yes, we manufacture everything in house.
          </span>
        </div>
        <div className="faqs__question">
          <span className="faqs__questionTitle">
            How do I contact SPACE COMP?
          </span>
          <span className="faqs__questionInfo">
            Visit our contact page.
          </span>
        </div>
        
        
        
        
      </div>
    </section>
  );
}

export default Faqs;
