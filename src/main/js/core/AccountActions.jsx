
import React from 'react';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppContext from '../root/AppContext';


const styles = theme => ({
  iconButton: {
    marginRight: theme.spacing.unit
  }
});

class AccountActions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
    };
  }

  static contextType = AppContext;

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    this.handleClose();
  }


  render = () => {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
          data="cy-account-button"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={() => {
            this.handleClose();
          }}
        >
          <MenuItem
            data="cy-logout-button"
            onClick={this.handleLogout}
          >
            <PowerSettingsNew color="inherit" className={classes.iconButton} />
            {'Logout'}
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

const withStyle = withStyles(styles, { withTheme: true })(AccountActions);

export default withRouter(withStyle);