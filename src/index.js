/*
  * @updated by Bluepine
  * @updated at 2019.11.22
  =========================================================
  * Now UI Kit React - v1.0.0
  =========================================================

  * Product Page: https://www.creative-tim.com/product/now-ui-kit-react
  * Copyright 2019 Creative Tim (http://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

  * Designed by www.invisionapp.com Coded by www.creative-tim.com

  =========================================================

  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Router, Route } from 'react-router'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

//added by Bluepine
import history from 'history/history'

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
import './index.css';

// pages for this kit
import Index from "views/Index.js";
import LoginPage from "views/LoginPage.js";
import SignupPage from "views/SignUp.js";
import ProfilePage from "views/profile";
import Idiom from "views/Idiom.js";
import HistoryPanel from "./views/history/HistoryPanel"
import WordBook from "./views/dic/WordBook"

// Import the index reducer and sagas
import IndexReducer from './index-reducer'
import IndexSaga from './index-saga'
import { loadIdioms, loadClassifyList } from './redux/actions/idiom';

import {
  checkIndexAuthorization,
  checkWidgetAuthorization,
} from './lib/check-auth'

// Setup the middleware to watch between the Reducers and the Actions
const sagaMiddleware = createSagaMiddleware()

/*eslint-disable */
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
/*eslint-enable */

const store = createStore(
  IndexReducer,
  composeSetup(applyMiddleware(sagaMiddleware)), // allows redux devtools to watch sagas
)

// Begin our Index Saga
sagaMiddleware.run(IndexSaga)

//Load idiom list and classification list from server at the start.
store.dispatch(loadIdioms());
store.dispatch(loadClassifyList());

/* <Provider store={store}>
    <BrowserRouter history={createBrowserHistory()} >
      <Switch>
        <Switch>
          <Route path="/index" render={props => <Index {...props} />} />
          <Route path="/profile" render={props => <ProfilePage {...props} />} />
          <Route path="/login" render={props => <LoginPage {...props} />} />
          <Route path="/signup" render={props => <SignupPage {...props} />} />
          <Redirect to="/index" />
          <Redirect from="/" to="/index" />
        </Switch>
      </Switch>
    </BrowserRouter>
  </Provider> */

  ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
    <Route exact path="/" render={props => <Index {...props} />} />
      <Route path="/index" render={props => <Index {...props} />} />
      <Route path="/profile" render={props => <ProfilePage {...props} />} onEnter={checkWidgetAuthorization(store)}/>
      <Route path="/login" render={props => <LoginPage {...props} />} />
      <Route path="/signup" render={props => <SignupPage {...props} />} />
      <Route path="/idiom" component = {Idiom} />
      <Route path="/record" render={props => <HistoryPanel {...props} />} />
      <Route path="/dictionary" render={props => <WordBook {...props} />} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
