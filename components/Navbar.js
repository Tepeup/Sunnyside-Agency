import React from "react";
import RightNav from "./RightNav";

export default function Navbar() {
  return (
    <div className="navbar">
      <div class="logo">
        <img src="/images/logo.svg" alt="Logo" />
      </div>
      <RightNav />
    </div>
  );
}
