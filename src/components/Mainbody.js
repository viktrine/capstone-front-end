function Mainbody(){
    return(<div className="row row-offcanvas row-offcanvas-left">
    <Sidebar />

    <div className="col-xs-12 col-sm-9">
      <br />
      <div className="jumbotron">
        <a href="#" className="visible-xs" data-toggle="offcanvas">
          <i className="fa fa-lg fa-reorder"></i>
        </a>
        <h1>Hello, world!</h1>
        <p>
          This is an example to show the potential of an offcanvas layout
          pattern in Bootstrap. Try some responsive-range viewport sizes
          to see it in action.
        </p>
      </div>
      <div className="row">
        <div className="col-6 col-sm-6 col-lg-4">
          <h2>Heading</h2>
          <p>
            Bootstrap is a front-end framework that uses CSS and
            JavaScript to facilitate responsive Web design. Bootply is a
            playground for Bootstrap that enables developers and designers
            to test, prototype and create mockups using Bootstrap friendly
            HTML, CSS and Javascript.
          </p>
          <p>
            <a className="btn btn-default" href="#">
              View details »
            </a>
          </p>
        </div>
        <div className="col-6 col-sm-6 col-lg-4">
          <h2>Heading</h2>
          <p>
            Bootply is a playground for Bootstrap that enables developers
            and designers to test, prototype and create mockups using
            Bootstrap friendly HTML, CSS and Javascript. Bootstrap is a
            front-end framework that uses CSS and JavaScript to facilitate
            responsive Web design.{" "}
          </p>
          <p>
            <a className="btn btn-default" href="#">
              View details »
            </a>
          </p>
        </div>
        <div className="col-6 col-sm-6 col-lg-4">
          <h2>Heading</h2>
          <p>
            Bootstrap is a front-end framework that uses CSS and
            JavaScript to facilitate responsive Web design. Bootply is a
            playground for Bootstrap that enables developers and designers
            to test, prototype and create mockups using Bootstrap friendly
            HTML, CSS and Javascript.
          </p>
          <p>
            <a className="btn btn-default" href="#">
              View details »
            </a>
          </p>
        </div>
        <div className="col-6 col-sm-6 col-lg-4">
          <h2>Heading</h2>
          <p>
            Bootstrap is a front-end framework that uses CSS and
            JavaScript to facilitate responsive Web design. Bootply is a
            playground for Bootstrap that enables developers and designers
            to test, prototype and create mockups using Bootstrap friendly
            HTML, CSS and Javascript.
          </p>
          <p>
            <a className="btn btn-default" href="#">
              View details »
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>);
}
export default Mainbody;