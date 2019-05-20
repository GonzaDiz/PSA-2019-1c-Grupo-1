const React = require('react');
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { TicketForm } from './TicketForm';

export class TicketManagement extends React.Component {

	constructor(props) {
		super(props);
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
					<Row><h1>Listado de tickets</h1></Row>
					<Row><Table responsive="sm" striped bordered hover>
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