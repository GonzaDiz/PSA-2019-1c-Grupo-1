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
  FormGroup} from '@material-ui/core';
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

const initialState = {
  cuit: 0,
  firstName: '',
  lastName: '',
  seniority: '',
  salary: 0,
  limWeekHours: 0,
  image: '',
  roles: [],
}

class ResourceNewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState
  }
  static contextType = AppContext;

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  hasRole = (role) => {
    return Boolean(_.find(this.state.roles, r => r === role));
  }

  handleToggleRol = (role) => () => {
    const roles = this.state.roles;
    if (this.hasRole(role)) {
      _.remove(roles, r => r === role);
      this.setState({ roles: roles });
    } else {
      roles.push(role)
      this.setState({ roles })
    }
  }

  render = () => {
    const { classes, open, onClose, onCreate } = this.props;

    return (
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-update-resource">
        <DialogTitle id="form-dialog-title">Crear recurso</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="cuit"
            label="CUIT"
            variant="outlined"
            value={this.state.cuit}
            type="number"
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="firstName"
            label="Nombre"
            variant="outlined"
            value={this.state.firstName}
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="lastName"
            label="Apellido"
            variant="outlined"
            value={this.state.lastName}
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="salary"
            label="Sueldo"
            variant="outlined"
            value={this.state.salary}
            onChange={this.handleChange}
            type="number"
            fullWidth
          />
          <FormLabel className={classes.legend} component="legend">Seniority</FormLabel>
          <RadioGroup 
            id="seniority"
            className={classes.radioGroup}
            value={this.state.seniority}
            onChange={(event) => this.setState({ seniority: event.target.value })}
          >
            <FormControlLabel
              value="Trainee"
              control={<Radio color="primary" />}
              label="Trainee"
            />
            <FormControlLabel
              value="Junior"
              control={<Radio color="primary" />}
              label="Junior"
            />
            <FormControlLabel
              value="Junior advance"
              control={<Radio color="primary" />}
              label="Junior advance"
            />
            <FormControlLabel
              value="Semi-Senior"
              control={<Radio color="primary" />}
              label="Semi-Senior"
            />
            <FormControlLabel
              value="Senior"
              control={<Radio color="primary" />}
              label="Senior"
            />
          </RadioGroup>
          <TextField
            margin="dense"
            id="limWeekHours"
            label="Limite de horas semanales"
            variant="outlined"
            value={this.state.limWeekHours}
            onChange={this.handleChange}
            type="number"
            fullWidth
          />

          <FormLabel component="legend" className={classes.legend}>Roles</FormLabel>
          <FormGroup className={classes.radioGroup}>
            <FormGroup row style={{ justifyContent: 'space-between' }}>
              <FormControlLabel
                control={<Checkbox checked={this.hasRole("Desarrollador")} value="Desarrollador" />}
                label="Desarrollador"
                onClick={this.handleToggleRol("Desarrollador")}
              />
              <FormControlLabel
                control={<Checkbox checked={this.hasRole("Líder de proyecto")} value="Líder de proyecto" />}
                label="Líder de proyecto"
                labelPlacement="start"
                onClick={this.handleToggleRol("Líder de proyecto")}
              />
            </FormGroup>
            <FormGroup row style={{ justifyContent: 'space-between' }}>
              <FormControlLabel
                control={<Checkbox checked={this.hasRole("QA")} value="QA" />}
                label="QA"
                onClick={this.handleToggleRol("QA")}
              />
              <FormControlLabel
                control={<Checkbox checked={this.hasRole("Automatización")} value="Automatización" />}
                label="Automatización"
                labelPlacement="start"
                onClick={this.handleToggleRol("Automatización")}
              />
            </FormGroup>
            <FormGroup row style={{ justifyContent: 'space-between' }}>
              <FormControlLabel
                control={<Checkbox checked={this.hasRole("Analista funcional")} value="Analista funcional" />}
                label="Analista funcional"
                onClick={this.handleToggleRol("Analista funcional")}
              />
              <FormControlLabel
                control={<Checkbox checked={this.hasRole("Líder de producto")} value="Líder de producto" />}
                label="Líder de producto"
                labelPlacement="start"
                onClick={this.handleToggleRol("Líder de producto")}
              />
            </FormGroup>
            <FormGroup row style={{ justifyContent: 'space-between' }}>
              <FormControlLabel
                control={<Checkbox checked={this.hasRole("Arquitecto de software")} value="Arquitecto de software" />}
                label="Arquitecto de software"
                onClick={this.handleToggleRol("Arquitecto de software")}
              />
              <FormControlLabel
                control={<Checkbox checked={this.hasRole("Devops")} value="Devops" />}
                label="Devops"
                labelPlacement="start"
                onClick={this.handleToggleRol("Devops")}
              />
            </FormGroup>
            <FormGroup row style={{ justifyContent: 'space-between' }}>
              <FormControlLabel
                control={<Checkbox checked={this.hasRole("Data scientist")} value="Data scientist" />}
                label="Data scientist"
                onClick={this.handleToggleRol("Data scientist")}
              />
              <FormControlLabel
                control={<Checkbox checked={this.hasRole("Site reliability engineer")} value="Site reliability engineer" />}
                label="Site reliability engineer"
                labelPlacement="start"
                onClick={this.handleToggleRol("Site reliability engineer")}
              />
            </FormGroup>
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            this.setState(initialState);
            onClose();
          }} color="secondary">
            Cancelar
          </Button>
          <Button onClick={() => {
            this.setState(initialState);
            onClose();
            onCreate({ ...this.state });
          }} 
          color="primary"
          >
            Crear
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

const withStyle = withStyles(styles, { withTheme: true })(ResourceNewModal); 
export default withRouter(withStyle);