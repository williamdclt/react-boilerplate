/**
 * App.jsx
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'components/HomePage';
import NotFoundPage from 'components/NotFoundPage';

const App = () =>
 (<div>
   <Switch>
     <Route exact path="/" component={HomePage} />
     <Route component={NotFoundPage} />
   </Switch>
 </div>);

export default App;
