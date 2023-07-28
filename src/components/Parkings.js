import axios from "axios";
import { useEffect, useState } from "react";

function Parkings() {
  const [parking, setParking] = useState([]);
  const [building, setBuilding] = useState();
  const [location, setLocation] = useState();
  const [number, setNumber] = useState();

  // define variable
  let availing = <span className="avail">Avail</span>;
  let booking = <span className="book">Book</span>;


  // prepare what to display
  useEffect(() => {
    let API_URL = "http://localhost:5000/parkingslots";
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
        setParking(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);



  const doEffects = () => {
    // prepare what to display
    let API_URL = "http://localhost:5000/parkingslots";
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
        setParking(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }

  const availbook = (a, e) => {
    let API_URL = "http://localhost:5000/parkingslots/"+a.id;
    let configOptions = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
    };

    // alert(a.available)
      
    const requestPayload = {
      building: a.building,  
      location: a.location,
      number: a.number,
      available: a.available
  }


    // call our backend
    axios
      .put(API_URL, requestPayload, configOptions)
      .then((response) => {
        doEffects();
        alert(response.data.responsemessage)
      })
      .catch((error) => {
        alert(error);
      });
  }


  const submitForm = (event) => {
    let API_URL = "http://localhost:5000/parkingslots";
    let configOptions = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
    };


    event.preventDefault();

    // prepare payload
    const requestPayload = {
      building: building,  
      location: location,
      number: number,
      available: true,
  }



    // call our backend
    axios
      .post(API_URL, requestPayload, configOptions)
      .then((response) => {
        doEffects();
        setBuilding("");
        setLocation("");
        setNumber("");
        alert(response.data.responsemessage);
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
        <h1>Parking Slots</h1>
        <p>
          One stop check of available parking spaces
        </p>
        <a href="#addparking">Add Parking</a>
      </div>
      

      <div className="row">
        {parking.map((item) => (
          <>
            <div key={item.id} className="col-3 col-sm-3 col-lg-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-p-circle" viewBox="0 0 16 16">
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5V4.002Zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97H8.27Z"/>
</svg>
              <h4>{item.name}</h4>
              <p>building: {item.building}</p>
              <p>location: {item.location}</p>
              <p>number: {item.number}</p>
              <p>available: {item.available}</p>
              <p className="delete" type="button" onClick={(e) => availbook({id: item.id, building: item.building, location: item.location, number: item.number, available: !item.available}, e)}>{item.available ? booking : availing}</p>
              <hr />
            </div>
          </>
        ))}
      </div>
      <hr />

      <div className="row myform" id="addparking">
        <form onSubmit={submitForm}>
          <label>Add Parking Slot</label>

          <div class="row">
            <div class="col-md-2">
              <label for="" class="form-label">
                Building
              </label>
              <input type="text" class="form-control" name="building" value={building}   onChange={(e) => setBuilding(e.target.value)} />
            </div>
            <div class="col-md-2">
              <label for="eventlocation" class="form-label">
                Location
              </label>
              <input type="text" class="form-control" name="location" value={location}   onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div class="col-md-2">
              <label for="eventlocation" class="form-label">
                Number
              </label>
              <input type="text" class="form-control" name="number" value={number}   onChange={(e) => setNumber(e.target.value)} />
            </div>
          </div>

          <div class="row">
            <br />
          <div class="col-md-2">
            <button type="submit" class="btn btn-primary">
              Save Parking
            </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Parkings;