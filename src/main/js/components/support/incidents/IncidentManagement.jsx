const React = require('react');
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export  class IncidentManagement extends React.Component {
    constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
				<Col>
				<Row>
					<Col lg="auto"><h1>INCIDENTES</h1></Col></Row>
				<Row><Col>
					</Col></Row>
				</Col>
		)
	}
}