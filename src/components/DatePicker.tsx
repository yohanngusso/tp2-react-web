import { DatePicker } from '@mui/x-date-pickers';

const CustomDatePicker = ({ value, onChange }) => {
    return <DatePicker value={value} onChange={onChange} />;
};

export default CustomDatePicker;
