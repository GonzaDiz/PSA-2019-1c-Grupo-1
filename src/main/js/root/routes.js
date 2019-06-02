import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={() => <h1>PSA Flex</h1>} />
    <Route exact path='/proyectos' component={() => <h1>Proyectos</h1>} />
    <Route exact path='/productos' component={() => <h1>Productos</h1>} />
    <Route exact path='/soporte' component={() => <h1>Soporte</h1>} />
    <Route exact path='/recursos' component={() => <h1>Recursos</h1>} />
    <Route exact path='/ventas_y_finanzas' component={() => <h1>Ventas y Finanzas</h1>} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;