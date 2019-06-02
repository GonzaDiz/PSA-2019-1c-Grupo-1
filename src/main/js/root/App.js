import React from 'react';
import AppContext from './AppContext'
import Routes from './routes';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CustomSnackbar from '../utils/CustomSnackbar';
import { BrowserRouter as Router } from 'react-router-dom';
import AppMenu from '../core/AppMenu';

// See https://material-ui.com/customization/themes/ to custom your theme
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      snackbar: {
        open: false,
        variant: '',
        message: '',
        snackId: '',
        autoHideDuration: 6000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        }
      }
    }
  }

  showSnackbar = ({ 
    variant, 
    message, 
    snackId,
    anchorOrigin = {
      vertical: 'bottom', 
      horizontal: 'center'
    },
    autoHideDuration=6000,
  }) => {
    this.setState({
      snackbar: {
        open: true,
        variant,
        message,
        snackId,
        anchorOrigin,
        autoHideDuration
      }
    });
  }

  closeSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState(prevState => ({
      snackbar: {
        ...prevState.snackbar,
        open: false,
      }
    }));
  }

  render = () => {
    const { snackbar } = this.state;
    const showSnackbar = this.showSnackbar
    const changeAppBarTitle = this.changeAppBarTitle;

    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppContext.Provider
            value={{
              showAlert: showSnackbar,
              changeAppBarTitle: changeAppBarTitle,
            }}
          >
            <AppMenu>
              <Routes />
            </AppMenu>
            
            <CustomSnackbar 
              open={snackbar.open}
              anchorOrigin={snackbar.anchorOrigin}
              autoHideDuration={snackbar.autoHideDuration}
              snackId={snackbar.snackId}
              variant={snackbar.variant}
              message={snackbar.message}
              onClose={this.closeSnackbar}
            />
          </AppContext.Provider>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
