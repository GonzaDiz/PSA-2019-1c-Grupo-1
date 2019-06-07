import React from 'react';
import AppContext from '../../root/AppContext';
import { Typography, withStyles, InputBase, Paper, IconButton, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const styles = theme => ({

})

class ResourceDetails extends React.Component {
  static contextType = AppContext;

  render = () => {
    const { classes, resourceId } = this.props;
    return (
      <main className={classes.main}>
        {`ID Recurso: ${resourceId}`}
      </main>
    )
  }
}

const withStyle = withStyles(styles, { withTheme: true })(ResourceDetails); 
export default withRouter(withStyle);