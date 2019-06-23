import React from 'react';
import AppContext from '../../root/AppContext';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Paper,
    TableHead,
    Table,
    TableRow,
    TableBody,
    TableCell,
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

class RequirementTasksModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks:[]
        }
        this.loadTasks()
    }
    static contextType = AppContext;

    loadTasks = () =>{
        fetch(`/proyectos/${this.props.projectId}/requisitos/${this.props.reqId}/tareas`)
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(tasks => {
                this.setState({tasks:tasks})
            })
    }

    render = () => {
        const { classes, open, onClose} = this.props;
        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-update-resource">
                <DialogTitle id="form-dialog-title">Tareas del requisito {this.props.reqId}</DialogTitle>
                <DialogContent>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Id</TableCell>
                                    <TableCell align="left">Título</TableCell>
                                    <TableCell align="left">Total horas dedicadas</TableCell>
                                    <TableCell align="left">Estado</TableCell>
                                    <TableCell align="left">Asignada a</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.tasks.map(t => (
                                    <TableRow key={t.id}>
                                        <TableCell align="left">{t.id}</TableCell>
                                        <TableCell align="left">{t.name}</TableCell>
                                        <TableCell align="left">{t.totalDedicatedHours}</TableCell>
                                        <TableCell align="left">{t.currentState}</TableCell>
                                        <TableCell align="left">{t.assignedResource===null ? "-":t.assignedResource}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="secondary">
                        Volver
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

const withStyle = withStyles(styles, { withTheme: true })(RequirementTasksModal);
export default withRouter(withStyle);