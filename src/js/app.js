import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, IndexRoute } from 'react-router';
import CommentBox from './component/CommentBox';
import Main from './component/Main';
import Layout from "./component/Layout";

const app = document.getElementById('app');
ReactDOM.render(
    <Router>
      <Route path="/" component={ Layout } link={ Link }>
        <IndexRoute component={Main}/>
        <Route path="calendar" component={ CommentBox } />
      </Route>
    </Router>, app);
