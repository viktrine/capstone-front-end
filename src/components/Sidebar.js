function Sidebar(){
    return(
        <div
            className="col-xs-4 col-sm-3 sidebar-offcanvas"
            id="sidebar"
            role="navigation"
          >
            <div className="sidebar-nav">
              <ul className="nav">
                <li className="active">
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Parkings</a>
                </li>
                <li>
                  <a href="#">Guests</a>
                </li>
                <li className="nav-divider"></li>
                <li>
                  <a href="#">Reports</a>
                </li>
                <li>
                  <a href="#">Users</a>
                </li>
                <li>
                  <a href="#">Profile</a>
                </li>
              </ul>
            </div>
          </div>
    );
}

export default Sidebar