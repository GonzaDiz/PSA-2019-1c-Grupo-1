import React from 'react';
import ResourcesTable from './ResourcesTable';
import AppContext from '../../root/AppContext';
import { Typography, withStyles, InputBase, Paper, IconButton, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import ResourceNewModal from './ResourceNewModal';

const styles = theme => ({
  main: {
    padding: theme.spacing.unit
  },
  title: {
    marginBottom: theme.spacing.unit * 4,
  },
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  },
  searchPaper: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  buttonIcon: {
    marginRight: theme.spacing.unit
  }
})

class ResourcesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,

    }
  }
  static contextType = AppContext;

  handleCreateResource = (resource) => {
    console.log('[handleCreateResource]', resource)
  }

  render = () => {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Typography className={classes.title} variant="h4">Recursos</Typography>
        <div className={classes.tableHeader}>
          <Paper className={classes.searchPaper}>
            <InputBase
              className={classes.input}
              placeholder="Buscar..."
              inputProps={{ 'aria-label': 'Buscar...' }}
            />
            <IconButton className={classes.iconButton} aria-label="Buscar">
              <SearchIcon />
            </IconButton>
          </Paper>
          <Button
            variant="contained"
            onClick={() => this.setState({ openModal: true })}
            color="primary"
          >
            <AddIcon className={classes.buttonIcon} />
            Nuevo recurso
          </Button>
        </div>
        <ResourcesTable />
        <ResourceNewModal
          open={this.state.openModal}
          onClose={() => this.setState({ openModal: false })}
          onCreate={this.handleCreateResource}
        />
      </main>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ResourcesPage);