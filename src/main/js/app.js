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
import {Ticket} from './support/tickets/tickets.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col lg={3}>
                <SideNav
                
                expanded={true}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="soporte">
                    <NavItem eventKey="soporte">
                        <NavIcon>
                            <i className="fa fa-fw fa-ticket" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Soporte
                        </NavText>
                        <NavItem eventKey="support/tickets">
                            <NavText>
                                Tickets
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="support/sla">
                            <NavText>
                                SLA
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="support/incidents">
                            <NavText>
                                Incidentes
                            </NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Charts
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            </Col>
            
            <Ticket></Ticket>
        
            </Row>
            
        </Container>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)
