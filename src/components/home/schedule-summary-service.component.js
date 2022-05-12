import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

export const ScheduleSummaryService = (props) => {
  const { title, day_of_week, time, description } = props.service;

  return (
    <Box
      sx={{
        display: 'grid',
        rowGap: '0.5rem',
      }}
    >
      <Typography variant="h5">{title}</Typography>
      <Box
        sx={{
          display: 'grid',
          rowGap: '0.25rem',
        }}
      >
        <Typography variant="subtitle1" fontWeight="700" color="secondary">
          {day_of_week} | <time>{time}</time>
        </Typography>
        <Typography variant="body2" component="summary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ScheduleSummaryService;
