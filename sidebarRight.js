var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import SideBarRightOption from "./SideBarRightOption.js";

var SidebarRight = function (_React$Component) {
    _inherits(SidebarRight, _React$Component);

    function SidebarRight() {
        _classCallCheck(this, SidebarRight);

        return _possibleConstructorReturn(this, (SidebarRight.__proto__ || Object.getPrototypeOf(SidebarRight)).apply(this, arguments));
    }

    _createClass(SidebarRight, [{
        key: "render",
        value: function render() {
            /*<aside>
                        <button class="btn btn-info" style="border-radius: 50%;position: absolute;top: 45%; left: -1rem;z-index: 3; opacity: 1
                            !important;" onclick="sidebarTransform(this, 'left',$('#sidebar-right'))"><i class="fas fa-arrow-right"></i></button>
                    </aside>*/
            return React.createElement(
                "div",
                { className: "col-2 position-fixed offset-10 overflow-auto", style: { height: '89vh' } },
                React.createElement(
                    "ul",
                    { className: "list-group bg-secondary h-100" },
                    React.createElement(SideBarRightOption, { trend: "trend", trendTag: "#Trend", popularity: "large number" }),
                    React.createElement(SideBarRightOption, { trend: "trend", trendTag: "#Trend", popularity: "large number" }),
                    React.createElement(SideBarRightOption, { trend: "trend", trendTag: "#Trend", popularity: "large number" }),
                    React.createElement(SideBarRightOption, { trend: "trend", trendTag: "#Trend", popularity: "large number" }),
                    React.createElement(SideBarRightOption, { trend: "trend", trendTag: "#Trend", popularity: "large number" }),
                    React.createElement(SideBarRightOption, { trend: "trend", trendTag: "#Trend", popularity: "large number" }),
                    React.createElement(SideBarRightOption, { trend: "trend", trendTag: "#Trend", popularity: "large number" }),
                    React.createElement(
                        "button",
                        { type: "button", href: "#", className: "list-group-item list-group-item-action bg-info text-white mx-auto" },
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "h6",
                                null,
                                "Show more..."
                            )
                        )
                    )
                )
            );
        }
    }]);

    return SidebarRight;
}(React.Component);

export default SidebarRight;