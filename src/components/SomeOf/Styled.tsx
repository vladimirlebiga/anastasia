import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledSection = styled('section')(() => ({

  paddingTop: '50px',
}));

export const StyledH1 = styled(Typography)(() => ({
  fontFamily: 'Playfair Display',
  textTransform: 'uppercase',
  color: '#000000',
  textAlign: 'center',
}));

export const StyledH2 = styled(Typography)(() => ({
  fontFamily: 'Great Vibes',
  color: '#F49D6A',
  textAlign: 'center',
}));

export const StyledP = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  lineHeight: '136%',
  color: '#000000',
  textAlign: 'center',
}));

export const StyledUl = styled('ul')(() => ({
  display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  alignItems: 'center',
  margin: '30px 0',
  gap: '30px',
}));

export const StyledLi = styled('li')<{ url: string }>(({ url }) => ({
  maxWidth: '414px',
  width: '100%',
  height: '528px',
  backgroundImage: `url(${url})`,
  backgroundSize: '130% 150%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '10px',
  
}));

export const StyledImgWrapper = styled('div')(() => ({
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   width: '100%',
  //   height: '100%',
}));

// export const StyledImg = styled('img')(() => ({
//   // maxWidth: '414px',
//   // width: '100%',
//   // maxHeight: '528px',
//   borderRadius: '10px',
//   objectFit: 'cover',
//   objectPosition: 'center',
// }));
