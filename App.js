var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import TopNavbar from './topNavbar.js';
import MainRow from './mainRow.js';
import SidebarLeft from './sidebarLeft.js';
import MainContent from './mainContent.js';
import SidebarRight from './sidebarRight.js';
import NewTweet from './newTweet.js';
import NewComment from './newComment.js';
import PopupTweet from './popupTweet.js';

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var showTweet = this.props.showTweet.showTweet;
            var showPopup = this.props.showPopup.showPopup;
            var showComment = this.props.showComment.showComment;


            return React.createElement(
                Container,
                { fuild: true },
                React.createElement(TopNavbar, null),
                React.createElement(
                    MainRow,
                    null,
                    React.createElement(
                        SidebarLeft,
                        null,
                        showTweet && React.createElement(NewTweet, null)
                    ),
                    React.createElement(
                        MainContent,
                        null,
                        showPopup && React.createElement(PopupTweet, null),
                        showComment && React.createElement(NewComment, null)
                    ),
                    React.createElement(SidebarRight, null)
                )
            );
        }

        //put in getElementById('root');

    }]);

    return App;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        showTweet: state.modal.showTweet,
        showPopup: state.modal.showPopup,
        showComment: state.modal.showComment
    };
};

export default connect(mapStateToProps)(App);