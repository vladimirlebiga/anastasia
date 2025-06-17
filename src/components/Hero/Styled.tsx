'use client';
import { styled } from '@mui/material/styles';

export const StyledSection = styled('section')<{ url: string }>(({ url }) => ({
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  height: '537px',
  width: '100%',
  overflow: 'hidden',
  // No background image or opacity here!

  // Pseudo-element for the semi-transparent background
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 20%',
    opacity: 0.75, // Only the overlay is semi-transparent
    zIndex: 1,
  },
  // Make sure children are above the overlay
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
}));
