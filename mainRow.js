var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import SidebarLeft from './sidebarLeft.js';
import MainContent from './mainContent.js';

var MainRow = function (_React$Component) {
    _inherits(MainRow, _React$Component);

    function MainRow(props) {
        _classCallCheck(this, MainRow);

        var _this = _possibleConstructorReturn(this, (MainRow.__proto__ || Object.getPrototypeOf(MainRow)).call(this, props));

        var transformSidebarLeft = _this.transformSidebarLeft.bind(_this);
        _this.state = { leftTransform: "right" };
        var tweets = _this.props.tweets;
        return _this;
    }

    _createClass(MainRow, [{
        key: 'transformSidebarLeft',
        value: function transformSidebarLeft(side) {
            //NEED TO REPLACE ANYTHING THAT USES CLASS-BASED BOOTSTRAP
            switch (side) {
                case "left":
                    this.setState({ leftTransform: "left" });

                    //make sure the main content is adjusting to the change
                    $("div[name='main-content").attr({ 'style': 'transition: all 0.5s' }); //;z-index: -1
                    $("div[name='main-content").attr({ "class": "col-10 container-fluid ml-4" });

                    //also change the button icon! (or at least make it looks like it changes)
                    $(btn).find("i").attr({ "style": "transition: transform 0.5s; transform: rotate(180deg)" });
                    side = "right";
                    break;

                case "right":
                    this.setState({ leftTransform: "right" });
                    sidebar.attr({ 'style': sidebar.attr("style") + ';transform: translate(0%)' });
                    //make sure the main content is adjusting to the change

                    $("div[name='main-content").attr({ 'style': 'transition: all 0.5s' }); //;z-index: -1
                    $("div[name='main-content").attr({ "class": "col-8 offset-2 container-fluid" });

                    //also change the button icon! (or at least make it looks like it changes)
                    $(btn).find("i").attr({ "style": "transition: transform 0.5s; transform: rotate(0deg)" });
                    side = "left";
                    break;
            }
            //change the button to open/close (simply replace the function with the opposite side)
            $(btn).attr({ 'onclick': "sidebarTransform(this, '" + side + "', $('#" + sidebar.attr('id') + "'))" });
        }
    }, {
        key: 'render',
        value: function render() {
            var transformSidebarLeft = this.transformSidebarLeft;

            return React.createElement(
                Container,
                { fuild: true, className: 'ml-n3' },
                React.createElement(
                    Row,
                    { id: 'main-row' },
                    React.createElement(SidebarLeft, { transformSidebarLeft: transformSidebarLeft.bind(this), leftTransform: this.state.leftTransform }),
                    React.createElement(MainContent, { tweets: this.props.tweets, leftTransform: this.state.leftTransform })
                )
            );
        }
    }]);

    return MainRow;
}(React.Component);

export default MainRow;