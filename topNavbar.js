class TopNavbar extends React.Component {
  //it's possible to decomposite the top navbar as well, and have specific functionality
  //depending on the props (notifs=dropdown notifs etc).
  render() {
    return /*#__PURE__*/React.createElement(Reactstrap.Row, {
      className: "sticky-top",
      name: "top-row"
    }, /*#__PURE__*/React.createElement(Reactstrap.Col, {
      xs: "12",
      className: "bg-dark"
    }, /*#__PURE__*/React.createElement(Reactstrap.Navbar, {
      color: "dark",
      expand: "sm",
      className: "pt-3 shadow d-flex"
    }, /*#__PURE__*/React.createElement("img", {
      src: "logo.png",
      style: {
        height: '50px'
      },
      className: "rounded-circle",
      alt: "Profile Picture"
    }), /*#__PURE__*/React.createElement("span", {
      className: "mx-5"
    }), /*#__PURE__*/React.createElement(Reactstrap.Nav, {
      className: "mx-auto"
    }, /*#__PURE__*/React.createElement(Reactstrap.NavItem, {
      className: "mx-5"
    }, /*#__PURE__*/React.createElement(Reactstrap.NavLink, {
      href: "#",
      name: "home"
    }, "Home")), /*#__PURE__*/React.createElement(Reactstrap.UncontrolledDropdown, {
      nav: true,
      inNavbar: true,
      className: "mx-5"
    }, /*#__PURE__*/React.createElement(Reactstrap.DropdownToggle, {
      nav: true
    }, "Notifications"), /*#__PURE__*/React.createElement(Reactstrap.DropdownMenu, null, /*#__PURE__*/React.createElement(Reactstrap.DropdownItem, null, "notification number one long"), /*#__PURE__*/React.createElement(Reactstrap.DropdownItem, null, "notification num 2"), /*#__PURE__*/React.createElement(Reactstrap.DropdownItem, null, "notification number three long"))), /*#__PURE__*/React.createElement(Reactstrap.UncontrolledDropdown, {
      nav: true,
      inNavbar: true,
      className: "mx-5"
    }, /*#__PURE__*/React.createElement(Reactstrap.DropdownToggle, {
      nav: true
    }, "Messages"), /*#__PURE__*/React.createElement(Reactstrap.DropdownMenu, null, /*#__PURE__*/React.createElement(Reactstrap.DropdownItem, null, "message number one long"), /*#__PURE__*/React.createElement(Reactstrap.DropdownItem, null, "message num 2"), /*#__PURE__*/React.createElement(Reactstrap.DropdownItem, null, "message number three long")))), /*#__PURE__*/React.createElement(Reactstrap.Form, {
      inline: true,
      className: "ml-auto"
    }, /*#__PURE__*/React.createElement(Reactstrap.Input, {
      type: "search",
      className: "bg-dark form-control btn-outline-dark text-white-50",
      placeholder: "Search..."
    }), /*#__PURE__*/React.createElement(Reactstrap.InputGroup, null, /*#__PURE__*/React.createElement(Reactstrap.Button, {
      color: "dark"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search"
    })))))));
  }
  /*
  <div className="row sticky-top" name="top-row">
          <div className="col-12 bg-dark">
              <nav className="navbar navbar-dark navbar-expand-sm pt-3 shadow d-flex">
                  <img src={"logo.png"} style={{height:'50px'}} className="rounded-circle" alt="Profile Picture" />
                  <span className="mx-5"></span>
                  <ul className="navbar-nav mx-auto">
                      <li className="nav-item mx-5"><a href="#" className="nav-link" name="home">Home</a></li>
                      <li className="nav-item mx-5 dropdown">
                          <a href="#" className="nav-link" data-toggle="dropdown" name="notifications">Notifications</a>
                          <div className="dropdown-menu mx-auto">
                              <a href="#" className="dropdown-item">notification number one long</a>
                              <a href="#" className="dropdown-item">notification num 2</a>
                              <a href="#" className="dropdown-item">notification number three long</a>
                          </div>
                      </li>
                      <li className="nav-item mx-5 dropdown">
                          <a href="#" className="nav-link" data-toggle="dropdown" name="messages">Messages</a>
                          <div className="dropdown-menu mx-auto">
                              <a href="#" className="dropdown-item">message number one long<br /><br /></a>
                              <a href="#" className="dropdown-item">message num 2</a>
                              <a href="#" className="dropdown-item">message number three long</a>
                          </div>
                      </li>
                  </ul>
                  <form className="form-inline ml-auto">
                      <input className="form-control search bg-dark btn-outline-dark text-white-50"
                                  type="text" placeholder="Search..."></input>
                      <div className="input-group-btn">
                          <button className="btn btn-dark" type="submit">
                              <i className="fas fa-search"></i>
                          </button>
                      </div>
                  </form>
              </nav>
          </div>
      </div>
  */


}

export default TopNavbar;