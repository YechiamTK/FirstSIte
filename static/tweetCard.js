function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import GenericCard from './genericCard.js';
import { toggleComment, togglePopup } from './modalSlice.js';

class TweetCard extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handlePopup", () => {
      const {
        togglePopup,
        tweetInfo
      } = this.props;
      togglePopup(JSON.stringify(tweetInfo));
    });

    _defineProperty(this, "handleComment", () => {
      const {
        toggleComment
      } = this.props;
      toggleComment();
    });

    var _tweetInfo = this.props.tweetInfo;
  }
  /*
  Pass the tweet info from the card to the pop-up modal.
  *
  setInfo = () =>{
      //get tweet's info from the card
      let usrname = $(this).siblings(".card-header").text();
      let twt = this.innerText;
      let id = '<span class="tweet-id" style="display:none;">'+$(this).siblings("span").text()+'</span>';
      //empty the header, otherwise close button won't work.
      $("#tweet-id").find(".card-header").empty();
      //create close button
      let closeBtn = $("<button>&times;</button>");
      closeBtn.attr({
          'type': 'button',
          'class': 'close text-white-50',
          'data-dismiss': 'modal'});
      //add the tweet's info and the close button to the modal's html.
      $("#tweet-id").find(".card-header").text(usrname);
      $("#tweet-id").find(".card-header").append(closeBtn);
      $("#tweet-id").find(".card-header").append(id);
      $("#tweet-id").find(".card-body").text(twt);
  }*/


  render() {
    const {
      tweetInfo
    } = this.props;
    const id = tweetInfo.getId();
    const header = /*#__PURE__*/React.createElement("a", {
      className: "link text-decoration-none",
      onClick: () => {
        this.handlePopup();
      }
    }, this.props.tweetInfo.getUsername()); //could be useless, will return to it later

    const bodyArgs = {
      onClick: this.handlePopup
    };
    const body = tweetInfo.getMessage();
    const footer = /*#__PURE__*/React.createElement(Reactstrap.ButtonToolbar, null, /*#__PURE__*/React.createElement(Reactstrap.ButtonGroup, {
      size: "sm",
      className: "px-5"
    }, /*#__PURE__*/React.createElement(Reactstrap.Button, {
      className: "mx-auto text-white-50 rounded-circle",
      onClick: () => {
        this.handleComment();
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-comment-alt"
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
    const headerArgs = {};
    const footerArgs = {};
    return /*#__PURE__*/React.createElement(Reactstrap.Card, {
      id: id,
      className: "mx-3 my-5"
    }, /*#__PURE__*/React.createElement(Reactstrap.Row, {
      className: "no-gutters bg-dark text-white-50"
    }, /*#__PURE__*/React.createElement(Reactstrap.Col, {
      xs: "auto",
      style: {
        flexGrow: '0 !important'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "./profile.jpg",
      style: {
        height: '50px'
      },
      className: "img-fluid",
      alt: ""
    })), /*#__PURE__*/React.createElement(GenericCard, {
      headerArgs: headerArgs,
      bodyArgs: bodyArgs,
      footerArgs: footerArgs,
      cardheader: header,
      cardbody: body,
      cardfooter: footer
    })));
  }

}

const mapDispatchToProps = {
  togglePopup,
  toggleComment
};
export default ReactRedux.connect(null, mapDispatchToProps)(TweetCard);