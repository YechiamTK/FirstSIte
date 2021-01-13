class Tweet {
  constructor(name, username, message, date, comments) {
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

  getName() {
    return this._name;
  }

  getUsername() {
    return this._username;
  }

  getMessage() {
    return this._message;
  }

  getDate() {
    return this._date;
  }

  getComments() {
    return this._comments;
  }

  getId() {
    return this._id;
  }

  newComment(comment) {
    this._comments.push(comment);
  }

}