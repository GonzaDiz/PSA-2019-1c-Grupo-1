import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BusinessIcon from '@material-ui/icons/Business';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GroupIcon from '@material-ui/icons/Group';

class ModuleOptions extends React.Component {
  render = () => {
      const {onModuleSelection} = this.props;

      return (
          <div>
              <ListItem
                  button
                  onClick={onModuleSelection('/proyectos', 'Gestión de proyectos')}
              >
                  <ListItemIcon>
                      <BusinessIcon/>
                  </ListItemIcon>
                  <ListItem
                      Text primary="Gestión de Proyectos"/>
              </ListItem>
              <ListItem
                  button
                  onClick={onModuleSelection('/productos', 'Gestión de productos')}
              >
                  <ListItemIcon>
                      <BusinessCenterIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Gestión de Productos"/>
              </ListItem>
              <ListItem
                  button
                  onClick={onModuleSelection('/soporte', 'Soporte')}
              >
                  <ListItemIcon>
                      <HeadsetMicIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Soporte"/>
              </ListItem>
              <ListItem
                  button
                  onClick={onModuleSelection('/recursos', 'Gestión de Recursos')}
              >
                  <ListItemIcon>
                      <AccountBoxIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Gestión de Recursos"/>
              </ListItem>
              <ListItem
                  button
                  onClick={onModuleSelection('/clientes', 'Gestión de Clientes')}
              >
                  <ListItemIcon>
                      <AccountBoxIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Gestión de Clientes"/>
              </ListItem>
              <ListItem
                  button
                  onClick={onModuleSelection('/ventas_y_finanzas', 'Ventas y Finanzas')}
              >
                  <ListItemIcon>
                      <MonetizationOnIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Ventas y Finanzas"/>
              </ListItem>
          </div>
      );
  }
}


// Aca pueden ver que iconos pueden importar de @material-ui/icons
// https://material.io/tools/icons/?style=baseline
class ModuleSubOptions extends React.Component {
  
  // En esta funcion hay que agregar las sub opciones de cada modulo
  getModuleSubOptions = (moduleSelected) => {
    const { onSubModuleSelection } = this.props;
    
    switch (moduleSelected) {
      case 'proyectos': {
        return (
          <div>
            Opciones en Proyectos
          </div>
        );
      }

      case 'productos': {
        return (
          <div>
            Opciones en Productos
          </div>
        );
      }

      case 'soporte': {
        return (
          <div>
            Opciones en Soporte
          </div>
        );
      }

      case 'recursos': {
        return (
          <div>
            <ListItem 
              button
              onClick={onSubModuleSelection('/recursos', 'Gestión de Recursos')}
            >
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Recursos" />
            </ListItem>
          </div>
        );
      }

      case 'ventas_y_finanzas': {
        return (
          <div>
            Opciones en Ventas y Finanzas
          </div>
        );
      }

      default: return null;
    }
  }
  render = () => {
    const { moduleSelected } = this.props;

    return (
      <div>
        {this.getModuleSubOptions(moduleSelected)}
      </div>
    );
  }
}

export { ModuleOptions, ModuleSubOptions };