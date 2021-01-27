function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import GenericModal from './genericModal.js';
import { toggleTweet } from './modalSlice.js';
import { updateTweets } from './flaskSlice.js'; //import {connect} from 'react-redux';

class NewTweet extends React.Component {
  constructor(props) {
    super(props); //this.setState = {showHide: this.props.show ? {display: 'block'} : {display: 'none'}};

    _defineProperty(this, "postTweet", () => {
      const {
        updateTweets
      } = this.props;
      updateTweets();
    });

    _defineProperty(this, "handleClick", () => {
      const {
        toggleTweet
      } = this.props;
      toggleTweet();
    });
  }

  render() {
    const {
      showTweet
    } = this.props;
    var modalHeader = /*#__PURE__*/React.createElement(Reactstrap.Button, {
      onClick: () => {
        this.handleClick();
      },
      className: "close text-white-50"
    }, "\xD7");
    var modalBody = /*#__PURE__*/React.createElement(Reactstrap.Form, {
      id: "postform",
      method: "post",
      action: "/postTweet"
    }, /*#__PURE__*/React.createElement(Reactstrap.Input, {
      type: "textarea",
      className: "form control bg-secondary text-white-50 overflow-auto",
      placeholder: "Start typing...",
      style: {
        resize: "none"
      },
      name: "newtweet",
      rows: 5
    }), ";");
    var modalFooter = /*#__PURE__*/React.createElement(Reactstrap.Button, {
      type: "submit",
      form: "postform",
      onClick: () => {
        setTimeout(() => {
          this.postTweet();
        }, 100), this.handleClick();
      },
      className: "close",
      color: "default"
    }, "Tweet");
    const atrs = {
      isOpen: showTweet,
      toggle: () => this.handleClick() //move toggle to GenericModal?

    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, showTweet ? /*#__PURE__*/React.createElement(GenericModal, {
      other: atrs,
      header: modalHeader,
      body: modalBody,
      footer: modalFooter
    }) : null);
  }

}

const mapDispatchtoProps = {
  toggleTweet,
  updateTweets
};

const mapStateToProps = state => ({
  showTweet: state.modal.showTweet
});

export default ReactRedux.connect(mapStateToProps, mapDispatchtoProps)(NewTweet);