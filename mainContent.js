var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import TweetCard from './tweetCard.js';
import { togglePopup, toggleComment } from './modalSlice.js';

var MainContent = function (_React$Component) {
    _inherits(MainContent, _React$Component);

    function MainContent(props) {
        _classCallCheck(this, MainContent);

        var _this = _possibleConstructorReturn(this, (MainContent.__proto__ || Object.getPrototypeOf(MainContent)).call(this, props));

        var tweets = _this.props.tweets;

        //this.setState = {popup: false, comment: false};
        return _this;
    }

    //showPopup = () => this.setState({popup: true});
    //hidePopup = () => this.setState({popup: false});

    //showComment = () => this.setState({comment: true});
    //hideComment = () => this.setState({comment: false});

    _createClass(MainContent, [{
        key: 'render',
        value: function render() {
            var cols = this.props.leftTransform == "left" ? { size: 10 } : { size: 8, offset: 2 };
            var margin = this.props.leftTransform == "left" ? "ml-4" : "";

            return React.createElement(
                Col,
                { xs: cols, className: margin },
                React.createElement(
                    Container,
                    { fuild: true },
                    this.props.tweets.map(function (tweet, i) {
                        return React.createElement(
                            'div',
                            null,
                            React.createElement(TweetCard, { tweetInfo: tweet, place: i })
                        );
                    })
                )
            );
        }
    }]);

    return MainContent;
}(React.Component);

export default MainContent;