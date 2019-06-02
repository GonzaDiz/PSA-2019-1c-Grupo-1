import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { TicketManagement } from '../components/support/tickets/TicketManagement';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={<TicketManagement />} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;