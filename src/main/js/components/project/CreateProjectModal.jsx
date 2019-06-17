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
    FormControl,
    FormHelperText,
    Select,
    Input,
    Radio,
    MenuItem,
    FormLabel,
    InputLabel,
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
    },
    formControl: {
        margin: theme.spacing.unit*2,
        minWidth: 120,
    }
})

class CreateProjectModal extends React.Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            projectName:null
        }
    }

    onCreate = () => {
        var data = {
            name:this.state.projectName}

        fetch(`/proyectos/`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:', response);
            })
    }


    handleChange = (event) => {
        this.setState({ projectName: event.target.value });
    }

    render = () => {
        const { classes, open, onClose} = this.props;

        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-update-resource">
                <DialogTitle id="form-dialog-title">Nuevo proyecto</DialogTitle>
                <DialogContent>

                    <FormLabel className={classes.legend} component="legend">Datos del proyecto nuevo</FormLabel>
                    <TextField
                        margin="dense"
                        label="Nombre del proyecto"
                        variant="outlined"
                        enabled
                        fullWidth
                        onChange={this.handleChange}
                    />

                </DialogContent>
                <DialogActions>
                    <FormControl className={classes.formControl} disabled>
                        <InputLabel htmlFor="name-disabled">Tipo de proyecto</InputLabel>
                        <Select
                            value="Desarrollo"
                            onChange={()=>{}}
                            input={<Input name="desarrollo" id="name-disabled" />}
                        >
                            <MenuItem value="Desarrollo">Desarrollo</MenuItem>
                        </Select>
                        <FormHelperText>Disabled</FormHelperText>
                    </FormControl>
                </DialogActions>
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

const withStyle = withStyles(styles, { withTheme: true })(CreateProjectModal);
export default withRouter(withStyle);