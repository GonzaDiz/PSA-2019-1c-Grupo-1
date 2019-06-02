
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import AccountActions from './AccountActions';

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  exitIcon: {
    margin: theme.spacing.unit
  },
});

const AbcAppBar = (props) => {
  const { classes, onMenuClick, title } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton 
          className={classes.menuButton} 
          color="inherit" 
          aria-label="Menu" 
          data="cy-button-menusheet"
          onClick={onMenuClick}
        >
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <AccountActions />
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles, { withTheme: true })(AbcAppBar);
