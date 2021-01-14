import TweetCard from './tweetCard.js'; //import {togglePopup, toggleComment} from './modalSlice.js';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    var tweets = this.props.tweets; //this.setState = {popup: false, comment: false};
  } //showPopup = () => this.setState({popup: true});
  //hidePopup = () => this.setState({popup: false});
  //showComment = () => this.setState({comment: true});
  //hideComment = () => this.setState({comment: false});


  render() {
    var cols = this.props.leftTransform == "left" ? {
      size: 10
    } : {
      size: 8,
      offset: 2
    };
    var margin = this.props.leftTransform == "left" ? "ml-4" : "";
    return /*#__PURE__*/React.createElement(Reactstrap.Col, {
      xs: cols,
      className: margin
    }, /*#__PURE__*/React.createElement(Reactstrap.Container, {
      fluid: true
    }, this.props.tweets != undefined ? this.props.tweets.map((tweet, i) => /*#__PURE__*/React.createElement(TweetCard, {
      key: tweet.getId(),
      id: tweet.getId(),
      tweetInfo: tweet,
      place: i
    })) : null));
  }

}

export default MainContent;