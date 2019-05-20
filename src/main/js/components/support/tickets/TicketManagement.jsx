const React = require('react');
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TicketForm } from './TicketForm';
import Card from 'react-bootstrap/Card'
import Ticket from './TicketForm';

export class TicketManagement extends React.Component {

	constructor(props) {
		super(props);
		this.state = { showTicketForm: false };
		var tickets = [{
			id: "TIC-001",
			client: "Toyota",
			product: "CRM",
			description: "Error al agregar un cliente"
		},
		{
			id: "TIC-002",
			client: "PEPSI",
			product: "CRM",
			description: "Error al agregar un cliente"
		},
		{
			id: "TIC-003",
			client: "MercadoLibre",
			product: "CRM",
			description: "Error al agregar un cliente"
		},
		{
			id: "TIC-004",
			client: "Disney",
			product: "CRM",
			description: "Error al agregar un cliente"
		}]
		this.tickets = tickets;
	}

	renderTickets() {
		return this.tickets.map((ticket) => {
			return <Card style={{ width: '18rem' }}>
			<Card.Body>
			  <Card.Title>Ticket: {ticket.id}</Card.Title>
			  <Card.Text>Producto: {ticket.product}</Card.Text>
			  <Card.Text>Reportado por: {ticket.client}</Card.Text>
			  <Card.Text>
				Descripción: {ticket.description}
			  </Card.Text>
			  <Button variant="primary">Detalle</Button>
			</Card.Body>
		  </Card>
		}
		)
	}

	handleShowForm = () => {
		this.setState({ showTicketForm: true })
	}

	handleCloseForm = () => {
		this.setState({ showTicketForm: false })
	}

	addTicket = (ticket) => {
		this.tickets.push(ticket)
		this.handleCloseForm()
	}

	render() {
		return (
			<>
				<Col>
					<Row><h1>Tickets</h1></Row>
					<Row>
					{this.renderTickets()}
					</Row>
					<Row><Button variant="primary" type="submit" onClick={this.handleShowForm}>
						Crear ticket
				</Button></Row>
				</Col>

				 <TicketForm show={this.state.showTicketForm} onHide={this.handleCloseForm}
				 onSave={this.addTicket}></TicketForm>
			</>
		)
	}
}