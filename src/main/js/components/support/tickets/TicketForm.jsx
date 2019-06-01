const React = require('react');
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import moment from 'moment';

class Ticket {
	constructor(id, client, product, version, creationDate, deadlineDate, department, responsable, description) {
		this.id = id;
		this.client = client;
		this.product = product;
		this.version = version;
		this.creationDate = creationDate;
		this.deadlineDate = deadlineDate;
		this.department = department;
        this.responsable = responsable;
        this.description = description;
	}
}

export class TicketForm extends React.Component {

    constructor(props) {
        super(props);
		this.state = { };
    }

    handleFormChange(type, event) {
		this.setState({[type]: event.target.value});
	}

    handleSubmitForm = () => {
		var newTicket = new Ticket(1, 
			this.state.client,
			this.state.product,
			this.state.version,
			moment().format('l'),
			this.state.deadlineDate,
			this.state.department,
            this.state.responsable,
            this.state.description)
		this.props.onSave(newTicket)
		this.props.onHide()
	}
    
    render() {
        return <Modal show={this.props.show} onHide={this.props.onHide}>
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
            <Button variant="secondary" onClick={this.props.onHide}>
                Cerrar
          </Button>
            <Button variant="primary" type="submit" onClick={this.handleSubmitForm}>
                Crear ticket
          </Button>
        </Modal.Footer>
    </Modal>
    }
}