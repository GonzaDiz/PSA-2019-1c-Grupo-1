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

class CreateRequirementModal extends React.Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            name:"",
            description:"",
            priority:"UNDEFINED"
        }
    }

    onCreate = () => {
        var data = {
            name:this.state.name,
            description:this.state.description,
            priority:this.state.priority}

        fetch(`/proyectos/${this.props.projectId}/requisitos`, {
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
                <DialogTitle id="form-dialog-title">Asignar tarea</DialogTitle>
                <DialogContent>

                    <FormLabel className={classes.legend} component="legend">Título</FormLabel>
                    <TextField
                        id="name"
                        margin="dense"
                        label="Nombre del requisito"
                        variant="outlined"
                        enabled
                        fullWidth
                        onChange={this.handleChange}
                    />

                    <TextField
                        id="description"
                        margin="dense"
                        label="Descripcion"
                        variant="outlined"
                        enabled
                        fullWidth
                        onChange={this.handleChange}
                    />

                    <RadioGroup
                        id="priority"
                        className={classes.radioGroup}
                        value={this.state.priority}
                        onChange={(event) => this.setState({priority: event.target.value })}
                    >

                        <FormControlLabel
                            value="HIGH"
                            control={<Radio color="primary" checked={"HIGH" === this.state.priority}/>}
                            label="Alta"
                        />
                        <FormControlLabel
                            value="MEDIUM"
                            control={<Radio color="primary" checked={"MEDIUM" === this.state.priority}/>}
                            label="Media"
                        />
                        <FormControlLabel
                            value="LOW"
                            control={<Radio color="primary" checked={"LOW" === this.state.priority}/>}
                            label="Baja"
                        />
                        <FormControlLabel
                            value="UNDEFINED"
                            control={<Radio color="primary" checked={"UNDEFINED" === this.state.priority}/>}
                            label="Indefinida"
                        />
                    </RadioGroup>
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

const withStyle = withStyles(styles, { withTheme: true })(CreateRequirementModal);
export default withRouter(withStyle);