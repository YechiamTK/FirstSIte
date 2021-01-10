var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import SideBarLeftOption from './SidebarLeftOption.js';
import ProfileFooter from './profileFooter.js';
import { connect } from 'react-redux';
import NewTweet from './newTweet.js';
import { toggleTweet as _toggleTweet } from './modalSlice.js';

var SidebarLeft = function (_React$Component) {
    _inherits(SidebarLeft, _React$Component);

    function SidebarLeft(props) {
        _classCallCheck(this, SidebarLeft);

        //this.state = {show:false};

        //this.showModal = thi.showModal.bind(this);
        //this.hideModal = thi.hideModal.bind(this);
        var _this = _possibleConstructorReturn(this, (SidebarLeft.__proto__ || Object.getPrototypeOf(SidebarLeft)).call(this, props));

        _this.postTweetHandler = function () {
            _this.props.postTweet(_this.state.postTweet);

            //this.setState(postTweet=false)?
        };

        return _this;
    }

    _createClass(SidebarLeft, [{
        key: 'render',


        //showModal = () => this.setState({show:true})

        //hideModal = () => this.setState({show:true})

        value: function render() {
            var arrowStyle = {
                bordeRadius: '50%',
                position: 'absolute',
                top: '45%',
                right: '-0.5rem',
                zIndex: '2',
                opacity: '1!important',
                transition: 'transform 0.5s' };
            var transformSidebarLeft = this.props.transformSidebarLeft;
            var oppositeTransform = this.props.leftTransform == "left" ? "right" : "left";
            var transformBar = this.props.leftTransform == "left" ? { transform: 'translate(-85%)' } : { transform: 'translate(0%)' };
            var transformArrow = this.props.leftTransform == "left" ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' };

            var toggleTweet = this.props.showTweet.toggleTweet;


            return React.createElement(
                Col,
                { xs: '2', style: { position: "fixed" }, id: 'sidebar-left' },
                React.createElement(
                    'aside',
                    null,
                    React.createElement(
                        Button,
                        { color: 'info', style: arrowStyle + transformArrow, onClick: function onClick() {
                                return transformSidebarLeft(oppositeTransform);
                            } },
                        React.createElement('i', { className: 'fas fa-arrow-left' })
                    )
                ),
                React.createElement(
                    Collapse,
                    { isOpen: isOpen, style: { transition: "transform 0.5s" } + transformBar },
                    React.createElement(
                        'ul',
                        { className: 'list-group bg-secondary h-100 collapse show', id: 'sb-left', style: { transition: 'transform 0.5s' } + transformBar },
                        React.createElement(SideBarLeftOption, { option: '#Explore' }),
                        React.createElement(SideBarLeftOption, { option: 'Bookmarks' }),
                        React.createElement(SideBarLeftOption, { option: 'Lists' }),
                        React.createElement(SideBarLeftOption, { option: 'Moments' }),
                        React.createElement(SideBarLeftOption, { option: 'Settings' }),
                        React.createElement(
                            'li',
                            { className: 'bg-secondary border-0 d-flex justify-content-center align-items-center' },
                            React.createElement(
                                Button,
                                { color: 'info', size: 'lg', block: true, onClick: toggleTweet },
                                'Tweet'
                            ),
                            React.createElement(NewTweet, null)
                        ),
                        React.createElement(ProfileFooter, { name: 'user-name', username: '@Username' })
                    )
                )
            );
        }
    }]);

    return SidebarLeft;
}(React.Component);

//const postTweet = {type: 'modal/toggleTweet', payload: ''};


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return { toggleTweet: function toggleTweet() {
            return dispatch(_toggleTweet);
        } };
};
//const mapStateToProps = state => state.postTweet;

export default connect({}, mapDispatchToProps)(SidebarLeft);

/*
<div className="col-2 position-fixed" id="sidebar-left">
    <aside>
        <button className="btn btn-info" style={arrowStyle + transformArrow} onClick={()=>transformSidebarLeft(oppositeTransform)}><i className="fas fa-arrow-left"></i></button>
    </aside>
    <ul  className="list-group bg-secondary h-100 collapse show" id="sb-left" style={{transition: 'transform 0.5s'} + transformBar}>
        <SideBarLeftOption option="#Explore" />
        <SideBarLeftOption option="Bookmarks" />
        <SideBarLeftOption option="Lists" />
        <SideBarLeftOption option="Moments" />
        <SideBarLeftOption option="Settings" />
        <li className="list-group-item bg-secondary border-0 d-flex justify-content-center align-items-center">
            <button type="button" className="btn btn-info btn-lg btn-block" dataToggle="modal" dataTarget="#post-tweet-id">Tweet</button>
        </li>
        <ProfileFooter name="user-name" username="@Username" />
    </ul>
</div>
*/