import React from "react";
import impact from "../assets/svg/impact.svg";
import coCreation from "../assets/svg/co-creation.svg";
import exclusiveContent from "../assets/svg/exclusive-content.svg";
import compensation from "../assets/svg/compensation.svg";

import { Link } from "carbon-components-react";

export const signupSectionData = [
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

export const signupSteps = [
  {
    title: "01 Sign up",
    body: "Fill out a quick survey so we can kow a bit more about you."
  },
  {
    title: "02 Participate",
    body:
      "We'll put you in touch with the right team. Each session is about 1 hour and once a month."
  },
  {
    title: "03 Get compensated",
    body:
      "You’ll get a small thank-you gift like a gift card or a donation to your favorite charity."
  }
];

export const frequentlyAskedQuestions = [
  {
    title: "How long is a typical study",
    body:
      "Each session varies in duration, but they generally last between 30-90 minutes, depending on the type of research study you sign up for."
  },
  {
    title:
      "What kind of people are you looking for? What if I don’t use IBM products?",
    body:
      "We're looking for a broad spectrum of people over the age of 18. Sign up and we may contact you if you fit one of our studies!"
  },
  {
    title: "What takes place during the user research studies?",
    body:
      "When you sign up, you can choose the types of studies that interest you. Here’s some information about the different studies and how they work:",
    subItems: [
      {
        title: "Remote usability study",
        body:
          "In these studies, we’ll gather your feedback via a screen-sharing session with a researcher or a website where you can try something out on your own. You can be almost anywhere in the world, but you’ll need to have a high-speed Internet connection."
      },
      {
        title: "Remote usability study",
        body:
          "In these studies, we’ll gather your feedback via a screen-sharing session with a researcher or a website where you can try something out on your own. You can be almost anywhere in the world, but you’ll need to have a high-speed Internet connection."
      },
      {
        title: "Diary study",
        body:
          "These studies require a small amount of activity every day for several days or weeks. IBM researchers will ask you to respond to questions or take notes about your experience of using a product, and you’ll do everything on your own mobile phone, tablet, or laptop"
      },
      {
        title: "Field Study",
        body:
          "In field studies, IBM researchers will visit you at your office. They'll never show up unannounced though — they’ll always check in with you first to discuss study details and make an appointment."
      },
      {
        title: "Surveys",
        body:
          "For these studies, we’ll simply send you a survey form to fill out. Please note that we don’t typically offer a gift for participating in a survey. "
      },
      {
        title: "Usability study at an IBM office",
        body:
          "These studies work best for people who live close to one of our offices. Typically, you’ll meet one-on-one with an IBM researcher who’ll ask you some questions, have you use a new or existing product, and then get your feedback."
      }
    ]
  },
  {
    title: "What will I receive for participating?",
    body:
      "You will be compensated for your time differently depending on what kind of study you're part of."
  },
  {
    title: "When and how often will I be contacted?",
    body:
      "We can't guarantee that you'll be invited to participate in a study and even if we do, it may not be right away. For example, we may not have a match for you now, but we may contact you in nine months when we launch a new study that seems to be a perfect fit."
  }
];
