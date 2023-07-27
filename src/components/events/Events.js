import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useEffect, useState } from "react";

function Events() {
  const [events, setEvents] = useState([]);
  const [eventname, setEventname] = useState([]);
  const [eventlocation, setEventlocation] = useState([]);


  

  const doEffects = () => {
    // prepare what to display
    let API_URL = "http://localhost:5000/events";
    let requestPayload = {};
    let configOptions = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
    };

    // call our backend
    axios
      .get(API_URL, requestPayload, configOptions)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }

  doEffects();
  const submitForm = (event) => {
    let API_URL = "http://localhost:5000/events";
    let configOptions = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
    };


    event.preventDefault();

    // prepare payload
    const requestPayload = { 
      name: eventname,  
      location: eventlocation,
      date: new Date(),
      startTime: new Date(),
      endTime: new Date(),
  }



    // call our backend
    axios
      .post(API_URL, requestPayload, configOptions)
      .then((response) => {
        doEffects();
      })
      .catch((error) => {
        alert(error);
      });
      
  }
  // if (act === "views")

  return (
    <div className="col-xs-12 col-sm-9">
      <div className="jumbotron">
        <a href="/" className="visible-xs" data-toggle="offcanvas">
          <i className="fa fa-lg fa-reorder"></i>
        </a>
        <h1>Events</h1>
        <p>
          Hello Collegue, Kindly find details below of todays events to help our
          guests accordingly.
        </p>
      </div>
      

      <div className="row">
        {events.map((item) => (
          <>
            <div key={item.id} className="col-3 col-sm-3 col-lg-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-calendar-event"
                viewBox="0 0 16 16"
              >
                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
              <h4>{item.name}</h4>
              <p>location: {item.location}</p>
              <p>date: {item.date}</p>
              <p>startTime: {item.startTime}</p>
              <p>endTime: {item.endTime}</p>
            </div>
          </>
        ))}
      </div>
      <hr />

      <div className="row myform">
        <form onSubmit={submitForm}>
          <label>Add new Event</label>

          <div class="row">
            <div class="col-md-2">
              <label for="" class="form-label">
                Event Name
              </label>
              <input type="text" class="form-control" name="name" value={eventname}   onChange={(e) => setEventname(e.target.value)} />
            </div>
            <div class="col-md-2">
              <label for="eventlocation" class="form-label">
                Location
              </label>
              <input type="text" class="form-control" name="location" value={eventlocation}   onChange={(e) => setEventlocation(e.target.value)} />
            </div>
          </div>

          <div class="row">
            <br />
          <div class="col-md-2">
            <button type="submit" class="btn btn-primary">
              Save Event
            </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Events;
