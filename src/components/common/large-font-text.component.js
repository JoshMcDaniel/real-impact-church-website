import { Typography } from '@mui/material';

export const LargeFontText = (props) => {
  return (
    <Typography variant="h1" fontSize={{ md: '12rem' }}>
      {props.text}
    </Typography>
  );
};

export default LargeFontText;
