const React = require('react');
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './tickets.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


export class Ticket extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
				<Col>
				<Row>
					<Col lg="auto"><h1>Datos del nuevo ticket - TIC001</h1></Col></Row>
				<Row><Col>
					<Form className="ticket-form">
					<Form.Group controlId="formClient">
						<Form.Label>Cliente</Form.Label>
						<Form.Control type="text" placeholder="Ingresar cliente" />
					</Form.Group>

					<Form.Group controlId="formProduct">
						<Form.Label>Producto</Form.Label>
						<Form.Control type="text" placeholder="Ingresar el producto" />
					</Form.Group>
					<Form.Group controlId="formVersion">
						<Form.Label>Versión</Form.Label>
						<Form.Control type="text" placeholder="Ingresar la versión" />
					</Form.Group>
					<Form.Group controlId="formEndDate">
						<Form.Label>Fecha fin</Form.Label>
						<Form.Control type="date" />
					</Form.Group>
					<Form.Group>
						<Form.Group controlId="formGridState">
							<Form.Label>Área responsable</Form.Label>
							<Form.Control as="select">
								<option>Desarrollo</option>
								<option>Implementación</option>
							</Form.Control>
						</Form.Group>
					</Form.Group>
					<Form.Group>
						<Form.Label>Incidente Asociado</Form.Label>
						<Form.Control as="select">
							<option>INC001</option>
							<option>INC002</option>
						</Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Descripción</Form.Label>
						<Form.Control as="textarea" rows="3" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Generar
        </Button>
				</Form></Col></Row>
				</Col>
		)
	}
}