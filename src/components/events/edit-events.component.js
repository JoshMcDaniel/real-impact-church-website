import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';

function EditEvent(props) {
  const [events, setEvents] = useState([]);

  const configContext = useContext(AppConfigContext);

  useEffect(() => {
    if (!events.length) {
      // console.log(configContext);
      getAllEvents();
    }
  });

  const getAllEvents = () => {
    axios
      .get(configContext.website.events.routes.get_all_events)
      .then((res) => {
        setEvents(res.data);
        console.log(res.data);
      });
  };

  // const onChangeName = (e) => {
  //   this.setState({
  //     name: e.target.value,
  //   });
  // };

  // const onDescriptionChange = (e) => {
  //   this.setState({
  //     description: e.target.value,
  //   });
  // };

  // const onDateChange = (date) => {
  //   this.setState({
  //     date: date,
  //   });
  // };

  // const onTimeChange = (e) => {
  //   this.setState({
  //     time: e.target.value,
  //   });
  // };

  // const onLocationChange = (e) => {
  //   this.setState({
  //     location: e.target.value,
  //   });
  // };

  // const onImageUrlChange = (e) => {
  //   this.setState({
  //     imageUrl: e.target.value,
  //   });
  // };

  // const deleteEvent = (id) => {
  //   axios.delete('http://localhost:5000/events/delete' + id).then((res) => {
  //     this.setState({
  //       events: this.state.events.filter((e) => e._id !== id),
  //     });

  //     console.log(res.data);
  //   });
  // };

  return (
    <div>
      <p>Events Edit component {events.length}!</p>
    </div>
  );
}

export default EditEvent;
