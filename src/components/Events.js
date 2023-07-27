import axios from "axios";
import { useEffect, useState } from "react";

function Events() {
  const [events, setEvents] = useState([]);

  // prepare what to display

  useEffect(() => {
    let API_URL = "http://localhost:5000/events";
    // let API_URL = "https://jsonplaceholder.typicode.com/todos";
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
