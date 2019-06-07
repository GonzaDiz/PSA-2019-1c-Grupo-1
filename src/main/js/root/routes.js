import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ResourcesPage from '../components/recursos/ResourcesPage';

const Routes = ({ loading }) => {
  console.log('routes', loading)
  if (loading) return null;
  return (
    <Switch>
      <Route exact path='/' component={() => <h1>PSA Flex</h1>} />
      <Route exact path='/proyectos' component={() => <h1>Proyectos</h1>} />
      <Route exact path='/productos' component={() => <h1>Productos</h1>} />
      <Route exact path='/soporte' component={() => <h1>Soporte</h1>} />
      <Route exact path='/recursos' component={() => <ResourcesPage />} />
      <Route exact path='/recursos/:resourceId' component={() => <ResourcesPage />} />
      <Route exact path='/ventas_y_finanzas' component={() => <h1>Ventas y Finanzas</h1>} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;