import axios from "axios";
import { useEffect, useState } from "react";

function Home(){
  const [events, setEvents] = useState(0);
  const [guest, setGuest] = useState(0);
  const [parkings, setParkings] = useState(0);

  useEffect(()=>{
    // get events count
    axios
      .get("http://localhost:5000/events", {}, {})
      .then((response) => {
        setEvents(response.data.length);
      })
      .catch((error) => {
        alert(error);
      });

      // get available parking count
      axios
      .get("http://localhost:5000/parkingslots", {}, {})
      .then((response) => {
        setParkings(response.data.length);
      })
      .catch((error) => {
        alert(error);
      });

      // get checked in guest count
      axios
      .get("http://localhost:5000/guests", {}, {})
      .then((response) => {
        setGuest(response.data.length);
      })
      .catch((error) => {
        alert(error);
      });
  });


    return(
      <div className="col-xs-12 col-sm-9">
        <div className="jumbotron">
          <a href="#" className="visible-xs" data-toggle="offcanvas">
            <i className="fa fa-lg fa-reorder"></i>
          </a>
          <h1>Guest Portal</h1>
          <p>
            Welcome to Safaricom guest portal.Keep count of events and visitors
            who are streaming in.
          </p>
        </div>
        <div className="row">
          <div className="col-6 col-sm-6 col-lg-4">
            <h4>Current Events</h4>
            <p>{events}</p>
            {/* <p>
              <a className="btn btn-default" href="#">
                View details »
              </a>
            </p> */}
          </div>
          <div className="col-6 col-sm-6 col-lg-4">
            <h4>Available Parkings</h4>
            <p>{parkings}</p>
            {/* <p>
              <a className="btn btn-default" href="#">
                View details »
              </a>
            </p> */}
          </div>
          <div className="col-6 col-sm-6 col-lg-4">
            <h4>Guests Recieved</h4>
            <p>{guest}</p>
            {/* <p>
              <a className="btn btn-default" href="#">
                View details »
              </a>
            </p> */}
          </div>
        </div>
      </div>
    );
}
export default Home;