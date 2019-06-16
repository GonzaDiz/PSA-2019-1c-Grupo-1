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

class RiskConfigModal extends React.Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            projectId:this.props.projectId,
            lowMediumLimit:this.props.config.lowMediumLimit,
            mediumHighLimit:this.props.config.mediumHighLimit,
            exposureLimit:this.props.config.exposureLimit
        }
    }

    onUpdate = () => {
        var data = {
            lowMediumLimit:this.state.lowMediumLimit,
            mediumHighLimit:this.state.mediumHighLimit,
            exposureLimit:this.state.exposureLimit
        }

        fetch(`/proyectos/${this.state.projectId}/riesgos/config`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:', response);
                this.render();
            })
    }


    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    render = () => {
        const { classes, open, onClose} = this.props;

        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-update-resource">
                <DialogTitle id="form-dialog-title">Configuración de riesgos {this.state.id}</DialogTitle>
                <DialogContent>

                    <FormLabel className={classes.legend} component="legend">Ingresar valores</FormLabel>
                    <TextField
                        id="lowMediumLimit"
                        margin="dense"
                        label="Límite bajo/medio"
                        variant="outlined"
                        value={this.state.lowMediumLimit}
                        enabled
                        type="number"
                        fullWidth
                        onChange={this.handleChange}
                    />

                    <TextField
                        id="mediumHighLimit"
                        margin="dense"
                        label="Límite medio/alto"
                        variant="outlined"
                        value={this.state.mediumHighLimit}
                        enabled
                        type="number"
                        fullWidth
                        onChange={this.handleChange}
                    />

                    <TextField
                        id="exposureLimit"
                        margin="dense"
                        label="Umbral de exposicion"
                        value={this.state.exposureLimit}
                        variant="outlined"
                        enabled
                        type="number"
                        fullWidth
                        onChange={this.handleChange}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="secondary">
                        Cancelar
                    </Button>
                    <Button onClick={() => {
                        this.onUpdate();
                        onClose();
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

const withStyle = withStyles(styles, { withTheme: true })(RiskConfigModal);
export default withRouter(withStyle);