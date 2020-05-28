import React from "react";
import { Route, Switch } from "react-router-dom";
import { Content } from "carbon-components-react/lib/components/UIShell";
import GlobalHeader from "../GlobalHeader/GlobalHeader";
import About from "../../pages/About/About";
import FAQ from "../../pages/FAQ/FAQ";
import GlobalFooter from "../../components/GlobalFooter";

import "./app.scss";

function App() {
  return (
    <div className="bx--grid bx--grid--full-width app">
      <GlobalHeader />
      <Content className="">
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
