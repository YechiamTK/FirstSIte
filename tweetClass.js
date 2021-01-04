var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tweet = function () {
    function Tweet(name, username, message, date, comments) {
        _classCallCheck(this, Tweet);

        this._name = name;
        this._username = username;
        this._message = message;
        if (date != undefined) {
            this._date = date;
        } else {
            this._date = new Date();
        }
        if (comments != undefined) {
            this._comments = comments;
        } else {
            this._comments = [];
        }
        this._id = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + this._date.getTime();
    }

    _createClass(Tweet, [{
        key: "getName",
        value: function getName() {
            return this._name;
        }
    }, {
        key: "getUsername",
        value: function getUsername() {
            return this._username;
        }
    }, {
        key: "getMessage",
        value: function getMessage() {
            return this._message;
        }
    }, {
        key: "getDate",
        value: function getDate() {
            return this._date;
        }
    }, {
        key: "getComments",
        value: function getComments() {
            return this._comments;
        }
    }, {
        key: "getId",
        value: function getId() {
            return this._id;
        }
    }, {
        key: "newComment",
        value: function newComment(comment) {
            this._comments.push(comment);
        }
    }]);

    return Tweet;
}();