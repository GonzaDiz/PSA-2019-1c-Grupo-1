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
import CreateRequirementModal from './CreateRequirementModal'
import RequirementTasksModal from './RequirementTasksModal'
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

class ProjectRequirements extends React.Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);

        this.state = {
            requirements:[],
            createModalOpen:false,
            tasksModalOpen:false,
            projectId: _.get(this.props, 'match.params.projectId')}
        this.loadRequirements()
    }

    loadRequirements = () =>{
        fetch(`/proyectos/${this.state.projectId}/requisitos`)
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(requirements => {
                this.setState({requirements: requirements})
            })
    }


    closeCreateModal = () => {
        this.setState({createModalOpen: false});
        this.loadRequirements();
    }
    openCreateModal = () => this.setState({ createModalOpen: true });

    closeTasksModal = () => {
        this.setState({tasksModalOpen: false});
        this.loadRequirements();
    }
    openTasksModal = () => this.setState({ tasksModalOpen: true });



    render = () => {
        const { classes } = this.props;
        return (
            <main className={classes.main}>
                <Typography
                    className={classes.title}
                    variant="h4"
                >
                    Requisitos del proyecto {this.state.projectId}
                </Typography>

                <Button
                    variant="text"
                    color="primary"
                    onClick={() => {
                        this.openCreateModal()}}
                >
                    Crear requisito
                </Button>

                <Paper className={classes.paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Título</TableCell>
                                <TableCell align="left">Descripcion</TableCell>
                                <TableCell align="left">Prioridad</TableCell>
                                <TableCell align="left">Tareas</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.requirements.map(t => (
                                <TableRow key={t.id}>
                                    <TableCell align="left">{t.id}</TableCell>
                                    <TableCell align="left">{t.name}</TableCell>
                                    <TableCell align="left">{t.description}</TableCell>
                                    <TableCell align="left">{t.priority}</TableCell>
                                    <Button
                                        variant="text"
                                        color="primary"
                                        onClick={() => {
                                            this.state.reqId = t.id
                                            this.openTasksModal()}}
                                    >
                                        Ver tareas
                                    </Button>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>


                {this.state.createModalOpen===true ? (<CreateRequirementModal
                    projectId={this.state.projectId}
                    open={this.state.createModalOpen}
                    onClose={this.closeCreateModal}
                />) : (<div></div>)}

                {this.state.tasksModalOpen===true ? (<RequirementTasksModal
                    projectId={this.state.projectId}
                    reqId={this.state.reqId}
                    open={this.state.tasksModalOpen}
                    onClose={this.closeTasksModal}
                />) : (<div></div>)}
            </main>
        )
    }
}

const withStyle = withStyles(styles, { withTheme: true })(ProjectRequirements);
export default withRouter(withStyle);