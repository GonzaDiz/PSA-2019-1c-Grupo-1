import Col from "react-bootstrap/Col";
const React = require('react');
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Row from "react-bootstrap/Row";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import { Link } from "react-router-dom";

export class ProjectsBriefCase extends React.Component{

    constructor(props){

        super(props);
        this.state = { projects:[] }
        this.loadProjects()
        this.state.showProjectForm = false;
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

    handleShowForm = () => {
        this.setState({ showProjectForm: true })
    }

    handleCloseForm = () => {
        this.setState({ showProjectForm: false })
    }



    createProject = () => {
        this.handleCloseForm();
        var data = { name: this.state.newProjectName}
        fetch('/proyectos', {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                this.loadProjects();
                console.log('Success:', response);
                this.render();
            });


    }




    render(){

        return (
            <>
                <Col>
                    <Row>
                        <h1>Proyectos</h1></Row>
                        {this.renderProjects()}
                </Col>
                <div>
                    <Button variant="contained" color="primary" onClick={this.handleShowForm}>
                        Nuevo proyecto
                    </Button>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.showProjectForm}
                        onClose={this.handleCloseForm}
                    >
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: '400px',
                            height: '200px',
                            backgroundColor:'white'
                        }}

                         className={{
                            position: 'absolute',
                            width: '400px',
                            outline: 'none',
                        }}>

                            <Row><Col><TextField
                                id="standard-name"
                                label="Nombre del proyecto"
                                ref='newProjectName'
                                value={this.state.newProjectName}
                                onChange={e => this.setState({ newProjectName: e.target.value })}
                                margin="normal"
                            /></Col></Row>
                            <Row>
                            <Button variant="contained" color="primary" onClick={this.createProject}>
                                Crear
                            </Button>
                            <Button variant="contained" onClick={this.handleCloseForm}>
                                Cerrar
                            </Button></Row>
                        </div>
                    </Modal>
                </div>

            </>
        )


    }

}



