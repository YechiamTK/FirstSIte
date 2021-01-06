var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GenericModal = function (_React$Component) {
    _inherits(GenericModal, _React$Component);

    function GenericModal(props) {
        _classCallCheck(this, GenericModal);

        return _possibleConstructorReturn(this, (GenericModal.__proto__ || Object.getPrototypeOf(GenericModal)).call(this, props));
    }

    _createClass(GenericModal, [{
        key: "render",
        value: function render(props) {
            return React.createElement(
                Modal,
                { isOpen: modal, toggle: toggle, size: "lg", className: "bg-dark d-flex flex-grow-1", style: { borderRadius: '20px' }, id: "post-comment" },
                React.createElement(
                    ModalHeader,
                    null,
                    props.header
                ),
                React.createElement(
                    ModalBody,
                    null,
                    props.body
                ),
                React.createElement(
                    ModalFooter,
                    null,
                    props.footer
                )
            );
        }
    }]);

    return GenericModal;
}(React.Component);

/*
<div id="post-comment" class="modal fade">
    <div class="modal-dialog modal-lg col-5 d-flex">
        <div class="modal-content bg-dark flex-grow-1" style="border-radius: 20px;">
            <div className="modal-header">
                {props.header}
            </div>
            <div className="modal-body">
                {props.body}
            </div>
            <div className="modal-footer">
                {props.footer}
            </div>        
        </div>
    </div>
</div>
*/

export default GenericModal;