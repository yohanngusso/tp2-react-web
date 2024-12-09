import Fab from '@mui/material/Fab';

const CustomFab = ({ onClick, children }) => {
    return <Fab onClick={onClick}>{children}</Fab>;
};

export default CustomFab;
