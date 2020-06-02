import React from "react";
import { Link as CarbonLink } from "carbon-components-react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import Card from "../../components/Card";
import { useMetadata } from "use-metadata";
import { motion } from "framer-motion";

// about page data
import { signupSteps } from "./data/about.js";

const About = () => {
  const title = "About | IBM Experience Research";
  const description = "This is an about description";

  // set meta data for the prerendered routes
  useMetadata({ title, description });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
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
          <CarbonLink
            className="bx--btn bx--btn--primary button button--sign-up"
            href="https://www.surveymonkey.com/r/6DRQ27H"
            target="_blank"
          >
            Sign up
          </CarbonLink>
        </div>

        <div className="bx--col-lg-13=2 bx--col-md-5 bx--col-sm-8">
          <div className="get-started__steps-container" row="group">
            <h2 className="section__title--how-it-works">
              Here's how it works:
            </h2>
            {signupSteps.map(step => (
              <div key={step.title}>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__body">{step.body}</p>
              </div>
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
    </motion.div>
  );
};

export default About;
