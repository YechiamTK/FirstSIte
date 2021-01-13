import GenericModal from './genericModal.js';
import GenericCard from './genericCard.js';
import { togglePopup } from './modalSlice.js';
import CommentSection from './commentSection.js';

class PopupTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSection: false
    };
  }

  render(props) {
    const {
      togglePopup,
      showPopup
    } = this.props; //add close button?

    const header = /*#__PURE__*/React.createElement("span", null); //NEED TO INSERT CARD INFO, HOW?

    const cardfooter = /*#__PURE__*/React.createElement(Reactstrap.ButtonToolbar, null, /*#__PURE__*/React.createElement(Reactstrap.ButtonGroup, {
      size: "sm",
      className: "px-5"
    }, /*#__PURE__*/React.createElement(Reactstrap.Button, {
      className: "mx-auto text-white-50 rounded-circle"
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-comment-alt"
    })), /*#__PURE__*/React.createElement(Reactstrap.Button, {
      className: "mx-auto text-white-50 rounded-circle"
      /*onClick="{toggleCommentSection}*/

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
    var body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Reactstrap.Row, {
      className: "no-gutters bg-dark text-white-50"
    }, /*#__PURE__*/React.createElement(Reactstrap.Col, {
      xs: "auto"
    }, /*#__PURE__*/React.createElement("img", {
      src: "profile.jpg",
      style: "height:50px;",
      class: "img-fluid",
      alt: ""
    })), /*#__PURE__*/React.createElement(GenericCard, {
      cardfooter: this.cardfooter
    })), /*#__PURE__*/React.createElement(CommentSection, {
      style: {
        display: this.state.showSection ? 'block' : 'none'
      },
      onClick: () => this.state.showSection = !this.state.showSection
    }));
    const footer = /*#__PURE__*/React.createElement("span", null);
    const id = "popup";
    return /*#__PURE__*/React.createElement(React.Fragment, null, " ", showPopup ? /*#__PURE__*/React.createElement(GenericModal, {
      body: this.body,
      id: this.id
    }) : null, " ");
  }

}

const mapDispatchToProps = dispatch => ({
  togglePopup: () => dispatch(togglePopup)
});

const mapStateToProps = state => ({
  showPopup: state.modal.showPopup
});

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(PopupTweet);