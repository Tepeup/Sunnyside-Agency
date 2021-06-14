import React from "react";
import Message from "./Message/Message";
import Testimonial from "./Testimonials/Testimonial";
import Description from "./Description";
import Footer from "./Footer";

export default function Body() {
  return (
    <div class="container">
      <div class="Header">
        <div class="header-title">WE ARE CREATIVES</div>
        <img
          className="arrowdown"
          src="/images/icon-arrow-down.svg"
          alt="arrow down"
        />
      </div>
      <div class="Two"></div>
      <div class="One">
        <Message
          title="Transform your brand"
          body="We are a full-service creative agency specializing in helping brands grow fast. Engage you clients through compelling visuals that do most of the marketing for you."
          color="yellow"
        />
      </div>
      <div class="Three"></div>
      <div class="Four">
        <Message
          title="Stand out to the right audience"
          body="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
          color="pink"
        />
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
        <div class="testimonial-section">
          <div class="testimonial-title">CLIENT TESTIMONIALS</div>
          <div class="testimonial-container">
            <Testimonial
              image="/images/image-emily.jpg"
              quote="We put our trust in sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
              name="Emily R."
              job="Marketing Director"
            />
            <Testimonial
              image="/images/image-thomas.jpg"
              quote="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
              name="Thomas S."
              job="Chief Operating Officer"
            />
            <Testimonial
              image="/images/image-jennie.jpg"
              quote="Increadible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
              name="Jennie F."
              job="Business Owner"
            />
          </div>
        </div>
      </div>
      <div class="Gallery">
        <div class="Milk"></div>
        <div class="Orange"></div>
        <div class="Cone"></div>
        <div class="Cubes"></div>
      </div>
      <div class="Footer">
        <Footer />
      </div>
    </div>
  );
}
