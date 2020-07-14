import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyled from "./styles/global";
import AppContext from "./hooks";

import Routes from "./routes";

const App: React.FC = () => (
  <Router>
    <AppContext>
      <Routes />
    </AppContext>
    <GlobalStyled />
  </Router>
);

export default App;
