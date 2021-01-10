var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import GenericModal from './genericModal.js';
import { connect } from 'react-redux';

var NewTweet = function (_React$Component) {
    _inherits(NewTweet, _React$Component);

    function NewTweet(props) {
        _classCallCheck(this, NewTweet);

        return _possibleConstructorReturn(this, (NewTweet.__proto__ || Object.getPrototypeOf(NewTweet)).call(this, props));
        //this.setState = {showHide: this.props.show ? {display: 'block'} : {display: 'none'}};
    }

    _createClass(NewTweet, [{
        key: 'postTweet',
        value: function postTweet() {
            /*
            - get Tweets' data
            - post it to server
            [function on server-side catches it and posts it?]
            */
        }
    }, {
        key: 'render',
        value: function render(props) {
            var modalHeader = React.createElement('span', null);
            //<button type="button" className="close text-white-50" data-dismiss="modal">&times;</button>
            var modalBody = React.createElement(Input, { type: 'textarea', className: 'form control bg-secondary text-white-50 border-dark overflow-auto',
                placeholder: 'Start typing...', style: { resize: 'none;' }, rows: 5 });
            //<textarea id="tweet-text" className="form-control bg-secondary text-white-50 border-dark overflow-auto" style={{resize:'none;'}} rows="4"></textarea>
            var modalFooter = React.createElement(
                Button /*onclick="postTweet()"*/,
                { className: 'close', color: 'default' },
                'Tweet'
            );
            //<button type="button" /*onclick="postTweet()"*/ className="close btn btn-default" data-dismiss="modal">Tweet</button>;

            return React.createElement(GenericModal /*display={this.showHide}*/, { header: modalHeader, body: modalBody, footer: modalFooter });
        }
    }]);

    return NewTweet;
}(React.Component);

//const closeTweet = {type: 'modals/toggleModal', payload: ''};
//const mapStateToProps = state => state.postTweet;

//export default connect(mapStateToProps, closeTweet)(NewTweet);

export default NewTweet;