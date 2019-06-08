import React from 'react';
import AppContext from './AppContext'
import Routes from './routes';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CustomSnackbar from '../utils/CustomSnackbar';
import { BrowserRouter as Router } from 'react-router-dom';
import AppMenu from '../core/AppMenu';
import LoadingBar from '../utils/LoadingBar';

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
      loading: false,
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

  startLoading = () => this.setState({ loading: true });
  finishLoading = () => this.setState({ loading: false });

  renderLoading = () => <LoadingBar loading={true} />

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
    const { snackbar, loading } = this.state;
    const showSnackbar = this.showSnackbar
    const changeAppBarTitle = this.changeAppBarTitle;
    const startLoading = this.startLoading;
    const finishLoading = this.finishLoading;
    const renderLoading = this.renderLoading;

    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppContext.Provider
            value={{
              showAlert: showSnackbar,
              changeAppBarTitle: changeAppBarTitle,
              startLoading,
              finishLoading,
              renderLoading,
            }}
          >
            <AppMenu>
              <LoadingBar loading={loading} />
              <Routes loading={loading} />
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
