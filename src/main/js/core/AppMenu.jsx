import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { withRouter } from 'react-router-dom';
import { ModuleOptions, ModuleSubOptions } from './MenuOptions';
import AccountActions from './AccountActions';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.IconButtonunit * (9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  paper: {
    padding: theme.spacing.unit * (2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
});

class AppMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      title: 'PSA Flex',
    }
  }

  pathnameToModule = (pathname) => {
    if (pathname.indexOf('/proyectos') !== -1) return 'proyectos';
    if (pathname.indexOf('/productos') !== -1) return 'productos';
    if (pathname.indexOf('/soporte') !== -1) return 'soporte';
    if (pathname.indexOf('/recursos') !== -1) return 'recursos';
    if (pathname.indexOf('/ventas_y_finanzas') !== -1) return 'ventas_y_finanzas';
  }

  handleDrawerOpen = () => this.setState({ open: true });
  handleDrawerClose = () => this.setState({ open: false });


  changeRoute = (route, routeTitle) => () => {
    this.setState({ title: routeTitle });
    this.props.history.push(route);
  }

  render = () => {
    const { classes, children } = this.props;
    const { open, title } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              {title}
            </Typography>
            <AccountActions />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ModuleOptions 
              onModuleSelection={this.changeRoute}
            />
          </List>
          <Divider />
          <List>
            <ModuleSubOptions 
              onSubModuleSelection={this.changeRoute}
              moduleSelected={this.pathnameToModule(this.props.location.pathname)}
            />
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          { children }
        </main>
      </div>
    );
  }
}

const withStyle = withStyles(styles, { withTheme: true })(AppMenu);
export default withRouter(withStyle);