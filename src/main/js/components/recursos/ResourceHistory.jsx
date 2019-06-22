import React from 'react';
import AppContext from '../../root/AppContext';
import { Typography, withStyles,
  Paper,
  TableHead,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Button
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import _ from 'lodash'
import response from './MockResourceHistoryData';
import NewAssignmentModal from './NewAssignmentModal';
import resourcesResponse from './MockResourcesTableData';

const styles = theme => ({
  main: {
    padding: theme.spacing.unit * 2,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.unit * 4,
  },
  paper: {
    width: '100%',
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  table: {
    minWidth: 650,
    padding: theme.spacing.unit * 2,
  },
})

class ResourceHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetching: true,
      resourceHistory: null,
    }
  }

  static contextType = AppContext;

  componentDidMount = () => {
    // Simula carga de datos del servidor
    setTimeout(() => {
      this.setState({ fetching: false, modalOpen: false });
    }, 1000);
    const { cuit } = this.props;

    //const resourceHistory = response.data;
    //const resource = _.find(resourcesResponse.data, r => r.cuit === Number(this.props.cuit));

    fetch("/resources/history/" + cuit)
      .then(response => response.json())
      .then(history => {
        this.setState({ resourceHistory: history })
      })

    //this.setState({ resource, resourceHistory });
  }

  closeModal = () => this.setState({ modalOpen: false });
  openModal = () => this.setState({ modalOpen: true });
  onUpdate = (assignment) => {
    fetch("/resources/assign", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(assignment)
    })
      .then(response => {
        console.log('response', response);

        if (response.status === 200) {
          return response.json();
        } else {
          showAlert({ variant: 'error', message: 'No se pudo asignar el recurso al proyecto.' });
        }
      })
      .then(result => {
        console.log('result', result)
        this.setState({
          resources: result,
          fetching: false
        })
      })
      .catch(err => {
        console.error('err', err);
      })
    
      this.closeModal()
  }
  
  render = () => {
    const { classes, cuit } = this.props;
    const { fetching, resourceHistory, resource, modalOpen } = this.state;
    const { renderLoading } = this.context;

    if (fetching) return renderLoading();

    return (
      <main className={classes.main}>
        <div className={classes.header}>
          <Typography 
            className={classes.title}
            variant="h4"
          >
            Historial del recurso
          </Typography>

          <Button
            color="primary"
            variant="contained"
            onClick={this.openModal}
          >
            Nueva asignación
          </Button>
        </div>
        <div>
          {
            resourceHistory.map(history => (
              <ProjectHistory
                className={classes.projectHistory}
                classes={classes}
                history={history}
              />
            ))
          }
        </div>
        <NewAssignmentModal
          open={modalOpen}
          resource={resource}
          onUpdate={this.onUpdate}
          onClose={this.closeModal}
        />
      </main>
    )
  }
}

const withStyle = withStyles(styles, { withTheme: true })(ResourceHistory);
export default withRouter(withStyle);

const ProjectHistory = (props) => {
  const { classes, history } = props;
  return (
    <Paper className={classes.paper}>
      <Typography 
        className={classes.title}
        variant="h6"
      >
        Historial en {history.project.name}
      </Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Rol a cumplir</TableCell>
            <TableCell align="left">Fecha de inicio</TableCell>
            <TableCell align="left">Fecha de fin</TableCell>
            <TableCell align="left">Dedicación semanal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.assignments.map(a => (
            <TableRow key={a.id}>
              <TableCell align="left">{a.role}</TableCell>
              <TableCell align="left">{a.initialDate}</TableCell>
              <TableCell align="left">{a.endDate}</TableCell>
              <TableCell align="left">{a.hoursPerWeek}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}