import TopNavbar from './topNavbar.js';
import MainRow from './mainRow.js';
import SidebarLeft from './sidebarLeft.js';
import MainContent from './mainContent.js';
import SidebarRight from './sidebarRight.js';
import NewTweet from './newTweet.js';
import NewComment from './newComment.js';
import PopupTweet from './popupTweet.js';

class App extends React.Component {
  render() {
    const {
      tweets
    } = this.props;
    return /*#__PURE__*/React.createElement(Reactstrap.Container, {
      fluid: true
    }, /*#__PURE__*/React.createElement(TopNavbar, null), /*#__PURE__*/React.createElement(MainRow, {
      tweets: tweets
    }, /*#__PURE__*/React.createElement(SidebarLeft, null), /*#__PURE__*/React.createElement(MainContent, null), /*#__PURE__*/React.createElement(SidebarRight, null)), /*#__PURE__*/React.createElement(NewTweet, null), /*#__PURE__*/React.createElement(NewComment, null), /*#__PURE__*/React.createElement(PopupTweet, null));
  }

}

export default App;