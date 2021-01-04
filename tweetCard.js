var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TweetCard = function (_React$Component) {
    _inherits(TweetCard, _React$Component);

    function TweetCard(props) {
        _classCallCheck(this, TweetCard);

        var _this = _possibleConstructorReturn(this, (TweetCard.__proto__ || Object.getPrototypeOf(TweetCard)).call(this, props));

        var tweetInfo = _this.props.tweetInfo;
        return _this;
    }
    /*
    Pass the tweet info from the card to the pop-up modal.
    *
    setInfo = () =>{
        //get tweet's info from the card
        let usrname = $(this).siblings(".card-header").text();
        let twt = this.innerText;
        let id = '<span class="tweet-id" style="display:none;">'+$(this).siblings("span").text()+'</span>';
        //empty the header, otherwise close button won't work.
        $("#tweet-id").find(".card-header").empty();
        //create close button
        let closeBtn = $("<button>&times;</button>");
        closeBtn.attr({
            'type': 'button',
            'class': 'close text-white-50',
            'data-dismiss': 'modal'});
        //add the tweet's info and the close button to the modal's html.
        $("#tweet-id").find(".card-header").text(usrname);
        $("#tweet-id").find(".card-header").append(closeBtn);
        $("#tweet-id").find(".card-header").append(id);
        $("#tweet-id").find(".card-body").text(twt);
    }*/

    _createClass(TweetCard, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "card mx-3 my-5", id: this.props.tweetInfo.getId() },
                React.createElement(
                    "div",
                    { className: "row no-gutters bg-dark text-white-50" },
                    React.createElement(
                        "div",
                        { className: "col-auto", style: { flexGrow: '0 !important' } },
                        React.createElement("img", { src: "./profile.jpg", style: { height: '50px' }, className: "img-fluid", alt: "" })
                    ),
                    React.createElement(
                        "div",
                        { className: "col" },
                        React.createElement(
                            "div",
                            { className: "px-2" },
                            React.createElement(
                                "div",
                                { className: "card-header" },
                                React.createElement(
                                    "a",
                                    { href: "#", className: "link text-decoration-none" },
                                    this.props.tweetInfo.getUsername()
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "card-body", onClick: this.setInfo, type: "button", "data-toggle": "modal", "data-target": "#tweet-id" },
                                this.props.tweetInfo.getMessage()
                            ),
                            React.createElement(
                                "div",
                                { className: "card-footer" },
                                React.createElement(
                                    "span",
                                    { className: "btn-toolbar btn-group-sm px-5" },
                                    React.createElement(
                                        "button",
                                        { type: "button", className: "btn mx-auto text-white-50 rounded-circle", "data-toggle": "modal", "data-target": "#post-comment" },
                                        React.createElement("i", { className: "far fa-comment-alt" })
                                    ),
                                    React.createElement(
                                        "button",
                                        { type: "button", className: "btn mx-auto text-white-50 rounded-circle", "data-toggle": "modal", "data-target": "#tweet-id" },
                                        React.createElement(
                                            "span",
                                            { "data-toggle": "collapse", "data-target": "#comments" },
                                            React.createElement("i", { className: "far fa-comments" })
                                        )
                                    ),
                                    React.createElement(
                                        "button",
                                        { type: "button", className: "btn mx-auto text-white-50 rounded-circle" },
                                        React.createElement("i", { className: "fas fa-retweet" })
                                    ),
                                    React.createElement(
                                        "button",
                                        { type: "button", className: "btn mx-auto text-white-50 rounded-circle" },
                                        React.createElement("i", { className: "far fa-heart" })
                                    ),
                                    React.createElement(
                                        "button",
                                        { type: "button", className: "btn mx-auto text-white-50 rounded-circle" },
                                        React.createElement("i", { className: "far fa-share-square" })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return TweetCard;
}(React.Component);

export default TweetCard;