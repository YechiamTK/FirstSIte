"use strict";

var json = {username:"Yechiam Weiss", tweet:"Hello world this is my first tweet!~~!<br><br><br><br><br>Sup!"};
var info = [];


/*{username:"Yechiam Weiss", tweet:"Hello world this is my SECOND tweet!~~!"}+
{username:"Yechiam Weiss", tweet:"Hello world this is my Th1rd tweet!~~!"}+
{username:"Yechiam Weiss", tweet:"Hello world this is my F0uRth tweet!~~!"};*/

/*
Begin the page with a new tweet loaded; testing purposes.
I'll need to edit it later with db to load all [recent?] tweets from db.
*/
$(document).ready(function(){                           
    newTweet(json);

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
function newTweet(tweet_info) {
    //hopefully temporary only: count the cards added for unique id.
    let counter = add();

    //start making the tags needed to insert the new card layout.
    let card_class = document.createElement("div");
    card_class.setAttribute("class", "card mx-3 my-5");
    card_class.setAttribute("name", "card-class"+counter);
    let row_class = document.createElement("div");
    row_class.setAttribute("class", "row no-gutters bg-dark text-white-50");
    row_class.setAttribute("name", "row-class"+counter);
    let profile_class = '<div class="col-auto">'+
    '<img src="profile.jpg" style="height:50px;" class="img-fluid" alt=""></img></div>';
    let col_class = document.createElement("div");
    col_class.setAttribute("class", "col");
    col_class.setAttribute("name", "col-class"+counter);
    let card_col_class = document.createElement("div");
    card_col_class.setAttribute("class", "card-block px-2");
    card_col_class.setAttribute("name", "card-col-class"+counter);
    let card_footer = '<div class="card-footer"><span class="btn-toolbar btn-group-sm px-5">'+
        '<button type="button" class="btn text-white-50 mx-auto rounded-circle"><i class="far fa-comment-alt"></i></button>'+
        '<button type="button" class="btn text-white-50 mx-auto rounded-circle"><i class="fas fa-retweet"></i></button>'+
        '<button type="button" class="btn text-white-50 mx-auto rounded-circle"><i class="far fa-heart"></i></button>'+
        '<button type="button" class="btn text-white-50 mx-auto rounded-circle"><i class="far fa-share-square"></i></button></span></div>';

    //get the tweet info (object parameter) and put it in the header and body of the card.
    let username = tweet_info.username;
    let tweet = tweet_info.tweet;
    let card_header = '<div class="card-header"><a href="#" class="link text-decoration-none">@'+username+'</a></div>';
    let card_body = '<div class="card-body" style="white-space: pre-wrap;" onclick="setInfo(this)" type="button"'+
                    'data-toggle="modal" data-target="#tweet-id">'+tweet+"</div>";

    //now actually add the card to the html.
    $("div[name='main-content'").prepend(card_class);
    $("div[name='card-class"+counter+"']").append(row_class);
    $("div[name='row-class"+counter+"']").append(profile_class);
    $("div[name='row-class"+counter+"']").append(col_class);
    $("div[name='col-class"+counter+"']").append(card_col_class);
    $("div[name='card-col-class"+counter+"']").append(card_header);
    $("div[name='card-col-class"+counter+"']").append(card_body);
    $("div[name='card-col-class"+counter+"']").append(card_footer);    
}

/*
(suppose to be) General function for posting a new Tweet.
Creating the object to pass to function newTweet().
Currently using pre-defined username, WILL BE CHANGED LATER.
*/
function postTweet(){
    let text = $("#tweet-text").val();
    let tweet_json = {username:"Yechiam Weiss", tweet: text};
    $("#tweet-text").val('');
    newTweet(tweet_json);
}

/*
Pass the tweet info from the card to the pop-up modal.
*/
function setInfo(t){
    //get tweet's info from the card
    let usrname = t.previousElementSibling.innerText;
    let twt = t.innerText;
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
    $("#tweet-id").find(".card-body").text(twt);
}
/*
$(".fa-comment-alt").click(function () { 
    this.parents(".row").find("ul").toggle();    
});*/


//WHYY DOESNT IT WORKK???!?!!?!
$("div[name='main-content'").on('click', '.fa-comment-alt', function(){
    //get tweet's info from parent's card
    let usrname = $(this).parents(".card-footer").siblings(".card-header").text();
    let twt = $(this).parents(".card-footer").siblings(".card-body").text();

    //empty the header, otherwise close button won't work.
    $("#tweet-id").find(".card-header").empty();
    //create close button
    let closeBtn = $("<button>&times;</button>");
    closeBtn.attr({
        'type': 'button',
        'class': 'close text-white-50',
        'data-dismiss': 'modal'});
        
    //add the tweet's info and the close button to the modal's html.
    $("#post-comment").find(".card-header").text(usrname);
    $("#post-comment").find(".card-header").append(closeBtn);
    $("#post-comment").find(".card-body").prepend("replying to "+usrname);
    $("#post-comment").find(".card-body").prepend(twt);
});