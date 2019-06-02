import Col from "react-bootstrap/Col";

const React = require('react');
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import Row from "react-bootstrap/Row";

export class ProjectBriefCase extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Col>
                <Row>
                    <Col lg="auto"><h1>Proyectos</h1></Col></Row>
                <Row><Col>
                </Col></Row>
            </Col>
        )
    }

}



