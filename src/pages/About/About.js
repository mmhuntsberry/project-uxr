import React from "react";
import Hero from "../../components/Hero";
import impact from "../../assets/svg/impact.svg";
import coCreation from "../../assets/svg/co-creation.svg";
import exclusiveContent from "../../assets/svg/exclusive-content.svg";
import compensation from "../../assets/svg/compensation.svg";

const signupSectionData = [
  {
    title: "Exclusive access",
    body:
      "Get a sneak peek at what we're working on in global enterprise software solutions.",
    note: "",
    image: exclusiveContent,
    alt: "animated web pages"
  },
  {
    title: "Co-creation",
    body:
      "Connect with our friendly researchers who want to hear about your experience.",
    note: "",
    image: coCreation,
    alt: "animated text bubble"
  },
  {
    title: "Impact",
    body: "Directly impact the future of the product.",
    note: "",
    image: impact,
    alt: "animated light bulb"
  },
  {
    title: "Compensation",
    body: "Receive compensation for your time in user research studies.*",
    note: "* We are prohibited from compensating government owned entities.",
    image: compensation,
    alt: "animated star"
  }
];

const About = () => {
  return (
    <div className="bx--grid bx--grid--full-width about-page">
      <Hero />
      <section className="bx--row sign-up">
        <h4 className="bx--col-lg-4 sign-up__section-title">Why sign up?</h4>
        <div className="bx--row sign-up__cards-container">
          {signupSectionData.map(d => (
            <div
              className="sign-up__card bx--col-lg-3 bx--col-md-4 bx--col-sm-8"
              key={d.title}
            >
              <img className="sign-up__card-image" src={d.image} alt={d.alt} />
              <h4 className="sign-up__card-title">{d.title}</h4>
              <p className="sign-up__card-body">{d.body}</p>
              {d.note && (
                <span className="sign-up__card-note">
                  <em>{d.note}</em>
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
