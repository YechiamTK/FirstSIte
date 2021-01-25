import modalSlice from './modalSlice.js';
import App from './App.js';

"use strict";
const twts = document.getElementById('root').getAttribute("data-tweets");
var allTweets = twts ? JSON.parse(twts) : null;
var currUser = "Yechiam Weiss";     //global variable, because I actually need to set it globally as the logged in user

/*
Begin the page with a new tweet loaded; testing purposes.
I'll need to edit it later with db to load all [recent?] tweets from db.
*/
document.addEventListener("DOMContentLoaded", function(){
    const rootElem = document.getElementById("root");
    const store = RTK.configureStore({
        reducer:{
            modal: modalSlice.reducer,
        }
    });
    /*for (let i=0; i<tweets.length;i++){
        newTweet(tweets[i], allTweets);
    }*/

    ReactDOM.render(
        <ReactRedux.Provider store={store}>
            <App tweets={allTweets} />
        </ReactRedux.Provider>, rootElem);

});


/*
 General purpose addition (closured) function. Used in newTweet() [temporary].
 */
var add = (function(){
    var cnt = 0;
    return function(){cnt++;return cnt;}
})();


/*
Post a new tweet via modal [in the html].
Currently in js-format. When I'll start using a db
I'll need to put it in json-format.
NOTE: Currently (I think) too convoluted because I'm not using a list.
*/
function newTweet(tweet_info, allTweets) {
    //hopefully temporary only: count the cards added for unique id.
    let counter = add();

    //create a new Tweet object with the tweet's info and push it to the tweets' db
    let newTweet = new Tweet(tweet_info.username,tweet_info.username,tweet_info.tweet);
    allTweets.push(newTweet);
}


/*
Make a new Tweet object out of the comment and put it in allTweets.
Afterward, insert the new Tweet as comment of previous Tweet.
Hence we have the Tweet in two location (perhaps not the best model):
    1. allTweets array (which carries all the tweets together)
    2. Inside the previous Tweets' comments array 
I'll might have to think of a more efficient model later.
*/
function newComment(elem){
    //get the new tweets' info, create Tweet object and push it to the array
    let message = $(elem).parents(".modal-footer").siblings(".modal-body").find("#tweet-text").val();
    let newTweet = new Tweet(currUser, currUser, message);
    let newId = newTweet.getId();
    allTweets.push(newTweet);

    //push the new Tweet as a comment inside the previous Tweet
    let prevId = $(elem).parents(".modal-footer").siblings(".modal-body").find(".card-header").find(".tweet-id").text();
    let prevTweetPlace = getTweetPlaceById(prevId, allTweets);
    let newTweetPlace = getTweetPlaceById(newId, allTweets);       //perhaps I can bypass this by passing the original Tweet object, but idk how js will behave
    allTweets[prevTweetPlace].newComment(allTweets[newTweetPlace]);
}


/*
*/
function showHideComments(elem, showFlag){
    if (showFlag == true){
        let parentId = $(elem).parents(".card-footer").siblings(".card-header").find(".tweet-id").text();
        let prevTweetPlace = getTweetPlaceById(parentId, allTweets);
        let prevTweet = allTweets[prevTweetPlace];
        let tweetsToComment = prevTweet.getComments();

        for (let i=0; i < tweetsToComment.length; i++){
            let newCard = $(elem).parents(".modal-content").find("ul li:first").clone();
            let currTweet = tweetsToComment[i];
            $(newCard).attr({       //clear the "clone" attributes from our new card
                'class': 'card',
                'style': ''
            });
            $(newCard).find(".card-header").text(currTweet.getUsername());
            $(newCard).find(".card-body").text(currTweet.getMessage());
            $(elem).parents(".modal-content").find("ul").prepend(newCard);
        }
    }
    else{
        let cardsList = $(elem).parents(".modal-content").find("ul");
        $(cardsList).find('.card').not('.to-clone').remove();
    }
    $(elem).attr({'onclick': 'showHideComments(this, '+!showFlag+')'});
}


/*
 Returns tweet's location inside the tweets' array.
Currently not the best practice, by will do for now.
 */
function getTweetPlaceById(id, arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i].getId()==id){
            return i;
        }
    }
    return -1;
}


/*
(suppose to be) General function for posting a new Tweet.
Creating the object to pass to function newTweet().
Currently using pre-defined username, will sometime need to change as part of logged-in user.
*/
function postTweet(){
    let text = $("#tweet-text").val();
    let tweet_json = {username:currUser, tweet: text};
    $("#tweet-text").val('');
    newTweet(tweet_json, allTweets);
    tweets.push(tweet_json);

}