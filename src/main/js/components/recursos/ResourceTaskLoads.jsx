import React from 'react';
import AppContext from '../../root/AppContext';
import { Typography, withStyles, IconButton, Button,
  Paper, Table, TableHead, TableRow, TableCell, TableBody
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withRouter, Link } from 'react-router-dom';
import _ from 'lodash'
import response from './MockResourceTasksData';
import responseLoads from './MockResourceTaskLoads';

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
  },
  taskTitle: {
    marginBottom: theme.spacing.unit * 2
  },
  paper: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
})

class ResourceTaskLoads extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetching: true,
      task: undefined,
    }
  }

  static contextType = AppContext;

  componentDidMount = () => {
    // TODO: obtener tarea Y las cargas en esa tarea del server
    const taskId = _.get(this.props, 'match.params.taskId');
    const task = _.find(response.data, t => t.taskId === taskId);

    console.log('task', task)

    this.setState({ task });

    // Simula carga de datos del servidor
    setTimeout(() => {
      this.setState({ fetching: false });
    }, 1000);
  }

  render = () => {
    const { classes } = this.props;
    const { renderLoading } = this.context;
    const { task, fetching } = this.state;
    const taskId = _.get(this.props, 'match.params.taskId');
    const cuit = _.get(this.props, 'match.params.cuit');

    if (!taskId || !cuit) return <Typography variant="h4">404 Not found</Typography>
    if (fetching) return renderLoading();

    console.log(responseLoads)
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
        <div className={classes.taskTitle}>
          <Typography 
            variant="h6"
          >
            <Link to="www.google.com">{taskId}</Link>{`: ${task.title}`}
          </Typography>
        </div>

        <Paper className={classes.paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="left">Fecha</TableCell>
                <TableCell align="left">Descripción</TableCell>
                <TableCell align="left">Cantidad</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {responseLoads.data.map(l => (
                <TableRow key={l.description}>
                  <TableCell align="left">{l.date.toString()}</TableCell>
                  <TableCell align="left">{l.description}</TableCell>
                  <TableCell align="left">{l.load}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </main>
    )
  }
}

const withStyle = withStyles(styles, { withTheme: true })(ResourceTaskLoads); 
export default withRouter(withStyle);