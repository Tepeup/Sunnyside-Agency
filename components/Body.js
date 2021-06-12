import React from "react";
import Message from "./Message";
import Testimonial from "./Testimonial";
import Description from "./Description";

export default function Body() {
  return (
    <div class="container">
      <div class="Header"></div>
      <div class="Two"></div>
      <div class="One">
        <Message />
      </div>
      <div class="Three"></div>
      <div class="Four">
        <Message />
      </div>
      <div class="Five">
        <Description
          title="Graphic Design"
          body="Great design makes you momorable. We deliver artwork that underscores your brand message and capture potential clients' attention."
        />
      </div>
      <div class="Six">
        <Description
          title="Photography"
          body="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        />
      </div>
      <div class="Testimonials">
        <div class="testimonial-container">
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
      <div class="Gallery">
        <div class="Milk">div</div>
        <div class="Orange"></div>
        <div class="Cone"></div>
        <div class="Cubes"></div>
      </div>
      <div class="Footer"></div>
    </div>
  );
}
