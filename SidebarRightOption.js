class SideBarRightOption extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(Reactstrap.Button, {
      color: "secondary text-white-50 mx-auto"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("small", null, this.props.trend)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, this.props.trendTag)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("small", null, this.props.popularity)));
  }

}
/*
<button type="button" href="#" className="list-group-item list-group-item-action bg-secondary text-white-50 mx-auto">
    <div><small>{this.props.trend}</small></div>
    <div><h4>{this.props.trendTag}</h4></div>
    <div><small>{this.props.popularity}</small></div>
</button>
*/


export default SideBarRightOption;