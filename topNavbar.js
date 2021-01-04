var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopNavbar = function (_React$Component) {
    _inherits(TopNavbar, _React$Component);

    function TopNavbar() {
        _classCallCheck(this, TopNavbar);

        return _possibleConstructorReturn(this, (TopNavbar.__proto__ || Object.getPrototypeOf(TopNavbar)).apply(this, arguments));
    }

    _createClass(TopNavbar, [{
        key: "render",


        //it's possible to decomposite the top navbar as well, and have specific functionality
        //depending on the props (notifs=dropdown notifs etc).

        value: function render() {
            return React.createElement(
                "div",
                { className: "row sticky-top", name: "top-row" },
                React.createElement(
                    "div",
                    { className: "col-12 bg-dark" },
                    React.createElement(
                        "nav",
                        { className: "navbar navbar-dark navbar-expand-sm pt-3 shadow d-flex" },
                        React.createElement("img", { src: "logo.png", style: { height: '50px' }, className: "rounded-circle", alt: "Profile Picture" }),
                        React.createElement("span", { className: "mx-5" }),
                        React.createElement(
                            "ul",
                            { className: "navbar-nav mx-auto" },
                            React.createElement(
                                "li",
                                { className: "nav-item mx-5" },
                                React.createElement(
                                    "a",
                                    { href: "#", className: "nav-link", name: "home" },
                                    "Home"
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "nav-item mx-5 dropdown" },
                                React.createElement(
                                    "a",
                                    { href: "#", className: "nav-link", "data-toggle": "dropdown", name: "notifications" },
                                    "Notifications"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "dropdown-menu mx-auto" },
                                    React.createElement(
                                        "a",
                                        { href: "#", className: "dropdown-item" },
                                        "notification number one long"
                                    ),
                                    React.createElement(
                                        "a",
                                        { href: "#", className: "dropdown-item" },
                                        "notification num 2"
                                    ),
                                    React.createElement(
                                        "a",
                                        { href: "#", className: "dropdown-item" },
                                        "notification number three long"
                                    )
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "nav-item mx-5 dropdown" },
                                React.createElement(
                                    "a",
                                    { href: "#", className: "nav-link", "data-toggle": "dropdown", name: "messages" },
                                    "Messages"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "dropdown-menu mx-auto" },
                                    React.createElement(
                                        "a",
                                        { href: "#", className: "dropdown-item" },
                                        "message number one long",
                                        React.createElement("br", null),
                                        React.createElement("br", null)
                                    ),
                                    React.createElement(
                                        "a",
                                        { href: "#", className: "dropdown-item" },
                                        "message num 2"
                                    ),
                                    React.createElement(
                                        "a",
                                        { href: "#", className: "dropdown-item" },
                                        "message number three long"
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "form",
                            { className: "form-inline ml-auto" },
                            React.createElement("input", { className: "form-control search bg-dark btn-outline-dark text-white-50",
                                type: "text", placeholder: "Search..." }),
                            React.createElement(
                                "div",
                                { className: "input-group-btn" },
                                React.createElement(
                                    "button",
                                    { className: "btn btn-dark", type: "submit" },
                                    React.createElement("i", { className: "fas fa-search" })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return TopNavbar;
}(React.Component);

export default TopNavbar;