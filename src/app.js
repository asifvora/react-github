'use strict';

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { Home } from "./components/home";
import { GitHub } from "./components/github";
import { NotFound } from "./components/not-found";
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

class App extends BrowserRouter {

  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/github" component={Home} />
            <Route exact path="/github/:username" component={GitHub} />
            <Route path='/404' component={NotFound} />
            <Redirect from='*' to='/404' />
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;
