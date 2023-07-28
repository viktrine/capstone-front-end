import {useState } from "react";
import Home from "./Home";
import Events from "./events/Events";
import Parkings from "./Parkings";
import Guests from "./Guests";
import Reports from "./Reports";
import Users from "./Users";
import Profile from "./Profile";

function Sidebar() {
  let [component, setComponent] = useState("default");
  

  const updateLink = (a, e) => {
    setComponent(a);
  };

  

  let activeComponent = null;

  if (component === "events") {
    activeComponent = <Events />;
  } else if (component === "parkings") { 
    activeComponent = <Parkings />;
  } else if (component === "guests") {
    activeComponent = <Guests />;
  } else if (component === "reports") { 
    activeComponent = <Reports />;
  } else if (component === "users") {
    activeComponent = <Users />;
  } else if (component === "profile") {
    activeComponent = <Profile />;
  } else if (component === "home") {
    activeComponent = <Home />;
  } else if(component === "default") {
    activeComponent = <Home />;
  }

  return (
    <>
      <div
        className="col-xs-4 col-sm-3 sidebar-offcanvas"
        id="sidebar"
        role="navigation"
      >
        <div className="sidebar-nav">
          <ul className="nav">
            <li className="active">
              <a href="#" onClick={(e) => updateLink("home", e)}>
                Home
              </a>
            </li>
            <li className="active">
              <a href="#" onClick={(e) => updateLink("events", e)}>
                Events
              </a>
            </li>
            <li>
              <a href="#" onClick={() => updateLink("parkings")}>
                Parkings
              </a>
            </li>
            <li>
              <a href="#" onClick={() => updateLink("guests")}>
                Guests
              </a>
            </li>
            <li className="nav-divider"></li>
            <li>
              <a href="#" onClick={() => updateLink("users")}>
                System Users
              </a>
            </li>
            {/* <li>
              <a href="#" onClick={() => updateLink("reports")}>
                Reports
              </a>
            </li> */}
            {/* <li>
              <a href="#" onClick={() => updateLink("profile")}>
                Profile
              </a>
            </li> */}
          </ul>
        </div>
      </div>

      {activeComponent}
    </>
  );
}

export default Sidebar;
