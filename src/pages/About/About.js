import React from "react";
import { Button } from "carbon-components-react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import Card from "../../components/Card";

// about page data
import { signupSteps } from "./data/about.js";

const About = () => {
  return (
    <>
      <Hero />
      <section className="bx--row section sign-up">
        <h2 className="bx--col-lg-4 section__title">Why sign up?</h2>
        <div className="bx--row sign-up__cards-container" role="group">
          <Card />
        </div>
      </section>

      <section className="bx--row section section--gradient get-started">
        <div
          className="bx--col-lg-4 bx--col-md-3 bx--col-sm-8 get-started__content"
          role="group"
        >
          <h2 className="section__title">Let's get started!</h2>
          <p className="section__text">
            Sign up to be part of our user research studies.
          </p>
          <Button className="button button--sign-up">Sign up</Button>
        </div>

        <div className="bx--col-lg-13=2 bx--col-md-5 bx--col-sm-8">
          <div className="get-started__steps-container" row="group">
            <h2 className="section__title--how-it-works">
              Here's how it works:
            </h2>
            {signupSteps.map(step => (
              <>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__body">{step.body}</p>
              </>
            ))}
          </div>
        </div>
      </section>
      <section className="bx--row section learn-more">
        <div className="bx--col-lg-16">
          <h2 className="section__title">Learn more</h2>
          <p className="section__text">
            Check out some answers to frequently asked questions about the
            program.
          </p>
          <Link className="link link--learn-more" to="/faq" role="link">
            Read the FAQ &rarr;
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
