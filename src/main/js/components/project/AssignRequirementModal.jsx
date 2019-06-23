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

class AssignRequirementModal extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            requirements:[],
            selectedReq:""
        }
        this.loadRequirements();
    }
    static contextType = AppContext;

    onAssign = () =>{


        fetch(`/proyectos/${this.props.projectId}/tareas/${this.props.taskId}/requisito/${this.state.selectedReq}`, {
            method: 'POST'
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:', response);
                this.render();
            })
    }

    loadRequirements = () =>{
        fetch(`/proyectos/${this.props.projectId}/requisitos`)
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(requirements => {
                this.setState({requirements: requirements})
            })
    }

    render = () => {
        const { classes, open, onClose} = this.props;
        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-update-resource">
                <DialogTitle id="form-dialog-title">Vincular Requisito</DialogTitle>
                <DialogContent>

                    <FormLabel className={classes.legend} component="legend">Vincular a:</FormLabel>
                    <RadioGroup
                        id="requirement"
                        className={classes.radioGroup}
                        value={this.state.selectedReq}
                        onChange={(event) => this.setState({selectedReq: event.target.value })}
                    >
                        {
                            this.state.requirements.map(r => (
                                <FormControlLabel
                                    value={r.id}
                                    control={<Radio color="primary" checked={r.id.toString() === this.state.selectedReq}/>}
                                    label={r.id+" - "+r.name}
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
                        Vincular
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

const withStyle = withStyles(styles, { withTheme: true })(AssignRequirementModal);
export default withRouter(withStyle);