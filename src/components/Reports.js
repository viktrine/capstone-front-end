function Reports(){
    return(
      <div className="col-xs-12 col-sm-9">
        <br />
        <div className="jumbotron">
          <a href="#" className="visible-xs" data-toggle="offcanvas">
            <i className="fa fa-lg fa-reorder"></i>
          </a>
          <h1>Reports</h1>
          <p>
            Welcome to Safaricom guest portal.Keep count of events and visitors
            who are streaming in.
          </p>
        </div>
        <div className="row">
          <div className="col-6 col-sm-6 col-lg-3">
            <h4>Current Events</h4>
            <p>One</p>
            <p>
              <a className="btn btn-default" href="#">
                View details »
              </a>
            </p>
          </div>
          <div className="col-6 col-sm-6 col-lg-3">
            <h4>Available Parkings</h4>
            <p>Ten. </p>
            <p>
              <a className="btn btn-default" href="#">
                View details »
              </a>
            </p>
          </div>
          <div className="col-6 col-sm-6 col-lg-3">
            <h4>Guests Recieved</h4>
            <p>Forty</p>
            <p>
              <a className="btn btn-default" href="#">
                View details »
              </a>
            </p>
          </div>
          <div className="col-6 col-sm-6 col-lg-3">
            <h4>Feedback</h4>
            <p>Our guests feedback</p>
            <p>
              <a className="btn btn-default" href="#">
                View details »
              </a>
            </p>
          </div>
        </div>
      </div>
    );
}
export default Reports;