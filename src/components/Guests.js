import axios from "axios";
import { useEffect, useState } from "react";

function Guests() {
  const [guests, setGuests] = useState([]);
  const [guestname, setGuestname] = useState();
  const [phone, setPhone] = useState();
  const [host, setHost] = useState();
  const [idno, setIdno] = useState();
  const [guestevent, setEvent] = useState();

  // prepare what to display
  useEffect(() => {
    let API_URL = "http://localhost:5000/guests";
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
        setGuests(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const doEffects = async () => {
    // prepare what to display
    let API_URL = "http://localhost:5000/guests";
    let requestPayload = {};
    let configOptions = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
    };

    // call our backend
    await axios
      .get(API_URL, requestPayload, configOptions)
      .then((response) => {
        setGuests(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const checkoutGuest = (a, e) => {
    let API_URL = "http://localhost:5000/guests/" + a;
    let configOptions = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
    };

    // call our backend
    axios
      .delete(API_URL, {}, configOptions)
      .then((response) => {
        doEffects();
        alert(response.data.responsemessage);
      })
      .catch((error) => {
        alert(error);
      });
  };
  const submitForm = (event) => {
    let API_URL = "http://localhost:5000/guests";
    let configOptions = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
    };

    event.preventDefault();

    // prepare payload
    const requestPayload = {
      name: guestname,
      phone: phone,
      host: host,
      idno: idno,
      event: guestevent,
    };

    // alert(requestPayload.phone)

    // call our backend
    axios
      .post(API_URL, requestPayload, configOptions)
      .then((response) => {
        doEffects();
        setGuestname("");
        setEvent("");
        setHost("");
        setPhone("");
        setIdno("");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="col-xs-12 col-sm-9">
      <div className="jumbotron">
        <a href="/" className="visible-xs" data-toggle="offcanvas">
          <i className="fa fa-lg fa-reorder"></i>
        </a>
        <h1>Guests</h1>
        <p>Below are today's logged in guests.</p>

      <a href="#addguest">Add Guest</a>
      </div>

      <div className="row">
        {guests.map((item) => (
          <>
            <div key={item.id} className="users col-3 col-sm-3 col-lg-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-person-bounding-box"
                viewBox="0 0 26 26"
              >
                <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              </svg>
              <h4>{item.name}</h4>
              <p>{item.phone}</p>
              <p>{item.host}</p>
              <p>{item.idno}</p>
              <p>{item.event}</p>
              <p
                className="delete"
                type="button"
                onClick={(e) => checkoutGuest(item.id, e)}
              >
                Checkout Guest
              </p>
              <hr />
            </div>
          </>
        ))}
      </div>
      <hr />

      <div className="row myform" id="addguest">
        <form onSubmit={submitForm}>
          <label>Checkin Guest</label>

          <div class="row">
            <div class="col-md-2">
              <label for="guestname" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                name="guestname"
                value={guestname}
                onChange={(e) => setGuestname(e.target.value)}
              />
            </div>
            <div class="col-md-2">
              <label for="phone" class="form-label">
                Phone
              </label>
              <input
                type="text"
                class="form-control"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div class="col-md-2">
              <label for="host" class="form-label">
                Host
              </label>
              <input
                type="text"
                class="form-control"
                name="host"
                value={host}
                onChange={(e) => setHost(e.target.value)}
              />
            </div>
            <div class="col-md-2">
              <label for="idno" class="form-label">
                Identification No.
              </label>
              <input
                type="text"
                class="form-control"
                name="idno"
                value={idno}
                onChange={(e) => setIdno(e.target.value)}
              />
            </div>
            <div class="col-md-2">
              <label for="event" class="form-label">
                Event
              </label>
              <input
                type="text"
                class="form-control"
                name="guestevent"
                value={guestevent}
                onChange={(e) => setEvent(e.target.value)}
              />
            </div>
          </div>

          <div class="row">
            <br />
            <div class="col-md-2">
              <button type="submit" class="btn btn-primary">
                Checkin Guest
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Guests;
