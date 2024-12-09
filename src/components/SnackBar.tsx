import React from 'react';
import Snackbar from '@mui/material/Snackbar';

const CustomSnackBar = ({ open, onClose, message }) => {
    return <Snackbar open={open} onClose={onClose} message={message} />;
};

export default CustomSnackBar;
