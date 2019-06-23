import React from 'react';
import AppContext from '../../root/AppContext';
import { Typography, withStyles,
    Paper,
    TableHead,
    Table,
    TableRow,
    TableBody,
    TableCell,
    Button
} from '@material-ui/core';
import { withRouter, Link } from 'react-router-dom';
import _ from 'lodash'
import AssignTaskModal from './AssignTaskModal'
import CreateTaskModal from './CreateTaskModal'
import AssignRequirementModal from './AssignRequirementModal'
const styles = theme => ({
    main: {
        padding: theme.spacing.unit * 2,
    },
    title: {
        marginBottom: theme.spacing.unit * 4,
    },
    paper: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
})

class ProjectTasks extends React.Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);

        this.state = { tasks:[],
            resources:[],
            assignModalOpen:false,
            createModalOpen:false,
            requirementsModalOpen:false,
            projectId: _.get(this.props, 'match.params.projectId')}
        this.loadTasks()
        this.loadResources()
    }

    loadTasks = () =>{
        fetch(`/proyectos/${this.state.projectId}/tareas`)
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(tasks => {
                this.setState({tasks: tasks})
            })
    }


    loadResources = () =>{
        fetch(`/proyectos/${this.state.projectId}/recursos`)
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(resources => {
                this.setState({resources: resources})
            })
    }

    closeAssignModal = () =>{
        this.setState({ assignModalOpen: false });
        this.loadTasks()
    }
    openAssignModal = () => this.setState({ assignModalOpen: true });

    closeCreateModal = () => {
        this.setState({createModalOpen: false});
        this.loadTasks();
    }
    openCreateModal = () => this.setState({ createModalOpen: true });

    closeRequirementsModal = () => {
        this.setState({requirementsModalOpen: false});
        this.loadTasks();
    }
    openRequirementsModal = () => this.setState({ requirementsModalOpen: true });



    deassignTask = () => {
        fetch(`/proyectos/${this.props.projectId}/tareas/${this.state.selectedTask}/asignacion`, {
            method: 'DELETE',
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                this.loadTasks();
            })

    }

    deassignRequirement = () => {
        fetch(`/proyectos/${this.props.projectId}/tareas/${this.state.selectedTask}/requisito`, {
            method: 'DELETE',
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                this.loadTasks();
            })
    }


    render = () => {
        const { classes } = this.props;
        return (
            <main className={classes.main}>
                <Typography
                    className={classes.title}
                    variant="h4"
                >
                    Tareas del proyecto {this.state.projectId}
                </Typography>

                <Button
                    variant="text"
                    color="primary"
                    onClick={() => {
                        this.openCreateModal()}}
                >
                    Crear tarea
                </Button>

                <Paper className={classes.paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Título</TableCell>
                                <TableCell align="left">Total horas dedicadas</TableCell>
                                <TableCell align="left">Estado</TableCell>
                                <TableCell align="left">Requisito</TableCell>
                                <TableCell align="left">Asignada a</TableCell>
                                <TableCell align="left">Acción</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.tasks.map(t => (
                                <TableRow key={t.taskId}>
                                    <TableCell align="left">{t.id}</TableCell>
                                    <TableCell align="left">{t.name}</TableCell>
                                    <TableCell align="left">{t.totalDedicatedHours}</TableCell>
                                    <TableCell align="left">{t.currentState}</TableCell>
                                    <TableCell align="left">{t.requirement===null ? "-":(t.requirement.id+" - "+t.requirement.name)}</TableCell>
                                    <TableCell align="left">{t.assignedResource===null ? "-":t.assignedResource}</TableCell>
                                    <TableCell align="left">
                                        {t.assigned===false ?( <Button
                                                variant="text"
                                                color="primary"
                                                onClick={() => {
                                                    this.state.selectedTask = t.id
                                                    this.openAssignModal()}}
                                            >
                                                Asignar
                                            </Button> ):
                                            ( <Button
                                                variant="text"
                                                color="primary"
                                                onClick={() => {
                                                    this.state.selectedTask = t.id
                                                    this.deassignTask()}}
                                            >
                                                Desasignar
                                            </Button>)}
                                        {t.requirement===null ?(
                                            <Button variant="text"
                                             color="primary"
                                             onClick={()=> {
                                                 this.state.selectedTask = t.id
                                                 this.openRequirementsModal()
                                             }}> Vincular requisito </Button>):
                                            ( <Button
                                                variant="text"
                                                color="primary"
                                                onClick={() => {
                                                    this.state.selectedTask = t.id
                                                    this.deassignRequirement()}}
                                            >
                                                Desvincular requisito
                                            </Button>)}
                                        </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                {this.state.assignModalOpen===true ? (<AssignTaskModal
                    projectId={this.state.projectId}
                    taskId={this.state.selectedTask}
                    open={this.state.assignModalOpen}
                    resources={this.state.resources}
                    onClose={this.closeAssignModal}
                />) : ( <div></div> ) }

                {this.state.createModalOpen===true ? (<CreateTaskModal
                    projectId={this.state.projectId}
                    taskId={this.state.selectedTask}
                    open={this.state.createModalOpen}
                    resources={this.state.resources}
                    onClose={this.closeCreateModal}
                />) : (<div></div>)}

                {this.state.requirementsModalOpen===true ? (<AssignRequirementModal
                    projectId={this.state.projectId}
                    taskId={this.state.selectedTask}
                    open={this.state.requirementsModalOpen}
                    onClose={this.closeRequirementsModal}
                />) : (<div></div>)}
            </main>
        )
    }
}

const withStyle = withStyles(styles, { withTheme: true })(ProjectTasks);
export default withRouter(withStyle);