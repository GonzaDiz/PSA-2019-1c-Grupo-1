import Col from "react-bootstrap/Col";
const React = require('react');
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Alert from 'react-bootstrap/Alert';
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import {ClientForm} from "./ClientForm.jsx";

export class ClientsView extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
        this.state.showClientForm = false

        const data = [{
            clientId: 'D001',
            clientName: "Toyota",
            prodName: 'CRM',
            prodVersion: "v1.3",
        },{
            clientId: 'D001',
            clientName: "Toyota",
            prodName: 'ERP',
            prodVersion: "v1.8",
        },{
            clientId: 'D001',
            clientName: "Toyota",
            prodName: 'ERP',
            prodVersion: "v1.9",
        },{
            clientId: 'D002',
            clientName: "Ford",
            prodName: 'CRM',
            prodVersion: "v1.2",

        }]

        const columns = [{
            Header: 'ID Cliente',
            accessor: 'clientId',
            width: 100
        }, {
            Header: 'Nombre de Cliente',
            accessor: 'clientName',
            width: 500,
        }, {
            Header: 'Nombre de Producto',
            accessor: 'prodName',
            width: 200
        }, {
            Header: 'Version de Producto',
            accessor: 'prodVersion',
            width: 200
        }]

        this.columns = columns;
        this.state.data = data;
    }

    handleShowForm = () => {
        this.setState({ showClientForm: true })
    }

    handleCloseForm = () => {
        this.setState({ showClientForm: false })
    }

    addPFC = (prodForClient) => {

        const data= this.state.data;
        const newData = [];
        for (const record of data) {
            const newRecord = {... record};
            newData.push(newRecord);
        }
        newData.push(prodForClient);
        this.setState( { data: newData });


        this.handleCloseForm()
    }

    render() {
        return <div>
            <Row><h1>Productos por Cliente</h1></Row>
            <ReactTable
                data={this.state.data}
                columns={this.columns}
                defaultPageSize={10}
                pageSizeOptions= {[5, 10, 15]}

            />
            <Button variant="primary" type="submit" onClick={this.handleShowForm}>
                Agregar Producto a Cliente
            </Button>
            <ClientForm show={this.state.showClientForm} onHide={this.handleCloseForm}
                        onSave={this.addPFC}></ClientForm>
        </div>
    }

}



