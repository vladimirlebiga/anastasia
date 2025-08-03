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

export const StyledDiv = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isMobile'
})(({isMobile}: {isMobile: boolean}) => ({
  position: isMobile ? 'fixed' : 'relative',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: '#FFFFFF',
  // width: '100%',
  // height: '100%',
  zIndex: 1000,
}));