import React from "react";
import { Link } from "carbon-components-react";

// hero images
import small from "../../assets/images/image-background-hero-about-w_320.jpg";
import medium from "../../assets/images/image-background-hero-about-w_768.jpg";
import large from "../../assets/images/image-background-hero-about-w_1024.jpg";
import medlarge from "../../assets/images/image-background-hero-about-w_1366.jpg";
import xlarge from "../../assets/images/image-background-hero-about-w_1600.jpg";
import max from "../../assets/images/image-background-hero-about-w_1920.jpg";

const Hero = () => {
  return (
    <section className="bx--row hero">
      <div className="bx--col-lg-16 hero__image-container" role="group">
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

      <div className="bx--col-lg-16 hero__text-container" role="group">
        <h1 className="hero__title">
          Let's shape the future of IBM products, together
        </h1>
        <p className="hero__text">
          We want to hear about your user experiences - what's working and
          what's not working. Join our user research studies and tell us what
          you think.
        </p>
        <Link
          className="button button--hero bx--btn bx--btn--primary"
          href="https://www.surveymonkey.com/r/6DRQ27H"
          target="_blank"
          role="link"
        >
          Sign up
        </Link>
      </div>
    </section>
  );
};

export default Hero;
