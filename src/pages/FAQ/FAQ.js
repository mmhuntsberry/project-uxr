import React from "react";
import { faq } from "./data/faq.js";
import { Link } from "carbon-components-react";

const FAQ = () => {
  return (
    <>
      <section className="bx--row section section--gradient banner--faq">
        <div className="banner__text-container">
          <h4 className="banner__title">Frequently Asked Questions</h4>
          <p className="banner__text">
            Here are some common questions and answers about our exclusive
            research programs.
          </p>
        </div>
      </section>
      <section className="section--faq">
        {faq.map(q => (
          <>
            <h1 className="section__title section__title--faq">{q.title}</h1>
            <p className="section__body section__body--faq">{q.body}</p>
            {q.subItems &&
              q.subItems.map(item => (
                <>
                  <h5 className="subitem__title">{item.title}</h5>
                  <p className="subitem__body">{item.body}</p>
                </>
              ))}
          </>
        ))}

        {/* 
          All of the Questions with links embedded are rendered below. You can not render JSX with links in an object.  Because of Type Coercion a JSX Component will be coerced to a string.  This will need to be refactored if a link is added to any of the above FAQs.
        */}

        <h1 className="section__title section__title--faq">
          How do I sign up for the program?
        </h1>
        <p className="section__body section__body--faq">
          Easy! Just fill out this <Link href="#">sign-up form.</Link>
        </p>
        <h1 className="section__title section__title--faq">
          I’m an existing panel member. Can I update my information?
        </h1>
        <p className="section__body section__body--faq">
          Yes! Just re-submit the <Link href="#">sign-up form </Link>and we'll
          update your information.
        </p>
        <h1 className="section__title section__title--faq">
          I’ve signed up, but I no longer want to participate. How do I opt out?
        </h1>
        <p className="section__body section__body--faq">
          We'll be sorry to see you go! Just fill out this{" "}
          <Link href="#">opt-out form.</Link>
        </p>
      </section>
    </>
  );
};

export default FAQ;
