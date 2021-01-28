function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import GenericModal from './genericModal.js';
import GenericCard from './genericCard.js';
import { togglePopup } from './modalSlice.js';
import CommentSection from './commentSection.js';

class PopupTweet extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handlePopup", () => {
      const {
        togglePopup
      } = this.props;
      this.setState({
        showSection: false
      });
      togglePopup();
    });

    _defineProperty(this, "fetchCommentsFromServer", tweetId => {
      let xhttp = new XMLHttpRequest();
      let data = "Error";

      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          data = this.responseText;
          data = JSON.parse(data);
        }
      };

      xhttp.open("GET", '/fetchComments/' + tweetId, false);
      xhttp.send();
      return data;
    });

    _defineProperty(this, "toggleCommentSection", tweetId => {
      this.setState({
        comments: this.fetchCommentsFromServer(tweetId),
        showSection: !this.state.showSection
      });
    });

    this.state = {
      showSection: false,
      comments: {}
    };
  }

  render() {
    const {
      showPopup
    } = this.props;
    const {
      tweet
    } = this.props;
    let usrname = "",
        message = "",
        tweetId = "";

    if (Object.keys(tweet).length !== 0 && tweet.payload !== undefined) {
      const parsedTweet = JSON.parse(tweet.payload);
      message = parsedTweet._message;
      usrname = parsedTweet._username;
      tweetId = parsedTweet._id;
    }

    const header = /*#__PURE__*/React.createElement(Reactstrap.Button, {
      onClick: () => {
        this.handlePopup();
      },
      className: "close text-white-50"
    }, "\xD7");
    const cardfooter = /*#__PURE__*/React.createElement(Reactstrap.ButtonToolbar, null, /*#__PURE__*/React.createElement(Reactstrap.ButtonGroup, {
      size: "sm",
      className: "px-5"
    }, /*#__PURE__*/React.createElement(Reactstrap.Button, {
      className: "mx-auto text-white-50 rounded-circle"
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-comment-alt"
    })), /*#__PURE__*/React.createElement(Reactstrap.Button, {
      className: "mx-auto text-white-50 rounded-circle",
      onClick: () => {
        this.toggleCommentSection(tweetId);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-comments"
    })), /*#__PURE__*/React.createElement(Reactstrap.Button, {
      className: "mx-auto text-white-50 rounded-circle"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-retweet"
    })), /*#__PURE__*/React.createElement(Reactstrap.Button, {
      className: "mx-auto text-white-50 rounded-circle"
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-heart"
    })), /*#__PURE__*/React.createElement(Reactstrap.Button, {
      className: "mx-auto text-white-50 rounded-circle"
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-share-square"
    }))));
    const body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Reactstrap.Row, {
      className: "no-gutters bg-dark text-white-50"
    }, /*#__PURE__*/React.createElement(Reactstrap.Col, {
      xs: "auto"
    }, /*#__PURE__*/React.createElement("img", {
      src: "./profile.jpg",
      style: {
        height: "50px"
      },
      className: "img-fluid"
    })), /*#__PURE__*/React.createElement(GenericCard, {
      cardheader: usrname,
      cardbody: message,
      cardfooter: cardfooter
    })));
    const footer = this.state.showSection && this.state.comments.length !== 0 ? /*#__PURE__*/React.createElement(CommentSection, {
      comments: this.state.comments
    }) : null;
    const id = "popup";
    const atrs = {
      isOpen: showPopup,
      toggle: () => this.handlePopup() //move toggle to GenericModal?

    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, " ", showPopup ? /*#__PURE__*/React.createElement(GenericModal, {
      other: atrs,
      header: header,
      body: body,
      footer: footer,
      id: id
    }) : null, " ");
  }

}

const mapDispatchToProps = {
  togglePopup
};

const mapStateToProps = state => ({
  showPopup: state.modal.showPopup,
  tweet: state.modal.tweet
});

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(PopupTweet);