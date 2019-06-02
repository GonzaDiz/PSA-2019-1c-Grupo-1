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

class ModuleOptions extends React.Component {
  render = () => {
    const { onModuleSelection } = this.props;
    
    return (
      <div>
        <ListItem 
          button 
          onClick={onModuleSelection('/proyectos', 'Proyectos')}
        >
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary="Proyectos" />
        </ListItem>
        <ListItem 
          button 
          onClick={onModuleSelection('/productos', 'Productos')}
        >
          <ListItemIcon>
            <BusinessCenterIcon />
          </ListItemIcon>
          <ListItemText primary="Productos" />
        </ListItem>
        <ListItem 
          button 
          onClick={onModuleSelection('/soporte', 'Soporte')}
        >
          <ListItemIcon>
            <HeadsetMicIcon />
          </ListItemIcon>
          <ListItemText primary="Soporte" />
        </ListItem>
        <ListItem 
          button 
          onClick={onModuleSelection('/recursos', 'Recursos')}
        >
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Recursos" />
        </ListItem>
        <ListItem 
          button 
          onClick={onModuleSelection('/ventas_y_finanzas', 'Ventas y Finanzas')}
        >
          <ListItemIcon>
            <MonetizationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Ventas y Finanzas" />
        </ListItem>
      </div>
    );
  }
}

class ModuleSubOptions extends React.Component {
  render = () => {
    return (
      <div>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Year-end sale" />
        </ListItem>
      </div>
    );
  }
}

export { ModuleOptions, ModuleSubOptions };