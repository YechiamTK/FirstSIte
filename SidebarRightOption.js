var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideBarRightOption = function (_React$Component) {
    _inherits(SideBarRightOption, _React$Component);

    function SideBarRightOption() {
        _classCallCheck(this, SideBarRightOption);

        return _possibleConstructorReturn(this, (SideBarRightOption.__proto__ || Object.getPrototypeOf(SideBarRightOption)).apply(this, arguments));
    }

    _createClass(SideBarRightOption, [{
        key: "render",
        value: function render() {
            return React.createElement(
                Button,
                { color: "secondary text-white-50 mx-auto" },
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "small",
                        null,
                        this.props.trend
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h4",
                        null,
                        this.props.trendTag
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "small",
                        null,
                        this.props.popularity
                    )
                )
            );
        }
    }]);

    return SideBarRightOption;
}(React.Component);
/*
<button type="button" href="#" className="list-group-item list-group-item-action bg-secondary text-white-50 mx-auto">
    <div><small>{this.props.trend}</small></div>
    <div><h4>{this.props.trendTag}</h4></div>
    <div><small>{this.props.popularity}</small></div>
</button>
*/


export default SideBarRightOption;