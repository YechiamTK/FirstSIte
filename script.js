"use strict";

var json = {username:"Yechiam Weiss", tweet:"Hello world this is my first tweet!~~!<br><br><br><br><br>Sup!"};

/*{username:"Yechiam Weiss", tweet:"Hello world this is my SECOND tweet!~~!"}+
{username:"Yechiam Weiss", tweet:"Hello world this is my Th1rd tweet!~~!"}+
{username:"Yechiam Weiss", tweet:"Hello world this is my F0uRth tweet!~~!"};*/

$(document).ready(function(){                           
    newTweet(json);

});

//post new tweet, using js-styled json              //WILL NEED TO CREATE JSON-STYLED FUNCTION LATER
function newTweet(tweet_info) {                     //THERE'S GOTTA BE AN EASIER WAY TO DO THIS!
    let card_class = document.createElement("div");
    card_class.setAttribute("class", "card mx-3 my-5");
    card_class.setAttribute("name", "card-class");
    let row_class = document.createElement("div");
    row_class.setAttribute("class", "row no-gutters bg-dark text-white-50");
    row_class.setAttribute("name", "row-class");
    let profile_class = '<div class="col-auto">'+
    '<img src="profile.jpg" style="height:50px;" class="img-fluid" alt=""></img></div>';
    let col_class = document.createElement("div");
    col_class.setAttribute("class", "col");
    col_class.setAttribute("name", "col-class");
    let card_col_class = document.createElement("div");
    card_col_class.setAttribute("class", "card-block px-2");
    card_col_class.setAttribute("name", "card-col-class");
    let card_footer = '<div class="card-footer"><span class="btn-toolbar btn-group-sm px-5">'+
        '<button type="button" class="btn text-white-50 mx-auto rounded-circle"><i class="far fa-comment-alt"></i></button>'+
        '<button type="button" class="btn text-white-50 mx-auto rounded-circle"><i class="fas fa-retweet"></i></button>'+
        '<button type="button" class="btn text-white-50 mx-auto rounded-circle"><i class="far fa-heart"></i></button>'+
        '<button type="button" class="btn text-white-50 mx-auto rounded-circle"><i class="far fa-share-square"></i></button></span></div>';
    //let key;
    let username = json.username;
    let tweet = json.tweet;
    let card_header = '<div class="card-header"><a href="#" class="link text-decoration-none">@'+username+'</a></div>';
    let card_body = '<div class="card-body">'+tweet+"</div>";
    $("div[name='main-content'").prepend(card_class);
    $("div[name='card-class']").append(row_class);
    $("div[name='row-class']").append(profile_class);
    $("div[name='row-class']").append(col_class);
    $("div[name='col-class']").append(card_col_class);
    $("div[name='card-col-class']").append(card_header);
    $("div[name='card-col-class']").append(card_body);
    $("div[name='card-col-class']").append(card_footer);
}

function postTweet(){
    let text = $("#tweet-text").val();
    let tweet_json = {username:"Yechiam Weiss", tweet: text};
    newTweet(tweet_json);   
}