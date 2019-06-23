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
import response from './MockResourceTasksData';

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

class ResourceTasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetching: true,
      resourceTasks: null,
    }
  }

  static contextType = AppContext;

  componentDidMount = () => {
    // Simula carga de datos del servidor
    setTimeout(() => {
      this.setState({ fetching: false });
    }, 1000);

    // TODO: obtener tasks del cuit en cuestion
    const { cuit } = this.props;

    const resourceTasks = response.data;

    this.setState({ resourceTasks });
  }

  render = () => {
    const { classes, cuit } = this.props;
    const { fetching, resourceTasks } = this.state;
    const { renderLoading } = this.context;

    if (fetching) return renderLoading();

    return (
      <main className={classes.main}>
        <Typography 
          className={classes.title}
          variant="h4"
        >
          Tareas asignadas
        </Typography>
        <Paper className={classes.paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="left">Tarea</TableCell>
                <TableCell align="left">Título</TableCell>
                <TableCell align="left">Proyecto</TableCell>
                <TableCell align="left">Horas estimadas</TableCell>
                <TableCell align="left">Horas dedicadas</TableCell>
                <TableCell align="left">Cargar horas</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resourceTasks.map(t => (
                <TableRow key={t.taskId}>
                  <TableCell component="th" scope="row">
                    {t.taskId}
                  </TableCell>
                  <TableCell align="left">{t.title}</TableCell>
                  <TableCell align="left">
                    {t.proyect.title}
                  </TableCell>
                  <TableCell align="left">{t.estimateHours}</TableCell>
                  <TableCell align="left">{t.dedicateHours}</TableCell>
                  <TableCell align="left">
                    <Button 
                      variant="text"
                      color="primary"
                      onClick={() => this.props.history.push(`/recursos/${cuit}/tareas/${t.taskId}`)}
                    >
                      Cargar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </main>
    )
  }
}

const withStyle = withStyles(styles, { withTheme: true })(ResourceTasks); 
export default withRouter(withStyle);