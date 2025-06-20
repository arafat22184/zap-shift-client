import React from "react";
import logo from "../../../assets/logo.png";

const ProfastLogo = () => {
  return (
    <div className="flex items-end">
      <img className="mb-2" src={logo} alt="logo" />
      <p className="-ml-2 text-3xl font-extrabold">ProFast</p>
    </div>
  );
};

export default ProfastLogo;
