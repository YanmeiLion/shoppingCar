import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
// import Products from './components/products';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        {/* <Route path='/' exact component={Products}></Route> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
