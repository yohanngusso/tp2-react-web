import { DateTimePicker } from '@mui/x-date-pickers';

const CustomDateTimePicker = ({ value, onChange }) => {
    return <DateTimePicker value={value} onChange={onChange} />;
};

export default CustomDateTimePicker;
