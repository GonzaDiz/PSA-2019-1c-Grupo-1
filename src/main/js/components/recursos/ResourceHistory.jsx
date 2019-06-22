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
import { withRouter, Link } from 'react-router-dom';
import _ from 'lodash'
import response from './MockResourceHistoryData';
import NewAssignmentModal from './NewAssignmentModal';
import resourcesResponse from './MockResourcesTableData';

const styles = theme => ({
  main: {
    padding: theme.spacing.unit * 2,
  },
  title: {
    marginBottom: theme.spacing.unit * 4,
  },
  paper: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
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

    // TODO: obtener tasks del cuit en cuestion
    const { cuit } = this.props;

    const resourceHistory = response.data;
    const resource = _.find(resourcesResponse.data, r => r.cuit === Number(this.props.cuit));

    this.setState({ resource, resourceHistory });
  }

  closeModal = () => this.setState({ modalOpen: false });
  openModal = () => this.setState({ modalOpen: true });
  onUpdate = (assignment) => {
    this.state.resourceHistory.push(assignment)
    this.closeModal()
  }
  
  render = () => {
    const { classes, cuit } = this.props;
    const { fetching, resourceHistory, resource, modalOpen } = this.state;
    const { renderLoading } = this.context;

    if (fetching) return renderLoading();

    return (
      <main className={classes.main}>
        <Typography 
          className={classes.title}
          variant="h4"
        >
          Historial del recurso
        </Typography>
        <Button
                className={classes.button}
                color="primary"
                variant="contained"
                onClick={this.openModal}
              >
                Nueva asignación
              </Button>
        <Paper className={classes.paper}>
          {resourceHistory.map(history => (
            
          <>
          <Typography 
          className={classes.title}
          variant="h6"
        >
          Historial en {history.project.title}
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
          </Table></>))
           }
        </Paper>

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