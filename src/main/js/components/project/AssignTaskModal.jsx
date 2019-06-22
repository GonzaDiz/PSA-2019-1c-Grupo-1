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

class AssignTaskModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cuit:null
        }
    }
    static contextType = AppContext;

    onAssign = () =>{
        var data = {
            cuit:this.state.cuit
        }

        fetch(`/proyectos/${this.props.projectId}/tareas/${this.props.taskId}/asignacion`, {
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

    render = () => {
        const { classes, open, onClose} = this.props;
        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-update-resource">
                <DialogTitle id="form-dialog-title">Asignar tarea</DialogTitle>
                <DialogContent>

                    <FormLabel className={classes.legend} component="legend">Asignar a:</FormLabel>
                    <RadioGroup
                        id="resource"
                        className={classes.radioGroup}
                        value={this.state.cuit}
                        onChange={(event) => this.setState({cuit: event.target.value })}
                    >
                        {
                            this.props.resources.map(r => (
                                <FormControlLabel
                                    value={r.cuit}
                                    control={<Radio color="primary" checked={r.cuit.toString() === this.state.cuit}/>}
                                    label={r.name}
                                />))
                        }
                    </RadioGroup>

                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        this.onAssign();
                        onClose();
                    }}
                            color="primary"
                    >
                        Asignar
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

const withStyle = withStyles(styles, { withTheme: true })(AssignTaskModal);
export default withRouter(withStyle);