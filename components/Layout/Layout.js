import React, { Component } from "react";
import GlobalHeader from "../GlobalHeader";
import GlobalFooter from "../GlobalFooter";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="uxr-app">
        <GlobalHeader />
        {children}
        <GlobalFooter />
      </div>
    );
  }
}

export default Layout;
