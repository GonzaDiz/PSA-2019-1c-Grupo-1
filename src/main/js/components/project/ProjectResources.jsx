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

class ProjectResources extends React.Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);

        this.state = { resources:[],
            assignations:[],
            projectId: _.get(this.props, 'match.params.projectId')}
        this.loadAssignations();
        this.loadResources();
    }

    loadAssignations = () =>{
        fetch(`/proyectos/${this.state.projectId}/recursos/asignaciones`)
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(assignations => {
                this.setState({assignations: assignations})
            })
    }

    loadResources = () =>{
        fetch(`/proyectos/${this.state.projectId}/recursos`)
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(resources => {
                this.setState({resources: resources})
            })
    }


    render = () => {
        const { classes } = this.props;
        return (
            <main className={classes.main}>
                <Typography
                    className={classes.title}
                    variant="h4"
                >
                    Recursos del proyecto {this.state.projectId}
                </Typography>



                <Paper className={classes.paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Cuit</TableCell>
                                <TableCell align="left">Nombre</TableCell>
                                <TableCell align="left">Rol</TableCell>
                                <TableCell align="left">Inicio de asignación</TableCell>
                                <TableCell align="left">Fin de asignación</TableCell>
                                <TableCell align="left">Dedicacion(Hs/semana)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.resources.map(r => (
                                <TableRow key={r.cuit}>
                                    <TableCell align="left">{r.cuit}</TableCell>
                                    <TableCell align="left">{r.name}</TableCell>
                                    <TableCell align="left">{this.state.assignations[(r.cuit.toString())].role}</TableCell>
                                    <TableCell align="left">{this.state.assignations[(r.cuit.toString())].startDate}</TableCell>
                                    <TableCell align="left">{this.state.assignations[(r.cuit.toString())].endDate}</TableCell>
                                    <TableCell align="left">{this.state.assignations[(r.cuit.toString())].dedication}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </main>
        )
    }
}

const withStyle = withStyles(styles, { withTheme: true })(ProjectResources);
export default withRouter(withStyle);