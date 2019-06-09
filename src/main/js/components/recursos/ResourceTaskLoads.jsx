import React from 'react';
import AppContext from '../../root/AppContext';
import { Typography, withStyles, IconButton, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withRouter } from 'react-router-dom';
import _ from 'lodash'

const styles = theme => ({
  main: {
    padding: theme.spacing.unit * 2,
  },
  title: {
    marginBottom: theme.spacing.unit * 4,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  iconButton: {
    marginRight: theme.spacing.unit
  }
})

class ResourceTaskLoads extends React.Component {
  static contextType = AppContext;

  render = () => {
    const { classes } = this.props;
    const taskId = _.get(this.props, 'match.params.taskId');
    const cuit = _.get(this.props, 'match.params.cuit');

    if (!taskId || !cuit) return <Typography variant="h4">404 Not found</Typography>

    return (
      <main className={classes.main}>
        <div className={classes.title}>
          <Typography 
            variant="h4"
          >
            Horas cargadas
          </Typography>
          <Button onClick={() => this.props.history.goBack()}>
            <ArrowBackIcon className={classes.iconButton} />
            Volver
          </Button>
        </div>
      </main>
    )
  }
}

const withStyle = withStyles(styles, { withTheme: true })(ResourceTaskLoads); 
export default withRouter(withStyle);