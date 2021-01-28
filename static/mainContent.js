function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { updateTweets } from './flaskSlice.js';
import TweetCard from './tweetCard.js';
import { newTweet } from './script.js';

class MainContent extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "fetchTweetsFromServer", () => {
      //const {updateTweets} = this.props;
      let xhttp = new XMLHttpRequest();
      let data = "Error";
      let newTweets = [];

      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          data = this.responseText;
          data = JSON.parse(data);
          data.forEach((o, i, a) => newTweet(a[i], newTweets, true));
        }
      };

      xhttp.open("GET", '/fetchTweets', false);
      xhttp.send();
      return newTweets; //updateTweets();
    });

    _defineProperty(this, "handleUpdate", () => {
      const {
        updateTweets
      } = this.props;
      const {
        update
      } = this.props;

      if (update) {
        //this.state = {tweets: []};
        //this.updateFromServer(this.state.tweets);
        this.setState({
          tweets: this.fetchTweetsFromServer()
        });
        updateTweets();
      }
    });

    this.state = {
      tweets: this.state ? this.state.tweets : this.props.tweets
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.fetchTweetsFromServer = this.fetchTweetsFromServer.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.update !== this.props.update) {
      this.handleUpdate();
    }
  }

  render() {
    //this.handleUpdate();
    var cols = this.props.leftTransform == "left" ? {
      size: 10
    } : {
      size: 8,
      offset: 2
    };
    var margin = this.props.leftTransform == "left" ? "ml-4" : "";
    return /*#__PURE__*/React.createElement(Reactstrap.Col, {
      xs: cols,
      className: margin,
      style: {
        transition: 'all 0.5s'
      }
    }, /*#__PURE__*/React.createElement(Reactstrap.Container, {
      fluid: true
    }, this.state.tweets != undefined ? this.state.tweets.map((tweet, i) => /*#__PURE__*/React.createElement(TweetCard, {
      key: tweet.getId(),
      id: tweet.getId(),
      tweetInfo: tweet,
      place: i
    })) : null));
  }

}

const mapDispatchtoProps = {
  updateTweets
};

const mapStateToProps = state => ({
  update: state.flask.update
});

export default ReactRedux.connect(mapStateToProps, mapDispatchtoProps)(MainContent);