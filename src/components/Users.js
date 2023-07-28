import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState();
  const [useremail, setUseremail] = useState();
  const [userphone, setUserphone] = useState();

  // prepare what to display
  useEffect(() => {
    let API_URL = "http://localhost:5000/users";
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
        setUsers(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const doEffects = () => {
    // prepare what to display
    let API_URL = "http://localhost:5000/users";
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
        setUsers(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const submitForm = (event) => {
    let API_URL = "http://localhost:5000/users";
    let configOptions = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
    };

    event.preventDefault();

    // prepare payload
    const requestPayload = {
      name: username,
      phone: userphone,
      email: useremail,
    };

    // alert(requestPayload.phone)

    // call our backend
    axios
      .post(API_URL, requestPayload, configOptions)
      .then((response) => {
        doEffects();
        setUsername("");
        setUseremail("");
        setUserphone("");
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
        <h1>System Users</h1>
        <p>For accountability, let's lknow who users our system</p>

        <a href="#adduser">Add User</a>
      </div>

      <div className="row">
        {users.map((item) => (
          <>
            <div key={item.id} className="users col-3 col-sm-3 col-lg-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-lock"
                viewBox="0 0 16 16"
              >
                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 5.996V14H3s-1 0-1-1 1-4 6-4c.564 0 1.077.038 1.544.107a4.524 4.524 0 0 0-.803.918A10.46 10.46 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h5ZM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z" />
              </svg>
              <h4>{item.name}</h4>
              <p>{item.phone}</p>
              <p>{item.email}</p>
              <hr />
            </div>
          </>
        ))}
      </div>
      <hr />

      <div className="row myform" id="adduser">
        <form onSubmit={submitForm}>
          <label>Add system user</label>

          <div class="row">
            <div class="col-md-2">
              <label for="guestname" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div class="col-md-2">
              <label for="phone" class="form-label">
                Phone
              </label>
              <input
                type="text"
                class="form-control"
                name="userphone"
                value={userphone}
                onChange={(e) => setUserphone(e.target.value)}
              />
            </div>
            <div class="col-md-2">
              <label for="host" class="form-label">
                E-Mail
              </label>
              <input
                type="text"
                class="form-control"
                name="useremail"
                value={useremail}
                onChange={(e) => setUseremail(e.target.value)}
              />
            </div>
          </div>

          <div class="row">
            <br />
            <div class="col-md-2">
              <button type="submit" class="btn btn-primary">
                Add system user
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Users;
