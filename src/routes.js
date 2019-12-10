import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RosterEditor from './components/RosterEditor/RosterEditor';
import Landing from './components/Landing/Landing';
import FieldEditor from './components/FieldEditor/FieldEditor';

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/field" component={FieldEditor}/>
    <Route path="/roster" component={RosterEditor} />
  </Switch>
);
