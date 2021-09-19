import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./GlobalState";

import { Switch, Route } from "react-router-dom";
import Header from "./components/headers/Header";
import Home from "./features/HomePage/Home";
import Auth from "./features/auth/Auth";

import ActivationEmail from "./features/auth/Activation";

import NotFound from "./utils/notfound/NotFound";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
            <Route
              path="/user/activate/:activationtoken"
              exact
              component={ActivationEmail}
            />
            <Route path="/*" exact component={NotFound} />
          </Switch>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
