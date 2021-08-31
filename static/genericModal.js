function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class GenericModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement(Reactstrap.Modal, _extends({
      contentClassName: "bg-dark"
    }, this.props.other, {
      size: "lg",
      className: "pt-5 d-flex flex-grow-1",
      style: {
        borderRadius: '20px'
      }
    }), /*#__PURE__*/React.createElement(Reactstrap.ModalHeader, {
      style: this.props.headerStyle
    }, this.props.header), /*#__PURE__*/React.createElement(Reactstrap.ModalBody, {
      style: this.props.bodyStyle
    }, this.props.body), /*#__PURE__*/React.createElement(Reactstrap.ModalFooter, {
      style: this.props.footerStyle
    }, this.props.footer));
  }

}

export default GenericModal;