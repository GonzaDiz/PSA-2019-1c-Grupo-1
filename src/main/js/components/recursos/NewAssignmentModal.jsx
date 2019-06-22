import React from 'react';
import AppContext from '../../root/AppContext';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  withStyles,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Checkbox,
  FormGroup
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import _ from 'lodash'



const styles = theme => ({
  legend: {
    marginTop: theme.spacing.unit * 2
  },
  radioGroup: {
    marginBottom: theme.spacing.unit * 2
  }
})

class NewAssignmentModal extends React.Component {
  constructor(props) {
    super(props);
    const { resource } = props;

    this.state = {
      projects: [],
      ...resource,
      project: "Proyecto harcodeado",
      role: null
    }
    this.loadProjects()
  }
  static contextType = AppContext;

  loadProjects = () => {
    fetch("/proyectos")
      .then(response => response.json())
      .then(projects => {
        this.setState({ projects: projects })
      })
  }

  saveAssignment = () => {
    const newAssignment = {
      projectName: this.state.project,
      role: this.state.role,
      resourceName: this.state.name,
      startDate: this.state.initialDate,
      endDate: this.state.endDate
    }
    this.props.onUpdate(newAssignment);
  }

  handleFormChange(type, event) {
    this.setState({ [type]: event.target.value });
  }

  render = () => {
    const { classes, open, onClose } = this.props;

    return (
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-update-resource">
        <DialogTitle id="form-dialog-title">Nueva asignación</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="CUIT"
            variant="outlined"
            value={this.state.cuit}
            disabled
            fullWidth
          />
          <TextField
            margin="dense"
            label="Nombre"
            variant="outlined"
            value={this.state.name}
            disabled
            fullWidth
          />
          <TextField
            id="standard-select-currency-native"
            select
            label="Proyecto"
            className={classes.textField}
            value={this.state.project}
            onChange={(event) => this.handleFormChange('project', event)}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="dense"
          >
            {
              <>
              <option>Proyecto harcodeado</option>

              {this.state.projects.map(project => (
                <option>{project.name}</option>
              ))}
              </>
            }
          </TextField>
          <FormLabel className={classes.legend} component="legend">Rol a cumplir</FormLabel>
          <RadioGroup
            id="seniority"
            className={classes.radioGroup}
            value={this.state.role}
            onChange={(event) => this.handleFormChange('role', event)}
          >
            <FormControlLabel
              value="Desarrollador"
              control={<Radio color="primary" />}
              label="Desarrollador"
            />
            <FormControlLabel
              value="Líder de proyecto"
              control={<Radio color="primary" />}
              label="Líder de proyecto"
            />
            <FormControlLabel
              value="Analista funcional"
              control={<Radio color="primary" />}
              label="Analista funcional"
            />
            <FormControlLabel
              value="Data scientist"
              control={<Radio color="primary" />}
              label="Data scientist"
            />
            <FormControlLabel
              value="Devops"
              control={<Radio color="primary" />}
              label="Devops"
            />
          </RadioGroup>
          <TextField
            margin="dense"
            label="Fecha de inicio"
            type="date"
            onChange={(event) => this.handleFormChange('initialDate', event)}
            variant="outlined"
            fullWidth
          />
          <TextField
            margin="dense"
            label="Fecha de fin"
            variant="outlined"
            onChange={(event) => this.handleFormChange('endDate', event)}
            type="date"
            fullWidth
          />
          <TextField
            margin="dense"
            label="Horas semanales"
            onChange={(event) => this.handleFormChange('hoursPerWeek', event)}
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={() => {
            onClose();
            this.saveAssignment()
          }}
            color="primary"
          >
            Actualizar
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

const withStyle = withStyles(styles, { withTheme: true })(NewAssignmentModal);
export default withRouter(withStyle);