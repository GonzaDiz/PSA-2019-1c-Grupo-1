import React from 'react'
import CustomSnackbarContent from "./CustomSnackbarContent";
import Snackbar from '@material-ui/core/Snackbar';

const CustomSnackbar = (props) => {
  const { anchorOrigin, open, autoHideDuration, onClose, snackId, variant, message } = props;

  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <CustomSnackbarContent
        data={snackId}
        onClose={onClose}
        variant={variant}
        message={message}
      />
    </Snackbar>
  );
}

export default CustomSnackbar