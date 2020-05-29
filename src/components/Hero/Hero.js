import React from "react";
import { Button } from "carbon-components-react";
import small from "../../assets/images/image-background-hero-w_300.jpeg";
import medium from "../../assets/images/image-background-hero-w_400.jpeg";
import large from "../../assets/images/image-background-hero-w_600.jpeg";
import medlarge from "../../assets/images/image-background-hero-w_800.jpeg";
import xlarge from "../../assets/images/image-background-hero-w_1200.jpeg";
import max from "../../assets/images/image-background-hero-w_1500.jpeg";

const Hero = () => {
  return (
    <section className="bx--row hero">
      <div className="bx--col-lg-16 hero__image-container">
        <picture>
          <source srcSet={max} media="(min-width: 1500px)" />
          <source srcSet={xlarge} media="(min-width: 1200px)" />
          <source srcSet={medlarge} media="(min-width: 800px)" />
          <source srcSet={large} media="(min-width: 600px)" />
          <source srcSet={medium} media="(min-width: 400px)" />
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
