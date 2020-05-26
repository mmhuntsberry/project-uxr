import React from "react";
import { Route, Switch } from "react-router-dom";
import { Content } from "carbon-components-react/lib/components/UIShell";
import GlobalHeader from "../GlobalHeader/GlobalHeader";
import About from "../../pages/About/About";
import FAQ from "../../pages/FAQ/FAQ";

import "./app.scss";

function App() {
  return (
    <div className="app">
      <GlobalHeader />
      <Content className="">
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/faq" component={FAQ} />
        </Switch>
      </Content>
    </div>
  );
}

export default App;
