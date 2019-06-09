import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';

class LoadingBar extends React.Component {
  render = () => {
    const { loading } = this.props;
    
    if (loading) return <LinearProgress />
    else return null;
  }
}

export default LoadingBar;