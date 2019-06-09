const React = require('react');
const ReactDOM = require('react-dom');
//const client = require('./client');
import SideNav, {Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './sidenav.css';
import style from 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import {TicketManagement} from './components/support/tickets/TicketManagement.jsx';
import {IncidentManagement} from './components/support/incidents/IncidentManagement.jsx';
import {ProjectsBriefCase} from './components/project/ProjectsBriefCase.jsx';
import {ClientsView} from './components/clients/ClientsView.jsx';

const psaModule = {
    NONE: 'none',
    TICKETS: 'tickets',
    INCIDENTS: 'incidents',
    PROJECTS: 'projects',
    TASKS: 'tasks',
    REQUIREMENTS: 'requirements',
    RISKS: 'risks',
    PHASES: 'phases',
    PROJECTRESOURCES: 'projectResources',
    CLIENTS: 'clients'
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {selectedModule: psaModule.NONE};
        this.expandProjects = false;
        this.expandSupport = false;
        this.expandFinances = false;
        this.expandProducts = false;
        this.expandResources = false;
        this.expandClients = false;
        this.expandProjectTasks = false;
        this.expandProjectRisk = false

    }

    changeSelected(selected) {
        this.setState({selectedModule: selected})
    }

    expand(module) {
        if (this.state.selectedModule == module) {
            return true;
        }
        return false;
    }

    selectedModuleComponent() {
        switch (this.state.selectedModule) {
            case psaModule.NONE:
                break;
            case psaModule.TICKETS:
                return <TicketManagement></TicketManagement>
            case psaModule.INCIDENTS:
                return <IncidentManagement></IncidentManagement>
            case psaModule.PROJECTS:
                return <ProjectsBriefCase></ProjectsBriefCase>
            case psaModule.CLIENTS:
                return <ClientsView></ClientsView>
            default:
                break;
        }
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col sm={3} md={3} lg={3} className="full-height">
                        <SideNav
                            onSelect={(selected) => {
                                this.changeSelected(selected)
                            }}

                            expanded={true}
                        >
                            <SideNav.Toggle/>
                            <SideNav.Nav defaultSelected='soporte'>
                                <NavItem
                                    eventKey='soporte'>
                                    <NavIcon>
                                        <i className="fa fa-fw fa-ticket" style={{fontSize: '1.75em'}}/>
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
                                <NavItem
                                    eventKey={psaModule.PROJECTS}>
                                    <NavIcon>
                                        <i className="fa fa-fw fa-folder-open" style={{fontSize: '1.75em'}}/>
                                    </NavIcon>
                                    <NavText>
                                        Gestión de Proyecto
                                    </NavText>
                                    <NavItem eventKey={psaModule.PROJECTS}>
                                        <NavText>
                                            Portafolio de Proyectos
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey={psaModule.TASKS}>
                                        <NavText>
                                            Tareas
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey={psaModule.RISKS}>
                                        <NavText>
                                            Riesgos
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey={psaModule.REQUIREMENTS}>
                                        <NavText>
                                            Requisitos
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey={psaModule.PHASES}>
                                        <NavText>
                                            Fases e Iteraciones
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey={psaModule.PROJECTRESOURCES}>
                                        <NavText>
                                            Recursos
                                        </NavText>
                                    </NavItem>
                                </NavItem>
                                <NavItem eventKey="product">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-shopping-bag" style={{fontSize: '1.75em'}}/>
                                    </NavIcon>
                                    <NavText>
                                        Gestión de Producto
                                    </NavText>
                                </NavItem>
                                <NavItem>
                                    <NavIcon>
                                        <i className="fa fa-fw fa-users" style={{fontSize: '1.75em'}}/>
                                    </NavIcon>
                                    <NavText>
                                        Gestión de Recursos
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="clients">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-address-book-o" style={{fontSize: '1.75em'}}/>
                                    </NavIcon>
                                    <NavText>
                                        Gestión de Clientes
                                    </NavText>
                                    <NavItem eventKey={psaModule.CLIENTS}>
                                        <NavText>
                                            Clientes
                                        </NavText>
                                    </NavItem>
                                </NavItem>
                                <NavItem eventKey="finances">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-money" style={{fontSize: '1.75em'}}/>
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
    <App/>,
    document.getElementById('react')
)
