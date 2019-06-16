import React from 'react';
import AppContext from '../../root/AppContext';
import { Typography, withStyles,
    Paper,
    TableHead,
    Table,
    TableRow,
    TableBody,
    TableCell,
    Button
} from '@material-ui/core';
import { withRouter, Link } from 'react-router-dom';
import _ from 'lodash'
import UpdateRiskModal from './UpdateRiskModal'
import CreateRiskModal from './CreateRiskModal'
const styles = theme => ({
    main: {
        padding: theme.spacing.unit * 2,
    },
    title: {
        marginBottom: theme.spacing.unit * 4,
    },
    paper: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
})

class ProjectRisks extends React.Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);

        this.state = { risks:[],
            updateModalOpen:false,
            createModalOpen:false,
            projectId: _.get(this.props, 'match.params.projectId')}
        this.loadRisks()
    }

    loadRisks = () =>{
        fetch(`/proyectos/${this.state.projectId}/riesgos`)
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(risks => {
                this.setState({risks: risks})
            })
    }


    closeUpdateModal = () =>{
        this.setState({ assignModalOpen: false });
        this.loadRisks()
    }
    openUpdateModal = () => this.setState({ assignModalOpen: true });

    closeCreateModal = () => {
        this.setState({createModalOpen: false});
        this.loadRisks();
    }
    openCreateModal = () => this.setState({ createModalOpen: true });


    render = () => {
        const { classes } = this.props;
        return (
            <main className={classes.main}>
                <Typography
                    className={classes.title}
                    variant="h4"
                >
                    Riesgos del proyecto {this.state.projectId}
                </Typography>

                <Button
                    variant="text"
                    color="primary"
                    onClick={() => {
                        this.openCreateModal()}}
                >
                    Crear Riesgo
                </Button>

                <Paper className={classes.paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Descripcion</TableCell>
                                <TableCell align="left">Probabilidad</TableCell>
                                <TableCell align="left">Impacto</TableCell>
                                <TableCell align="left">Exposicion</TableCell>
                                <TableCell align="left">Accion</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.risks.map(r => (
                                <TableRow key={r.id}>
                                    <TableCell align="left">{r.id}</TableCell>
                                    <TableCell align="left">{r.description}</TableCell>
                                    <TableCell align="left">{r.qualitativeProbability}</TableCell>
                                    <TableCell align="left">{r.qualitativeImpact}</TableCell>
                                    <TableCell align="left">{r.qualitativeExposure}</TableCell>
                                    <TableCell align="left">
                                        <Button
                                                variant="text"
                                                color="primary"
                                                onClick={() => {
                                                    this.state.selectedRisk = r;
                                                    this.openUpdateModal()}}
                                            >
                                                Actualizar
                                        </Button>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                {this.state.assignModalOpen===true ? (<UpdateRiskModal
                    projectId={this.state.projectId}
                    risk={this.state.selectedRisk}
                    open={this.state.assignModalOpen}
                    resources={this.state.resources}
                    onClose={this.closeUpdateModal}
                />) : ( <div></div> ) }

                {this.state.createModalOpen===true ? (<CreateRiskModal
                    projectId={this.state.projectId}
                    open={this.state.createModalOpen}
                    onClose={this.closeCreateModal}
                />) : (<div></div>)}
            </main>
        )
    }
}

const withStyle = withStyles(styles, { withTheme: true })(ProjectRisks);
export default withRouter(withStyle);