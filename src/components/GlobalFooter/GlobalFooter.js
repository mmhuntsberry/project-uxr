import React from "react";
import { Link } from "carbon-components-react";
import logo from "../../assets/svg/svg-footer-logo-ibm.svg";

const GlobalFooter = () => {
  return (
    <footer className="bx--row section footer">
      <div className="bx--row footer__list-container">
        <div className="bx--col-md-1 bx--offset-lg-1 bx--col-lg-1"></div>
        <ul className="bx--col-lg-2 bx--col-md-2 bx--col-sm-8 footer__list">
          <li className="footer__list-item">
            <Link className="footer__link" href="#">
              Privacy
            </Link>
          </li>
          <li className="footer__list-item">
            <Link className="footer__link" href="#">
              Terms of use
            </Link>
          </li>
          <li className="footer__list-item">
            <Link className="footer__link" href="#">
              ibm.com
            </Link>
          </li>
        </ul>
        <ul className="bx--col-lg-4 bx--col-md-2 bx--col-sm-8 footer__list">
          <li className="footer__list-item">
            <Link className="footer__link" href="#">
              Update information
            </Link>
          </li>
          <li className="footer__list-item">
            <Link className="footer__link" href="#">
              Opt out
            </Link>
          </li>
        </ul>
        <div className="bx--col-lg-3 bx--col-md-2 bx--col-sm-8 footer__content">
          <p className="footer__content-text">
            Have questions? Please{" "}
            <Link className="footer__link footer__link--email" href="#">
              email us.
            </Link>
          </p>
          <p className="footer__content-text">Copyright &copy; 2020 IBM</p>
        </div>
      </div>

      <img
        className="bx--col-lg-16 footer__logo"
        src={logo}
        alt="IBM 8 bar logo"
      />
    </footer>
  );
};

export default GlobalFooter;
