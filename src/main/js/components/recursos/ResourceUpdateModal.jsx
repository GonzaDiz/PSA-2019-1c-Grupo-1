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

class ResourceUpdateModal extends React.Component {
  constructor(props) {
    super(props);
    const { resource } = props;

    this.state = {
      ...resource
    }
  }
  static contextType = AppContext;

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  hasRole = (role) => {
    return Boolean(_.find(this.state.roles, r => r === role));
  }

  render = () => {
    const { classes, open, onClose, onUpdate, resource } = this.props;

    return (
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-update-resource">
        <DialogTitle id="form-dialog-title">Actualizar recurso</DialogTitle>
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
            value={this.state.firstName}
            disabled
            fullWidth
          />
          <TextField
            margin="dense"
            label="Apellido"
            variant="outlined"
            value={this.state.lastName}
            disabled
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
                control={<Checkbox checked={this.hasRole("Desarrollador")} value="desarrollador" />}
                label="Desarrollador"
              />
              <FormControlLabel
                control={<Checkbox checked={this.hasRole("Líder de proyecto")} value="Líder de proyecto" />}
                label="Líder de proyecto"
                labelPlacement="start"
              />
            </FormGroup>
            <FormGroup row style={{ justifyContent: 'space-between' }}>
              <FormControlLabel
                control={<Checkbox checked={this.hasRole("QA")} value="QA" />}
                label="QA"
              />
              <FormControlLabel
                control={<Checkbox checked={this.hasRole("Automatización")} value="Automatización" />}
                label="Automatización"
                labelPlacement="start"
              />
            </FormGroup>
            <FormGroup row style={{ justifyContent: 'space-between' }}>
              <FormControlLabel
                control={<Checkbox checked={this.hasRole("Analista funcional")} value="Analista funcional" />}
                label="Analista funcional"
              />
              <FormControlLabel
                control={<Checkbox checked={this.hasRole("Líder de producto")} value="Líder de producto" />}
                label="Líder de producto"
                labelPlacement="start"
              />
            </FormGroup>
            <FormGroup row style={{ justifyContent: 'space-between' }}>
              <FormControlLabel
                control={<Checkbox checked={this.hasRole("Arquitecto de software")} value="Arquitecto de software" />}
                label="Arquitecto de software"
              />
              <FormControlLabel
                control={<Checkbox checked={this.hasRole("Devops")} value="Devops" />}
                label="Devops"
                labelPlacement="start"
              />
            </FormGroup>
            <FormGroup row style={{ justifyContent: 'space-between' }}>
              <FormControlLabel
                control={<Checkbox checked={this.hasRole("Data scientist")} value="Data scientist" />}
                label="Data scientist"
              />
              <FormControlLabel
                control={<Checkbox checked={this.hasRole("Site reliability engineer")} value="Site reliability engineer" />}
                label="Site reliability engineer"
                labelPlacement="start"
              />
            </FormGroup>
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={() => {
            onClose();
            onUpdate();
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

const withStyle = withStyles(styles, { withTheme: true })(ResourceUpdateModal); 
export default withRouter(withStyle);