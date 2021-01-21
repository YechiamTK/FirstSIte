function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import GenericModal from './genericModal.js';
import GenericCard from './genericCard.js';
import { toggleComment } from './modalSlice.js';

class NewComment extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleComment", () => {
      const {
        toggleComment
      } = this.props;
      toggleComment();
    });
  }

  postComment() {
    /*
    - post it to server (handled as both Tweet and comment to Tweet)
    [function on server-side catches it and posts it?]
    */
  }

  render() {
    const {
      showComment
    } = this.props;
    const headerStyle = {
      border: 'none'
    };
    const bodyStyle = {
      border: 'none'
    };
    const footerStyle = {
      opacity: 0.8,
      border: 'none'
    };
    const headerArgs = {
      className: "mt-n3 bg-dark font-weight-bold",
      style: {
        headerStyle
      }
    };
    const bodyArgs = {
      className: "mt-n4 bg-dark",
      style: {
        bodyStyle
      }
    };
    const footerArgs = {
      className: "mt-n4 bg-dark text-info",
      style: {
        footerStyle
      }
    };
    const modalBody = /*#__PURE__*/React.createElement(Reactstrap.Container, {
      fluid: true
    }, /*#__PURE__*/React.createElement(Reactstrap.Row, null, /*#__PURE__*/React.createElement(Reactstrap.Card, {
      className: "my-auto w-100",
      style: {
        border: 'none'
      }
    }, /*#__PURE__*/React.createElement(Reactstrap.Row, {
      className: "no-gutters bg-dark text-white-50"
    }, /*#__PURE__*/React.createElement(Reactstrap.Col, {
      xs: "auto"
    }, /*#__PURE__*/React.createElement("img", {
      src: "./profile.jpg",
      style: {
        height: "50px"
      },
      className: "img-fluid",
      alt: ""
    })), /*#__PURE__*/React.createElement(GenericCard, {
      headerArgs: headerArgs,
      bodyArgs: bodyArgs,
      footerArgs: footerArgs
    })))), /*#__PURE__*/React.createElement(Reactstrap.Row, {
      className: "no-gutters bg-dark text-white-50"
    }, /*#__PURE__*/React.createElement(Reactstrap.Col, {
      xs: "auto"
    }, /*#__PURE__*/React.createElement("img", {
      src: "./profile.jpg",
      style: {
        height: "50px"
      },
      className: "img-fluid",
      alt: ""
    })), /*#__PURE__*/React.createElement(Reactstrap.Col, null, /*#__PURE__*/React.createElement(Reactstrap.Input, {
      type: "textarea",
      id: "tweet-text",
      className: "form-control bg-dark text-white-50 border-dark overflow-auto",
      style: {
        resize: 'none',
        border: 'none'
      },
      rows: 4
    }))));
    const modalHeader = /*#__PURE__*/React.createElement(Reactstrap.Button, {
      onClick: () => {
        this.handleComment();
      },
      className: "close text-white-50"
    }, "\xD7");
    const modalFooter = /*#__PURE__*/React.createElement(Reactstrap.Button, {
      onClick: () => {
        this.handleComment();
        postComment();
      },
      className: "close btn btn-default"
    }, "Tweet");
    const atrs = {
      isOpen: showComment,
      toggle: () => this.handleComment() //move toggle to GenericModal?

    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, showComment ? /*#__PURE__*/React.createElement(GenericModal, {
      other: atrs,
      header: modalHeader,
      body: modalBody,
      footer: modalFooter
    }) : null);
  }

}

const mapDispatchToProps = {
  toggleComment
};

const mapStateToProps = state => ({
  showComment: state.modal.showComment
});

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(NewComment);