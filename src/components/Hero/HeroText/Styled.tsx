import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledHeroTextWrapper = styled('div')(() => ({
    position: 'absolute',
    paddingTop: '300px',
    left: '-10%',

    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: '100%',
}));

export const StyledH1 = styled(Typography)(() => ({
    // fontFamily: 'Playfair Display',
    // fontWeight: 400,
    // fontSize: '64px',
    // textTransform: 'uppercase',
    // lineHeight: '120%',
    // letterSpacing: '6%',
    // textAlign: 'center',
    // color: '#000000',
}));

export const StyledH3 = styled(Typography)(() => ({
    // fontFamily: 'Great Vibes',
    // fontWeight: 400,
    // fontSize: '48px',
    // lineHeight: '120%',
    // letterSpacing: '6%',
    // textAlign: 'right',
    // color: '#000000',
}));
