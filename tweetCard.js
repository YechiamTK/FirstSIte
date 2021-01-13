function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import GenericCard from './genericCard.js'; //import NewComment from './newComment.js'
//import PopupTweet from './popupTweet.js';

class TweetCard extends React.Component {
  constructor(props) {
    super(props);
    var tweetInfo = this.props.tweetInfo;
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
      togglePopup,
      toggleComment
    } = this.props;
    const header = /*#__PURE__*/React.createElement("a", {
      href: "#",
      className: "link text-decoration-none"
    }, this.props.tweetInfo.getUsername()); //could be useless, will return to it later

    const bodyArgs = {
      /* onClick={setInfo},  */
      type: "button",
      dataToggle: "modal",
      dataTarget: "#tweet-id"
    };
    const body = this.props.tweetInfo.getMessage();
    const footer = /*#__PURE__*/React.createElement(Reactstrap.ButtonToolbar, null, /*#__PURE__*/React.createElement(Reactstrap.ButtonGroup, {
      size: "sm",
      className: "px-5"
    }, /*#__PURE__*/React.createElement(Reactstrap.Button, {
      className: "mx-auto text-white-50 rounded-circle",
      onClick: toggleComment
      /*data-toggle="modal" data-target="#post-comment"*/

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
      className: "mx-3 my-5",
      id: this.props.tweetInfo.getId(),
      onClick: togglePopup
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
    })), /*#__PURE__*/React.createElement(GenericCard, _extends({
      cardheader: header,
      cardbody: body,
      cardfooter: footer
    }, bodyArgs))));
  }

}

const mapDispatchToProps = dispatch => ({
  togglePopup: () => dispatch(togglePopup),
  toggleComment: () => dispatch(toggleComment)
});

export default ReactRedux.connect(null, mapDispatchToProps)(TweetCard);
/*
<div className="card mx-3 my-5" id={this.props.tweetInfo.getId()}>
    <div className="row no-gutters bg-dark text-white-50">
        <div className="col-auto" style={{flexGrow: '0 !important'}}>
            <img src={"./profile.jpg"} style={{height:'50px'}} className="img-fluid" alt="" />
        </div>
        <div className="col">
            <div className="px-2">
                <div className="card-header"><a href="#" className="link text-decoration-none">{this.props.tweetInfo.getUsername()}</a></div>
                <div className="card-body" onClick={this.setInfo} type="button" data-toggle="modal" data-target="#tweet-id">{this.props.tweetInfo.getMessage()}</div>
                <div className="card-footer">
                    <span className="btn-toolbar btn-group-sm px-5">
                        <button type="button" className="btn mx-auto text-white-50 rounded-circle" data-toggle="modal" data-target="#post-comment"><i className="far fa-comment-alt"></i></button>
                        <button type="button" className="btn mx-auto text-white-50 rounded-circle" data-toggle="modal" data-target="#tweet-id"><span data-toggle="collapse" data-target="#comments"><i className="far fa-comments"></i></span></button>
                        <button type="button" className="btn mx-auto text-white-50 rounded-circle"><i className="fas fa-retweet"></i></button>
                        <button type="button" className="btn mx-auto text-white-50 rounded-circle"><i className="far fa-heart"></i></button>
                        <button type="button" className="btn mx-auto text-white-50 rounded-circle"><i className="far fa-share-square"></i></button>
                    </span>
                </div>
            </div>
        </div>
    </div>           
</div>
*/