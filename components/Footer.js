import React from "react";

export default function Footer() {
  return (
    <div className="footer-section">
      <img src="/images/logo-dark.svg" alt="Logo" className="footer-image" />
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <div class="social-links">
        <img src="/images/icon-facebook.svg" alt="" />
        <img src="/images/icon-instagram.svg" alt="" />
        <img src="/images/icon-twitter.svg" alt="" />
        <img src="/images/icon-pinterest.svg" alt="" />
      </div>
    </div>
  );
}
