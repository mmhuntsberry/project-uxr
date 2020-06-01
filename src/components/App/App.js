import React from "react";
import { Route, Switch } from "react-router-dom";
import { Content } from "carbon-components-react/lib/components/UIShell";
import GlobalHeader from "../GlobalHeader/GlobalHeader";
import GlobalFooter from "../../components/GlobalFooter";
import About from "../../pages/About/About";
import FAQ from "../../pages/FAQ/FAQ";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { motion, AnimatePresence } from "framer-motion";

import "./app.scss";

function App() {
  return (
    <motion.div className="bx--grid bx--grid--full-width uxr-app">
      <GlobalHeader />
      <Content>
        <ScrollToTop />
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/faq" component={FAQ} />
          </Switch>
        </AnimatePresence>
      </Content>
      <GlobalFooter />
    </motion.div>
  );
}

export default App;
