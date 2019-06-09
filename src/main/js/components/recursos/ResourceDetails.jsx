import React from 'react';
import AppContext from '../../root/AppContext';
import { Typography, withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import _ from 'lodash'
import ResourceTabs from './ResourceTabs';

const styles = theme => ({

})

class ResourceDetails extends React.Component {
  static contextType = AppContext;

  render = () => {
    const { classes } = this.props;
    const cuit = _.get(this.props, 'match.params.cuit');

    if (!cuit) return <Typography variant="h4">404 Not found</Typography>

    return (
      <main className={classes.main}>
        <ResourceTabs cuit={cuit} />
      </main>
    )
  }
}

const withStyle = withStyles(styles, { withTheme: true })(ResourceDetails); 
export default withRouter(withStyle);