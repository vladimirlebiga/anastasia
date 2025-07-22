'use client';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isMobile'
})(({isMobile}: {isMobile: boolean}) => ({
  display: 'flex',
  alignItems: isMobile ? 'center' : 'center',
  justifyContent: isMobile ? 'space-between' : 'center',
  padding: '10px',
}));