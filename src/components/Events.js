import axios from "axios";
import { useEffect, useState } from "react";

function Events() {
  const [events, setEvents] = useState([]);

  // prepare what to display

  useEffect(() => {
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
  }, []);

  return (
    <div className="col-xs-12 col-sm-9">
      <br />

      <div className="jumbotron">
        <a href="/" className="visible-xs" data-toggle="offcanvas">
          <i className="fa fa-lg fa-reorder"></i>
        </a>
        <h1>Events</h1>
        <p>
          Hello Collegue, Kindly find details below of todays events to help our
          guests accordingly.
        </p>
        <p>
          <a className="btn btn-default" href="/">
            Add New Event ++
          </a>
        </p>
      </div>
      <div className="row">
        {events.map((item) => (
          <>
            <div key={item.id} className="col-6 col-sm-6 col-lg-3">
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
    </div>
  );
}
export default Events;