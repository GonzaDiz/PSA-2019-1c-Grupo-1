import React from 'react';
import AppContext from '../../root/AppContext';
import { Typography, withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import _ from 'lodash'
import ProjectTabs from './ProjectTabs';

const styles = theme => ({

})

class ProjectDetails extends React.Component {
    static contextType = AppContext;

    render = () => {
        const { classes } = this.props;
        const projectId = _.get(this.props, 'match.params.projectId');

        if (!projectId) return <Typography variant="h4">404 Not found</Typography>

        return (
            <main>
                <ProjectTabs projectId={projectId} />
            </main>
        )
    }
}

const withStyle = withStyles(styles, { withTheme: true })(ProjectDetails);
export default withRouter(withStyle);