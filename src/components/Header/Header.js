import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div>
      <span onClick={() => window.scroll(0, 0)} className="header">
        All Trailers
      </span>
    </div>
  );
};

export default Header;
