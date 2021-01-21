class SideBarRightOption extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(Reactstrap.Button, {
      color: "secondary text-white-50 mx-auto"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("small", null, this.props.trend)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, this.props.trendTag)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("small", null, this.props.popularity)));
  }

}

export default SideBarRightOption;