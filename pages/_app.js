import React from "react";
import App from "next/app";
import Layout from "../components/Layout/Layout.js";

import "../styles.scss";
import "./index.scss";
import "./faq/faq.scss";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
