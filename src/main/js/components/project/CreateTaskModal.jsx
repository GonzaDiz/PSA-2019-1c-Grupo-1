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

class CreateTaskModal extends React.Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            taskTitle:""
        }
    }

    onCreate = () => {
        var data = {
            title:this.state.taskTitle}

        fetch(`/proyectos/${this.props.projectId}/tareas`, {
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
        this.setState({ taskTitle: event.target.value });
    }

    render = () => {
        const { classes, open, onClose} = this.props;

        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-update-resource">
                <DialogTitle id="form-dialog-title">Asignar tarea</DialogTitle>
                <DialogContent>

                    <FormLabel className={classes.legend} component="legend">Título</FormLabel>
                    <TextField
                        margin="dense"
                        label="Titulo de la tarea"
                        variant="outlined"
                        enabled
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

const withStyle = withStyles(styles, { withTheme: true })(CreateTaskModal);
export default withRouter(withStyle);