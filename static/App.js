import TopNavbar from './topNavbar.js';
import MainRow from './mainRow.js';
import SidebarLeft from './sidebarLeft.js';
import MainContent from './mainContent.js';
import SidebarRight from './sidebarRight.js';
import NewTweet from './newTweet.js';
import NewComment from './newComment.js';
import PopupTweet from './popupTweet.js';
import LoginScreen from './loginScreen.js';
import { signInAttempt } from './flaskSlice.js';

class App extends React.Component {
  render() {
    const {
      tweets,
      signIn,
      id
    } = this.props;
    return /*#__PURE__*/React.createElement(React.Fragment, null, signIn ? /*#__PURE__*/React.createElement(Reactstrap.Container, {
      id: id,
      fluid: true,
      className: "vh-100"
    }, /*#__PURE__*/React.createElement(TopNavbar, null), /*#__PURE__*/React.createElement(MainRow, {
      tweets: tweets
    }, /*#__PURE__*/React.createElement(SidebarLeft, null), /*#__PURE__*/React.createElement(MainContent, null), /*#__PURE__*/React.createElement(SidebarRight, null)), /*#__PURE__*/React.createElement(NewTweet, {
      id: id
    }), /*#__PURE__*/React.createElement(NewComment, null), /*#__PURE__*/React.createElement(PopupTweet, null)) : /*#__PURE__*/React.createElement(Reactstrap.Container, {
      fluid: true,
      className: "d-flex vh-100"
    }, /*#__PURE__*/React.createElement(LoginScreen, null)));
  }

}

const mapDispatchtoProps = {
  signInAttempt
};

const mapStateToProps = state => ({
  signIn: state.flask.signIn,
  id: state.flask.id
});

export default ReactRedux.connect(mapStateToProps, mapDispatchtoProps)(App);