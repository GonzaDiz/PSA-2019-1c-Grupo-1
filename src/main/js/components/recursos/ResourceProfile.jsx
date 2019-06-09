import React from 'react';
import AppContext from '../../root/AppContext';
import { Typography, withStyles, Paper, IconButton, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withRouter } from 'react-router-dom';
import _ from 'lodash'
import response from './MockResourcesTableData';
import ResourceUpdateModal from './ResourceUpdateModal';

const IMG_SIZE = 500;

const styles = theme => ({
  main: {
    padding: theme.spacing.unit * 2,
  },
  title: {
    marginBottom: theme.spacing.unit * 4,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'row'
  },
  resourceImage: {
    marginRight: theme.spacing.unit * 4
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-between'
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  profileActions: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '100%'
  },
  button: {
    margin: theme.spacing.unit
  }
});


class ResourceProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetching: true,
      resource: null,
      modalOpen: false,
    }
  }

  static contextType = AppContext;

  componentDidMount = () => {
    // Simula carga de datos del servidor
    setTimeout(() => {
      this.setState({ fetching: false });
    }, 1000);

    const resource = _.find(response.data, r => r.cuit === Number(this.props.cuit));

    this.setState({ resource });
  }

  onResourceUpdate = () => {
    const { showAlert } = this.context;
    showAlert({
      variant: 'info',
      message: 'Recurso actualizado exitosamente'
    });
  }

  closeModal = () => this.setState({ modalOpen: false });
  openModal = () => this.setState({ modalOpen: true });


  render = () => {
    const { classes } = this.props;
    const { fetching, resource, modalOpen } = this.state;
    const { renderLoading } = this.context;

    if (fetching) return renderLoading();

    return (
      <main className={classes.main}>
        <Typography 
          className={classes.title}
          variant="h4"
        >
          Detalles del recurso
        </Typography>
        <Paper className={classes.paper}>
          <img 
            alt="Photo"
            height={IMG_SIZE}
            className={classes.resourceImage}
            src={resource.image}
          />
          <div className={classes.profile}>
            <div className={classes.profileHeader}>
              <Typography
                variant="h5"

              >
                <b>{`${resource.firstName} ${resource.lastName}`}</b>
              </Typography>
              <IconButton onClick={() => this.props.history.goBack()}>
                <ArrowBackIcon />
              </IconButton>
            </div>
            <Typography variant="h6">
              {`CUIT: ${resource.cuit}`}
            </Typography>
            <Typography variant="h6">
              {`Sueldo: $${resource.salary}`}
            </Typography>
            <Typography variant="h6">
              {`Seniority: ${resource.seniority}`}
            </Typography>
            <div>
              <Typography variant="h6">
                {`Roles:`}
              </Typography>
              <ul>
                {
                  _.map(resource.roles, rol => {
                    return (
                      <li key={rol}>
                        <Typography variant="h6">
                          {rol}
                        </Typography>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
            <Typography variant="h6">
              {`Límite de horas semanales: ${resource.limWeekHours}`}
            </Typography>
            <div className={classes.profileActions}>
              <Button
                className={classes.button}
                color="primary"
                variant="contained"
                onClick={this.openModal}
              >
                Actualizar perfil
              </Button>
              <Button
                className={classes.button}
                color="secondary"
                variant="contained"
              >
                Eliminar recurso
              </Button>
            </div>
          </div>
        </Paper>

        <ResourceUpdateModal
          open={modalOpen}
          resource={resource}
          onUpdate={this.onResourceUpdate}
          onClose={this.closeModal}
        />
      </main>
    )
  }
}

const withStyle = withStyles(styles, { withTheme: true })(ResourceProfile); 
export default withRouter(withStyle);