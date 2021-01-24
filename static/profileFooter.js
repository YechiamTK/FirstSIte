class ProfileFooter extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("li", {
      className: "list-group-item bg-secondary mt-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mt-5"
    }), /*#__PURE__*/React.createElement(Reactstrap.Row, {
      className: "d-flex"
    }, /*#__PURE__*/React.createElement(Reactstrap.Col, {
      xs: "auto"
    }, /*#__PURE__*/React.createElement("img", {
      src: "logo.png",
      className: "rounded-circle img-fluid",
      style: {
        height: '40px'
      },
      alt: "Profile Picture"
    })), /*#__PURE__*/React.createElement(Reactstrap.Col, null, /*#__PURE__*/React.createElement("div", null, this.props.name), /*#__PURE__*/React.createElement("div", {
      className: "text-white"
    }, /*#__PURE__*/React.createElement("small", null, this.props.username)))));
  }

}

export default ProfileFooter;