function Navbar(){
    return(
        <div className="navbar navbar-fixed-top navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              Guest Portal
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              {/* <li className="active">
                <a href="#">Home</a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Navbar;