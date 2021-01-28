class Tweet{
    constructor(name, username, message, date, id, comments){
        this._name = name;
        this._username = username;
        this._message = message;
        if (date!=undefined){
            this._date = date;
        }
        else{
            this._date = new Date();
        }
        if (comments!=undefined){
            this._comments = comments;
        }
        else{
            this._comments = [];
        }
        //const rnd = Math.random() * 999999;
        //this._id = this._username ^ rnd ^ this._date.getTime();
        this._id = id ? id : String.fromCharCode(65 + Math.floor(Math.random() * 26)) + this.guidGenerator();
    }
    guidGenerator() {
        var S4 = () => {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
    }
    getName(){
        return this._name;
    }
    getUsername(){
        return this._username;
    }
    getMessage(){
        return this._message;
    }
    getDate(){
        return this._date;
    }
    getComments(){
        return this._comments;
    }
    getId(){
        return this._id;
    }
    newComment(comment){
        this._comments.push(comment);
    }
}