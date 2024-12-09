import React from 'react';
import IconButton from '@mui/material/IconButton';

const CustomIconButton = ({ onClick, icon }) => {
    return <IconButton onClick={onClick}>{icon}</IconButton>;
};

export default CustomIconButton;
