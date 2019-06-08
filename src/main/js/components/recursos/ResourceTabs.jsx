import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonIcon from '@material-ui/icons/Person';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import UpdateIcon from '@material-ui/icons/Update';
import Typography from '@material-ui/core/Typography';
import ResourceProfile from './ResourceProfile';
import ResourceTasks from './ResourceTasks';

const TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
});

const TAB_PROFILE = 0;
const TAB_TASKS = 1;
const TAB_HISTORY = 2;

class ResourceTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    }
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  }

  render = () => {
    const { classes, cuit } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant="fullWidth"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Perfil" icon={<PersonIcon />} />
            <Tab label="Carga de horas" icon={<AccessTimeIcon />} />
            <Tab label="Historial" icon={<UpdateIcon />} />
          </Tabs>
        </AppBar>
        {value === TAB_PROFILE && <ResourceProfile cuit={cuit} />}
        {value === TAB_TASKS && <ResourceTasks cuit={cuit} />}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ResourceTabs);