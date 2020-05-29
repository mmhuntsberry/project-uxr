import React from "react";
import { signupSectionData } from "../../pages/About/data/about.js";

const Card = () => {
  return (
    <>
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
    </>
  );
};

export default Card;