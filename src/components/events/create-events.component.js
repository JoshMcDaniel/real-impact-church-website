import React, { Component } from 'react';
// import ReactDatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class CreateEvent extends Component {
  baseEvent = {
    name: '',
    description: '',
    date: new Date(),
    time: '',
    location: '',
    imageUrl: '',
  };

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.onImageUrlChange = this.onImageUrlChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = this.baseEvent;
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onDescriptionChange(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onDateChange(date) {
    this.setState({
      date: date,
    });
  }

  onTimeChange(e) {
    this.setState({
      time: e.target.value,
    });
  }

  onLocationChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  onImageUrlChange(e) {
    this.setState({
      imageUrl: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newEvent = {
      name: this.state.name,
      description: this.state.description,
      date: this.state.date,
      time: this.state.time,
      location: this.state.location,
      imageUrl: this.state.imageUrl,
    };

    axios
      .post('http://localhost:5000/events/add', { event: newEvent })
      .then((res) => {
        this.setState(this.baseEvent);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h3>Create an event</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onDescriptionChange}
            />
          </div>
          {/* <div className="form-group">
            <label>Date: </label>
            <ReactDatePicker
              selected={this.state.date}
              onChange={this.onDateChange}
            />
          </div> */}
          <div className="form-group">
            <label>Time: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.time}
              onChange={this.onTimeChange}
            />
          </div>
          <div className="form-group">
            <label>Location: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.location}
              onChange={this.onLocationChange}
            />
          </div>
          <div className="form-group">
            <label>Image URL: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.imageUrl}
              onChange={this.onImageUrlChange}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Event"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
