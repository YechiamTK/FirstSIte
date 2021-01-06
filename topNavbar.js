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
        key: 'render',


        //it's possible to decomposite the top navbar as well, and have specific functionality
        //depending on the props (notifs=dropdown notifs etc).

        value: function render() {
            return React.createElement(
                Row,
                { fixed: 'top', name: 'top-row' },
                React.createElement(
                    Col,
                    { xs: '12', className: 'bg-dark' },
                    React.createElement(
                        Navbar,
                        { color: 'dark', expand: 'sm', className: 'pt-3 shadow d-flex' },
                        React.createElement('img', { src: "logo.png", style: { height: '50px' }, className: 'rounded-circle', alt: 'Profile Picture' }),
                        React.createElement('span', { className: 'mx-5' }),
                        React.createElement(
                            Nav,
                            { className: 'mx-auto' },
                            React.createElement(
                                NavItem,
                                { className: 'mx-5' },
                                React.createElement(
                                    NavLink,
                                    { href: '#', name: 'home' },
                                    'Home'
                                )
                            ),
                            React.createElement(
                                Dropdown,
                                { nav: true, isOpen: dropdownOpen, toggle: toggle, className: 'mx-5' },
                                React.createElement(
                                    DropdownToggle,
                                    { nav: true },
                                    'Notifications'
                                ),
                                React.createElement(
                                    DropdownMenu,
                                    null,
                                    React.createElement(
                                        DropdownItem,
                                        null,
                                        'notification number one long'
                                    ),
                                    React.createElement(
                                        DropdownItem,
                                        null,
                                        'notification num 2'
                                    ),
                                    React.createElement(
                                        DropdownItem,
                                        null,
                                        'notification number three long'
                                    )
                                )
                            ),
                            React.createElement(
                                Dropdown,
                                { nav: true, isOpen: dropdownOpen, toggle: toggle, className: 'mx-5' },
                                React.createElement(
                                    DropdownToggle,
                                    { nav: true },
                                    'Messages'
                                ),
                                React.createElement(
                                    DropdownMenu,
                                    null,
                                    React.createElement(
                                        DropdownItem,
                                        null,
                                        'message number one long'
                                    ),
                                    React.createElement(
                                        DropdownItem,
                                        null,
                                        'message num 2'
                                    ),
                                    React.createElement(
                                        DropdownItem,
                                        null,
                                        'message number three long'
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            Form,
                            { inline: true, className: 'ml-auto' },
                            React.createElement(Input, { type: 'search', className: 'bg-dark form-control btn-outline-dark text-white-50', placeholder: 'Search...' }),
                            React.createElement(
                                InputGroup,
                                null,
                                React.createElement(
                                    Button,
                                    { color: 'dark' },
                                    React.createElement('i', { className: 'fas fa-search' })
                                )
                            )
                        )
                    )
                )
            );
        }
        /*
        <div className="row sticky-top" name="top-row">
                <div className="col-12 bg-dark">
                    <nav className="navbar navbar-dark navbar-expand-sm pt-3 shadow d-flex">
                        <img src={"logo.png"} style={{height:'50px'}} className="rounded-circle" alt="Profile Picture" />
                        <span className="mx-5"></span>
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item mx-5"><a href="#" className="nav-link" name="home">Home</a></li>
                            <li className="nav-item mx-5 dropdown">
                                <a href="#" className="nav-link" data-toggle="dropdown" name="notifications">Notifications</a>
                                <div className="dropdown-menu mx-auto">
                                    <a href="#" className="dropdown-item">notification number one long</a>
                                    <a href="#" className="dropdown-item">notification num 2</a>
                                    <a href="#" className="dropdown-item">notification number three long</a>
                                </div>
                            </li>
                            <li className="nav-item mx-5 dropdown">
                                <a href="#" className="nav-link" data-toggle="dropdown" name="messages">Messages</a>
                                <div className="dropdown-menu mx-auto">
                                    <a href="#" className="dropdown-item">message number one long<br /><br /></a>
                                    <a href="#" className="dropdown-item">message num 2</a>
                                    <a href="#" className="dropdown-item">message number three long</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline ml-auto">
                            <input className="form-control search bg-dark btn-outline-dark text-white-50"
                                        type="text" placeholder="Search..."></input>
                            <div className="input-group-btn">
                                <button className="btn btn-dark" type="submit">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </nav>
                </div>
            </div>
        */

    }]);

    return TopNavbar;
}(React.Component);

export default TopNavbar;