import CreateTaskModal from "./CreateTaskModal";

const React = require('react');
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import CreateProjectModal from './CreateProjectModal'


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

export class ProjectsBriefCase extends React.Component{

    constructor(props){

        super(props);
        this.state = { projects:[] }
        this.loadProjects()
        this.state.createModalOpen = false;
    }


    renderProjects(){
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell align="right">Tipo</TableCell>
                            <TableCell align="right">Estado</TableCell>
                            <TableCell align="right">Fecha de inicio</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.projects.map(row => (
                            <TableRow key={row.name}>
                                <TableCell align="right" component="th" scope="row">
                                    <Link to={`/proyectos/${row.id}`}>{row.id}</Link>
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.projectType}</TableCell>
                                <TableCell align="right">{row.projectState}</TableCell>
                                <TableCell align="right">{row.startDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }

    loadProjects = () => {
        fetch("/proyectos")
            .then(response => response.json())
            .then(projects => {
                this.setState({projects: projects})
            })

    }

    openCreateModal = () => {
        this.setState({ createModalOpen: true })
    }

    closeCreateModal = () => {
        this.loadProjects();
        this.setState({ createModalOpen: false })
    }


    render(){

        return (
                <main>
                        <h1>Proyectos</h1>
                        {this.renderProjects()}
                <div>
                    <Button variant="contained" color="primary"
                            onClick={this.openCreateModal}>
                        Nuevo proyecto
                    </Button>

                    {this.state.createModalOpen===true ? (<CreateProjectModal
                        open={this.state.createModalOpen}
                        onClose={this.closeCreateModal}
                    />) : (<div></div>)}

                    {

                    }

                </div>
            </main>
        )


    }

}



