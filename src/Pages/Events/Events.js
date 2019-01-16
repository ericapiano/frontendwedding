import React, { Component } from "react";
import API from '../../utils/API';

class Events extends Component {
  state = {
    Events: []
  };
  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    API.getSavedEvents()
      .then(({data}) => this.setState({events: data}))
      .catch(err => console.log(err));
  }
  render() {
    return(
      
      <div class="eventlist">
      {
        this.state.Events.map(event => {
          return(
            <div className= "event" key={Event.id}>
              <h3 className="heading">
                {Event.eventName}
              </h3>
              <h5>
                {Event.date}
              </h5>
              <h5>{Event.locationName}</h5>
            </div>
          )
        })
      }
      </div>

    )
  }
}

export default Events;
