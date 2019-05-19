const React = require('react');
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './tickets.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table';
import moment from 'moment';

class Ticket {
	constructor(id, client, product, version, creationDate, deadlineDate, department, responsable) {
		this.id = id;
		this.client = client;
		this.product = product;
		this.version = version;
		this.creationDate = creationDate;
		this.deadlineDate = deadlineDate;
		this.department = department;
		this.responsable = responsable;
	}
}

export class TicketManagement extends React.Component {

	constructor(props) {
		super(props);
		this.handleShowForm = this.handleShowForm.bind(this);
		this.handleCloseForm = this.handleCloseForm.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleSaveForm = this.handleSaveForm.bind(this);
		this.state = { showTicketForm: false };
		this.tickets = [];
	}

	renderTicketRows() {
		return this.tickets.map((ticket) => {
			return <tr>
				<td>{ticket.id}</td>
				<td>{ticket.client}</td>
				<td>{ticket.product}</td>
				<td>{ticket.version}</td>
				<td>{ticket.creationDate}</td>
				<td>{ticket.deadlineDate}</td>
				<td>{ticket.department}</td>
				<td>{ticket.responsable}</td>
			</tr>
		}
		)
	}

	handleShowForm() {
		this.setState({ showTicketForm: true })
	}

	handleCloseForm() {
		this.setState({ showTicketForm: false })
	}

	handleFormChange(type, event) {
		this.setState({[type]: event.target.value});
	}

	handleSaveForm() {
		var newTicket = new Ticket(this.tickets.length, 
			this.state.client,
			this.state.product,
			this.state.version,
			moment().format('l'),
			this.state.deadlineDate,
			this.state.department,
			this.state.responsable)
		this.tickets.push(newTicket)
		this.handleCloseForm()
	}

	render() {
		return (
			<>
				<Col>
					<Row><h1>Listado de tickets</h1></Row>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>ID TIC</th>
								<th>Cliente</th>
								<th>Producto</th>
								<th>Versión</th>
								<th>Fecha Creación</th>
								<th>Deadline</th>
								<th>Área</th>
								<th>Responsable</th>
							</tr>
						</thead>
						<tbody>
							{this.renderTicketRows()}
						</tbody>
					</Table>
					<Button variant="primary" type="submit" onClick={this.handleShowForm}>
						Crear ticket
				</Button>
				</Col>

				<Modal show={this.state.showTicketForm} onHide={this.handleCloseForm}>
					<Modal.Header closeButton>
						<Modal.Title>Ingrese los datos del nuevo ticket</Modal.Title>
					</Modal.Header>
					<Modal.Body><Form className="ticket-form" onSubmit={e => this.handleSubmit(e)}>
						<Form.Group controlId="formClient">
							<Form.Label>Cliente</Form.Label>
							<Form.Control type="text" placeholder="Ingresar cliente" value={this.state.client} onChange={(event) => this.handleFormChange('client', event)} />
						</Form.Group>

						<Form.Group controlId="formProduct">
							<Form.Label>Producto</Form.Label>
							<Form.Control type="text" placeholder="Ingresar el producto" value={this.state.product} onChange={(event) => this.handleFormChange('product', event)}/>
						</Form.Group>
						<Form.Group controlId="formVersion" value={this.state.version} onChange={(event) => this.handleFormChange('version', event)}>
							<Form.Label>Versión</Form.Label>
							<Form.Control type="text" placeholder="Ingresar la versión" />
						</Form.Group>
						<Form.Group controlId="formEndDate">
							<Form.Label>Fecha fin</Form.Label>
							<Form.Control type="date" value={this.state.deadineDate} onChange={(event) => this.handleFormChange('deadlineDate', event)}/>
						</Form.Group>
						<Form.Group>
							<Form.Group controlId="formGridState">
								<Form.Label>Área</Form.Label>
								<Form.Control as="select" value={this.state.department} onChange={(event) => this.handleFormChange('department', event)}>
									<option>Desarrollo</option>
									<option>Implementación</option>
								</Form.Control>
							</Form.Group>
						</Form.Group>
						<Form.Group>
							<Form.Label>Incidente Asociado </Form.Label>
							<Form.Control as="select" value={this.state.indicent} onChange={(event) => this.handleFormChange('incident', event)}>
								<option>INC001</option>
								<option>INC002</option>
							</Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label>Descripción</Form.Label>
							<Form.Control as="textarea" rows="3" value={this.state.description} onChange={(event) => this.handleFormChange('description', event)} />
						</Form.Group>
					</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleCloseForm}>
							Close
  					</Button>
						<Button variant="primary" type="submit" onClick={this.handleSaveForm}>
							Save Changes
  					</Button>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}