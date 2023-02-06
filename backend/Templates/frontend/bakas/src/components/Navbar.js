import React from "react";
import { ReactComponent as Logo } from "../assets/BakasLogo.svg";
import { ReactComponent as Button } from "../assets/contactusbutton.svg";

const Navbar = () => {
  return (
    <div className="flexRL">
      <Logo className="navbar_items" />
      <Button className="navbar_items btn" />
    </div>
  );
};

export default Navbar;
