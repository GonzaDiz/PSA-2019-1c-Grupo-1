import Col from "react-bootstrap/Col";
const React = require('react');
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import Alert from 'react-bootstrap/Alert';
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export class ProjectsBriefCase extends React.Component{

    constructor(props){
        super(props);
        var projects = [{
            id:"P053",
            name: "CRM 2.8",
            type: "Desarrollo",
            bdate: "01/02/2019",
            state: "En desarrollo",
            performance: "danger"},
            {
            id:"P019",
            name: "ERP 3.1 Toyota",
            type: "Implementacion",
            bdate: "01/10/2018",
            state: "En mantenimiento",
            performance: "warning"}
        ]
        this.projects = projects;
    }


    renderProjects(){
        return this.projects.map((project) => {
                return <Row>
                    <Alert variant={project.performance}>
                    <Alert.Heading>
                        {project.id}-{project.name}
                    </Alert.Heading>
                        <p>Tipo: {project.type}</p>
                        <p>Estado: {project.state}</p>
                        <p>Inicio: {project.bdate}</p>
                </Alert>
                </Row>
            }
        )
    }

    render(){
        return (
            <>
                <Col>
                    <Row>
                        <h1>Proyectos</h1></Row>
                        {this.renderProjects()}
                </Col>
            </>
        )


    }

}



