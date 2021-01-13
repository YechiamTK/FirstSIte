function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class GenericCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement(Reactstrap.Col, {
      className: "px-2"
    }, /*#__PURE__*/React.createElement(Reactstrap.CardHeader, this.props.headerArgs, this.props.cardheader), /*#__PURE__*/React.createElement(Reactstrap.CardBody, _extends({}, this.props.bodyArgs, {
      style: {
        whiteSpace: "pre-wrap"
      }
    }), this.props.cardbody), /*#__PURE__*/React.createElement(Reactstrap.CardFooter, this.footerArgs, this.props.cardfooter));
  }

}

export default GenericCard;