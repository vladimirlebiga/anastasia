import { Controller } from 'react-hook-form';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dynamic from 'next/dynamic';

// Dynamically import the DatePicker to avoid SSR
const DynamicDatePicker = dynamic(() => Promise.resolve(DatePicker), {
  ssr: false,
});

interface DateInputProps {
  name: string;
  control: any;
  label?: string;
  required?: boolean;
}

export const DateInput = ({
  name,
  control,
  label = 'Ceremony Time',
  required = false,
}: DateInputProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={name}
        control={control}
        rules={required ? { required: 'Date is required' } : undefined}
        render={({ field, fieldState }) => (
          <DynamicDatePicker
            label={label}
            format="dd/MM/yyyy"
            minDate={new Date()}
            {...field}
            slotProps={{
              textField: {
                error: !!fieldState.error,
                helperText: fieldState.error?.message,
                fullWidth: true,
                InputLabelProps: {
                  shrink: true,
                },
                sx: {
                  '& input::placeholder': {
                    color: '#B29584',
                    opacity: 1,
                  },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '16px',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderRadius: '16px',
                  },
                  '& fieldset': {
                    borderRadius: '16px',
                  },
                  '& .MuiPickersInputBase-sectionContent': {
                    color: '#000000',
                    opacity: 1,
                  },
                  '& .MuiPickersInputBase-input': {
                    color: '#B29584',
                  },
                  '& .MuiPickersInputBase-input:not(:focus)': {
                    color: '#B29584',
                  },
                  '& .MuiPickersInputBase-input[readonly]': {
                    color: '#B29584',
                  },
                },
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};
