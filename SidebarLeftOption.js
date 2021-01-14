class SideBarLeftOption extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(Reactstrap.ListGroupItem, {
      className: "bg-secondary border-0"
    }, /*#__PURE__*/React.createElement(Reactstrap.Button, {
      href: "#",
      color: "secondary text-white-50",
      size: "lg",
      block: true
    }, this.props.option));
  }

} //<a href="#" className="btn btn-secondary btn-lg btn-block text-white-50" role="button" name="explore">{this.props.option}</a>


export default SideBarLeftOption;