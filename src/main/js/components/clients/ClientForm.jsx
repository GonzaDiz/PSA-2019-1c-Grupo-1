import {TicketManagement} from "../support/tickets/TicketManagement";

const React = require('react');
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton'
import moment from 'moment';
import {IncidentManagement} from "../support/incidents/IncidentManagement";
import {ProjectsBriefCase} from "../project/ProjectsBriefCase";
import {ClientsView} from "./ClientsView";

export class ClientForm extends React.Component {

    constructor(props) {
        super(props);
		this.state = { };
    }

    handleFormChange(type, event) {
        this.setState({[type]: event.target.value});
    }

    handleSubmitForm = () => {
        const id = this.getClientID(this.state.clientName)
		this.props.onSave({clientId: id,
            clientName:this.state.clientName,
            prodName:this.state.prodName,
            prodVersion:this.state.prodVersion})
		this.props.onHide()
	}
    
    render() {
        return <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Ingrese los datos del Producto para un Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form className="client-form" onSubmit={e => this.handleSubmit(e)}>
            <Form.Group controlId="formClient">
                <Form.Label>Cliente:</Form.Label>
                <Form.Control as="select" value={this.state.clientName} onChange={(event) => this.handleFormChange('clientName', event)}>
                    <option>Selecciona un Cliente</option>
                    <option>Disney</option>
                    <option>Fiat</option>
                    <option>Ford</option>
                    <option>Toyota</option>
                    <option>Universal</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formProduct">
                <Form.Label>Producto:</Form.Label>
                <Form.Control type="text" placeholder="Ingresar el producto" value={this.state.prodName} onChange={(event) => this.handleFormChange('prodName', event)}/>
            </Form.Group>
            <Form.Group controlId="formVersion" value={this.state.prodVersion} onChange={(event) => this.handleFormChange('prodVersion', event)}>
                <Form.Label>Versión</Form.Label>
                <Form.Control type="text" placeholder="Ingresar la versión" />
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onHide}>
                Cerrar
          </Button>
            <Button variant="primary" type="submit" onClick={this.handleSubmitForm}>
                Crear Producto para Cliente
          </Button>
        </Modal.Footer>
    </Modal>
    }

    getClientID(client){
        switch (client) {
            case "Toyota":
                return "D001";
            case "Ford":
                return "D002";
            case "Fiat":
                return "D003";
            case "Disney":
                return "D004";
            case "Universal":
                return "D005";
            default:
                return null;
        }
    }
}