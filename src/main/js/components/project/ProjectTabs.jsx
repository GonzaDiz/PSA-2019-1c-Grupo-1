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
import ProjectTasks from './ProjectTasks'
import ProjectRisks from './ProjectRisks'
import ProjectResources from './ProjectResources'
import ProjectRequirements from './ProjectRequirements'
let rememberTab = 0;

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
});

const TAB_TASKS = 0;
const TAB_RISKS = 1;
const TAB_REQUIREMENTS = 2;
const TAB_RESOURCES = 3;
const TAB_PHASES = 4;

class ProjectTabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: rememberTab,
        }
    }

    componentWillUnmount = () => {
        rememberTab = this.state.value;
    }

    handleChange = (event, newValue) => {
        this.setState({value: newValue});
    }

    render = () => {
        const {classes, projectId} = this.props;
        const {value} = this.state;
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
                        <Tab label="Tareas"/>
                        <Tab label="Riesgos"/>
                        <Tab label="Requisitos"/>
                        <Tab label="Recursos"/>
                        <Tab label="Fases"/>

                    </Tabs>
                </AppBar>
                <h1> Proyecto {projectId} </h1>
                {value === TAB_TASKS && <ProjectTasks projectId={projectId}/>}
                {value === TAB_RISKS && <ProjectRisks projectId={projectId}/>}
                {value === TAB_RESOURCES && <ProjectResources projectId={projectId}/>}
                {value === TAB_REQUIREMENTS && <ProjectRequirements projectId={projectId}/>}
            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(ProjectTabs);