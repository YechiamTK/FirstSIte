var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import GenericModal from './genericModal.js';
import GenericCard from './genericCard.js';

var PopupTweet = function (_React$Component) {
    _inherits(PopupTweet, _React$Component);

    function PopupTweet(props) {
        _classCallCheck(this, PopupTweet);

        return _possibleConstructorReturn(this, (PopupTweet.__proto__ || Object.getPrototypeOf(PopupTweet)).call(this, props));
    }

    _createClass(PopupTweet, [{
        key: 'render',
        value: function render(props) {
            var header = React.createElement('span', null);

            //NEED TO INSERT CARD INFO, HOW?
            var cardfooter = React.createElement(
                ButtonToolbar,
                null,
                React.createElement(
                    ButtonGroup,
                    { size: 'sm', className: 'px-5' },
                    React.createElement(
                        Button,
                        { className: 'mx-auto text-white-50 rounded-circle' },
                        React.createElement('i', { className: 'far fa-comment-alt' })
                    ),
                    React.createElement(
                        Button,
                        { className: 'mx-auto text-white-50 rounded-circle' /*onClick="showHideComments()"*/ },
                        React.createElement('i', { className: 'far fa-comments' })
                    ),
                    React.createElement(
                        Button,
                        { className: 'mx-auto text-white-50 rounded-circle' },
                        React.createElement('i', { className: 'fas fa-retweet' })
                    ),
                    React.createElement(
                        Button,
                        { className: 'mx-auto text-white-50 rounded-circle' },
                        React.createElement('i', { className: 'far fa-heart' })
                    ),
                    React.createElement(
                        Button,
                        { className: 'mx-auto text-white-50 rounded-circle' },
                        React.createElement('i', { className: 'far fa-share-square' })
                    )
                )
            );

            var body = React.createElement(
                Row,
                { className: 'no-gutters bg-dark text-white-50' },
                React.createElement(
                    Col,
                    { xs: 'auto' },
                    React.createElement('img', { src: 'profile.jpg', style: 'height:50px;', 'class': 'img-fluid', alt: '' })
                ),
                React.createElement(GenericCard, { cardfooter: this.cardfooter })
            );

            var footer = React.createElement('span', null);

            var id = "popup";

            return React.createElement(GenericModal, { body: this.body, id: this.id });
        }
    }]);

    return PopupTweet;
}(React.Component);

export default PopupTweet;