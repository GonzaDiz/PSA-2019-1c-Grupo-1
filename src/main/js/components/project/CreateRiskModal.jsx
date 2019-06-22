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

class CreateRiskModal extends React.Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            description:"",
            probability:0,
            impact:0
        }
    }

    onCreate = () => {
        var data = {
            description:this.state.description,
            probability:this.state.probability,
            impact:this.state.impact}

        fetch(`/proyectos/${this.props.projectId}/riesgos`, {
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
                <DialogTitle id="form-dialog-title">Nuevo riesgo</DialogTitle>
                <DialogContent>

                    <FormLabel className={classes.legend} component="legend">Ingresar valores</FormLabel>
                    <TextField
                        id="description"
                        margin="dense"
                        label="Descripción"
                        variant="outlined"
                        enabled
                        multiline
                        fullWidth
                        onChange={this.handleChange}
                    />

                    <TextField
                        id="probability"
                        margin="dense"
                        label="Probabilidad"
                        variant="outlined"
                        enabled
                        type="number"
                        fullWidth
                        onChange={this.handleChange}
                    />

                    <TextField
                        id="impact"
                        margin="dense"
                        label="Impacto"
                        variant="outlined"
                        enabled
                        type="number"
                        fullWidth
                        onChange={this.handleChange}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        this.onCreate();
                        onClose();
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

const withStyle = withStyles(styles, { withTheme: true })(CreateRiskModal);
export default withRouter(withStyle);