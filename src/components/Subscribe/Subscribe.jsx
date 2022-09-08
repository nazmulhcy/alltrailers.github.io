import "./subscribe.css";

import React from "react";

const Subscribe = () => {
  const Submited = () => {
    alert("Submitted Successfully");
  };
  return (
    <div className="subcribe">
      <div className="mail">
        <div className="mailContainer">
          <span>Sign up for the new updates</span>
          <div className="mailInput">
            <input type="text" placeholder="Your Email" />
            <button onClick={Submited}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
