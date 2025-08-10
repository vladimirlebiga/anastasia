'use client';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledButtonWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: isMobile ? '20px' : '80px',
}));

export const StyledH1 = styled(Typography)(() => ({
  fontFamily: 'Playfair Display',
  textTransform: 'uppercase',
  color: '#000000',
  textAlign: 'center',
  marginTop: '20px',
}));