import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import { withRouter } from 'react-router-dom';
import AppContext from '../root/AppContext';

class MenuSheet extends React.Component {
  static contextType = AppContext;
  
  handleLogout = () => {

  }

  render = () =>{
    const { open, onClose, history } = this.props;
    return (
      <SwipeableDrawer
        open={open}
        onClose={onClose}
        onOpen={() => {}}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={onClose}
          onKeyDown={onClose}
        >
          <List>
            <div>
              <ListItem 
                button
                data="cy-button-dashboard"
                onClick={() => {
                  onClose();
                  history.push(`/dashboard`);
                }}
              >
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={'Dashboard'} />
              </ListItem>

              <ListItem 
                button
                data="cy-button-stats"
                onClick={() => {
                  onClose();
                  history.push(`/stats`);
                }}
              >
                <ListItemIcon>
                  <TrendingUpIcon />
                </ListItemIcon>
                <ListItemText primary={'Stats'} />
              </ListItem>
            </div>
          </List>

          <Divider />

          <List>
            <div>
              <ListItem 
                button 
                onClick={this.handleLogout}
              >
                <ListItemIcon>
                  <PowerSettingsNew />
                </ListItemIcon>
                <ListItemText primary={'Logout'} />
              </ListItem>
            </div>
          </List>
        </div>
      </SwipeableDrawer>
    );
  }
}

export default withRouter(MenuSheet);