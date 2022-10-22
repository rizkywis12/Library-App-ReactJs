import React from "react";
import "../../styles/layouts/LayoutAuth.css";

const LayoutAuth = (props) => {
  const { children } = props;

  return (
    <div className="login-image d-flex" id="login">
     <div className="left-side">
            <h1>Book is a window to the world
            </h1>
        </div>
      <div className="logo d-flex ms-5 justify-content-center flex-column flex-fill right">{children}</div>
    </div>
  );
};

export default LayoutAuth;