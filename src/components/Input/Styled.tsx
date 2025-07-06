'use client';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';



// shared style rules for transparent bg + chrome‐autofill override
const transparentBgAndAutofillFix = {
  backgroundColor: 'transparent',

  '& .MuiOutlinedInput-root': {
    '& input': {
      '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus':
        {
          WebkitBoxShadow: '0 0 0 1000px transparent inset !important',
          boxShadow: '0 0 0 1000px transparent inset !important',
          WebkitTextFillColor: 'inherit !important',
          transition: 'background-color 5000s ease-in-out 0s !important',
        },
    },
  },
};

// your existing styled TextField
export const StyledTextField = styled(TextField)(() => ({
  ...transparentBgAndAutofillFix,
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
  },
}));

// new styled telephone input
export const StyledTelInput = styled(MuiTelInput)(() => ({
  ...transparentBgAndAutofillFix,
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
  },
}));

// // styled DatePicker
// export const StyledDatePicker = styled(DatePicker)(() => ({
//   '& .MuiOutlinedInput-root': {
//     borderRadius: '16px !important',
//   },
//   '& .MuiOutlinedInput-notchedOutline': {
//     borderRadius: '16px !important',
//   },
//   '& .MuiInputBase-root': {
//     borderRadius: '16px !important',
//   },
// }));