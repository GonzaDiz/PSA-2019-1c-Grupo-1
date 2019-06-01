const React = require('react');
const ReactDOM = require('react-dom');
//const client = require('./client');
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './sidenav.css';
import style from 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { TicketManagement } from './components/support/tickets/TicketManagement.jsx';
import { IncidentManagement } from './components/support/incidents/IncidentManagement.jsx'

const psaModule = {
    NONE: 'none',
    TICKETS: 'tickets',
    INCIDENTS: 'incidents'
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selectedModule: psaModule.NONE };
    }

    changeSelected(selected) {
        this.setState({ selectedModule: selected })
    }

    selectedModuleComponent() {
        switch (this.state.selectedModule) {
            case psaModule.NONE:
                return <TicketManagement></TicketManagement>
            case psaModule.TICKETS:
                return <TicketManagement></TicketManagement>
            case psaModule.INCIDENTS:
                return <IncidentManagement></IncidentManagement>
            default:
                break;
        }
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col sm={3} md={3}lg={3} className="full-height">
                        <SideNav
                            onSelect={(selected) => {
                                this.changeSelected(selected)
                            }}

                            expanded={true}
                        >
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected='soporte'>
                                <NavItem expanded={true}
                                    eventKey='soporte'>
                                    <NavIcon>
                                        <i className="fa fa-fw fa-ticket" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Soporte
                        </NavText>
                                    <NavItem eventKey={psaModule.TICKETS}>
                                        <NavText>
                                            Tickets
                            </NavText>
                                    </NavItem>
                                    <NavItem eventKey={psaModule.SLA}>
                                        <NavText>
                                            SLA
                            </NavText>
                                    </NavItem>
                                    <NavItem eventKey={psaModule.INCIDENTS}>
                                        <NavText>
                                            Incidentes
                            </NavText>
                                    </NavItem>
                                </NavItem>
                                <NavItem eventKey="project">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-folder-open" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Gestión de Proyecto
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="product">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-shopping-bag" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Gestión de Producto
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="resources">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-users" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Gestión de Recursos
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="clients">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-address-book-o" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Gestión de Clientes
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="finances">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-money" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Ventas y Finanzas
                                    </NavText>
                                </NavItem>
                            </SideNav.Nav>
                        </SideNav>
                    </Col>
                    {this.selectedModuleComponent()}
                </Row>
            </Container>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)
