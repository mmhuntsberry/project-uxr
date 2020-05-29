import React from "react";
import { Button } from "carbon-components-react";

// hero images
import small from "../../assets/uxr-images/image-background-hero-w_320.jpg";
import medium from "../../assets/uxr-images/image-background-hero-w_768.jpg";
import large from "../../assets/uxr-images/image-background-hero-w_1024.jpg";
import medlarge from "../../assets/uxr-images/image-background-hero-w_1366.jpg";
import xlarge from "../../assets/uxr-images/image-background-hero-w_1600.jpg";
import max from "../../assets/uxr-images/image-background-hero-w_1920.jpg";

const Hero = () => {
  return (
    <section className="bx--row hero">
      <div className="bx--col-lg-16 hero__image-container">
        <picture>
          <source srcSet={max} media="(min-width: 1922px)" />
          <source srcSet={xlarge} media="(min-width: 1600px)" />
          <source srcSet={medlarge} media="(min-width: 1024px)" />
          <source srcSet={large} media="(min-width: 768px)" />
          <source srcSet={medium} media="(min-width: 480px)" />
          <img
            src={small}
            alt="A man conducting research"
            className="hero__image"
          />
        </picture>
      </div>

      <div className="bx--col-lg-16 hero__text-container">
        <h4 className="hero__title">
          Let's shape the future of IBM products, together
        </h4>
        <p className="hero__text">
          We want to hear about your user experiences - what's working and
          what's not working. Join our user research studies and tell us what
          you think.
        </p>
        <Button className="button button--hero" onClick={() => {}}>
          Sign up
        </Button>
      </div>
    </section>
  );
};

export default Hero;
