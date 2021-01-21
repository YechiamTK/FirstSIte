function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class GenericModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement(Reactstrap.Modal, _extends({
      contentClassName: "bg-dark"
    }, this.props.other, {
      /* isOpen={modal} toggle={toggle} */
      size: "lg",
      className: "pt-5 d-flex flex-grow-1",
      style: {
        borderRadius: '20px'
      }
      /* id={props.id} */

    }), /*#__PURE__*/React.createElement(Reactstrap.ModalHeader, this.props.headerArgs, this.props.header), /*#__PURE__*/React.createElement(Reactstrap.ModalBody, this.props.bodyArgs, this.props.body), /*#__PURE__*/React.createElement(Reactstrap.ModalFooter, this.props.footerArgs, this.props.footer));
  }

}
/*
<div id="post-comment" class="modal fade">
    <div class="modal-dialog modal-lg col-5 d-flex">
        <div class="modal-content bg-dark flex-grow-1" style="border-radius: 20px;">
            <div className="modal-header">
                {props.header}
            </div>
            <div className="modal-body">
                {props.body}
            </div>
            <div className="modal-footer">
                {props.footer}
            </div>        
        </div>
    </div>
</div>
*/


export default GenericModal;