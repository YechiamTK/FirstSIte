var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfileFooter = function (_React$Component) {
    _inherits(ProfileFooter, _React$Component);

    function ProfileFooter() {
        _classCallCheck(this, ProfileFooter);

        return _possibleConstructorReturn(this, (ProfileFooter.__proto__ || Object.getPrototypeOf(ProfileFooter)).apply(this, arguments));
    }

    _createClass(ProfileFooter, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                { className: "list-group-item bg-secondary mt-5" },
                React.createElement("div", { className: "mt-5" }),
                React.createElement(
                    "div",
                    { className: "row d-flex" },
                    React.createElement(
                        "div",
                        { className: "col-auto" },
                        React.createElement("img", { src: "logo.png", className: "rounded-circle img-fluid", style: { height: '40px' }, alt: "Profile Picture" })
                    ),
                    React.createElement(
                        "div",
                        { className: "col" },
                        React.createElement(
                            "div",
                            null,
                            this.props.name
                        ),
                        React.createElement(
                            "div",
                            { className: "text-white" },
                            React.createElement(
                                "small",
                                null,
                                this.props.username
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ProfileFooter;
}(React.Component);

export default ProfileFooter;