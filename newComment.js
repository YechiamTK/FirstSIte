var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import GenericModal from './genericModal.js';
import GenericCard from './genericCard.js';

var NewComment = function (_React$Component) {
    _inherits(NewComment, _React$Component);

    function NewComment(props) {
        _classCallCheck(this, NewComment);

        return _possibleConstructorReturn(this, (NewComment.__proto__ || Object.getPrototypeOf(NewComment)).call(this, props));
    }

    _createClass(NewComment, [{
        key: 'render',
        value: function render() {

            var headerArgs = [className = "mt-n3 bg-dark font-weight-bold", style = { border: 'none' }];
            var bodyArgs = [className = "mt-n4 bg-dark", style = { border: 'none' }];
            var footerArgs = [className = "mt-n4 bg-dark text-info", style = { opacity: 0.8, border: 'none' }];
            var modalBody = React.createElement(
                Container,
                { fuild: true },
                React.createElement(
                    Row,
                    null,
                    React.createElement(
                        Card,
                        { className: 'my-auto w-100', style: { border: 'none' } },
                        React.createElement(
                            Row,
                            { className: 'no-gutters bg-dark text-white-50' },
                            React.createElement(
                                Col,
                                { xs: 'auto' },
                                React.createElement('img', { src: 'profile.jpg', style: 'height:50px;', 'class': 'img-fluid', alt: '' })
                            ),
                            React.createElement(GenericCard, Object.assign({}, headerArgs, bodyArgs, footerArgs))
                        )
                    )
                ),
                React.createElement(
                    Row,
                    { className: 'no-gutters bg-dark text-white-50' },
                    React.createElement(
                        Col,
                        { xs: 'auto' },
                        React.createElement('img', { src: 'profile.jpg', style: 'height:50px;', 'class': 'img-fluid', alt: '' })
                    ),
                    React.createElement(
                        Col,
                        null,
                        React.createElement(Input, { type: 'textarea', id: 'tweet-text', className: 'form-control bg-dark text-white-50 border-dark overflow-auto', style: { resize: 'none', border: 'none' }, rows: 4 })
                    )
                )
            );

            var modalFooter = React.createElement(
                Button /*onClick="newComment(this)*/,
                { 'class': 'close btn btn-default' /*data-dismiss="modal"*/ },
                'Tweet'
            );

            return React.createElement(GenericModal, { id: 'comment', body: modalBody, footer: modalFooter });
        }
    }]);

    return NewComment;
}(React.Component);

export default NewComment;

/*
<div class="row">
    <div class="card my-auto w-100" style="border: none;">
        <div class="row no-gutters bg-dark text-white-50">
            <div class="col-auto">
                <img src="profile.jpg" style="height:50px;" class="img-fluid" alt="">
            </div>
            <div class="col">
                <div class="px-2">
                    <div class="card-header mt-n3 bg-dark font-weight-bold" style="border:none;"></div>
                    <div class="card-body mt-n4 bg-dark" style="white-space:pre-wrap;border:none;"></div>
                    <div class="card-footer mt-n4 bg-dark text-info" style="opacity: 0.8;border:none;"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row no-gutters bg-dark text-white-50">
    <div class="col-auto">
        <img src="profile.jpg" style="height:50px;" class="img-fluid" alt="">
    </div>
    <div class="col">
        <textarea id="tweet-text" class="form-control bg-dark text-white-50 border-dark overflow-auto" style="resize:none;border:none;" rows="4"></textarea>
    </div>
</div>
*/