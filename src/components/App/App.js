import React from "react";
import { Route, Switch } from "react-router-dom";
import { Content } from "carbon-components-react/lib/components/UIShell";
import GlobalHeader from "../GlobalHeader/GlobalHeader";
import GlobalFooter from "../../components/GlobalFooter";
import About from "../../pages/About/About";
import FAQ from "../../pages/FAQ/FAQ";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import "./app.scss";

function App() {
  return (
    <div className="bx--grid bx--grid--full-width uxr-app">
      <GlobalHeader />
      <Content>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/faq" component={FAQ} />
        </Switch>
      </Content>
      <GlobalFooter />
    </div>
  );
}

export default App;
