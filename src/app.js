'use strict';

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { NotFound } from "./components/notFound";
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

class App extends BrowserRouter {

  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={() => {
              return <div>Hello World</div>
            }} />
            <Route path='/404' component={NotFound} />
            <Redirect from='*' to='/404' />
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;
