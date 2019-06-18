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
            projectName:null,
            version:"1.3",
            product:"CRM"
        }
    }

    handleChange = () =>{

    }

    onCreate = () => {
        var data = {
            name:this.state.product+' '+this.state.version,
            version:this.state.version,
            product:this.state.product}

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
                        value={this.state.product+''+this.state.version}
                        disabled
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

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="name-disabled">Producto</InputLabel>
                        <Select
                            value="CRM"
                            onChange={(e)=>{
                                this.setState({product:e.target.value})}
                            }
                            input={<Input name={this.state.product} id="name-disabled" />}
                        >
                            <MenuItem value="CRM">CRM</MenuItem>
                            <MenuItem value="ERP">ERP</MenuItem>
                            <MenuItem value="SCM">SCM</MenuItem>

                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="name-disabled">Version</InputLabel>
                        <Select
                            value={this.state.version}
                            onChange={(e)=>{
                                this.setState({version:e.target.value})
                            }
                            }
                            input={<Input name={this.state.version} id="name-disabled" />}
                        >
                            <MenuItem value="1.3">1.3</MenuItem>
                            <MenuItem value="1.4">1.4</MenuItem>
                            <MenuItem value="2.5">2.5</MenuItem>
                        </Select>
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