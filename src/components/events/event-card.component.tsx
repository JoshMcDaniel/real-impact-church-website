import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
} from '@mui/material';
import React from 'react';
import { OrgEvent } from './events.component';

export const EventCard = (props: { event: OrgEvent }) => {
  return (
    <Card raised>
      <CardActionArea>
        {!!props.event ? (
          <CardMedia
            component="img"
            height="200"
            image={props.event.imageUrl}
            alt={props.event.name}
          />
        ) : (
          <Skeleton variant="rectangular" height={200} />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {!!props?.event?.name ? props.event.name : <Skeleton width="50%" />}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props?.event?.description ? props.event.description : <Skeleton />}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EventCard;
