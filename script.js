"use strict";
var allTweets = [];                 //global variable, because it merely emulates the object I'd control via a server
var currUser = "Yechiam Weiss";     //global variable, because I actually need to set it globally as the logged in user

/*
Begin the page with a new tweet loaded; testing purposes.
I'll need to edit it later with db to load all [recent?] tweets from db.
*/
$(document).ready(function(){
    for (let i=0; i<tweets.length;i++){
        newTweet(tweets[i], allTweets);
    }
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

    //start making the tags needed to insert the new card layout.
    let card_class = document.createElement("div");
    card_class.setAttribute("class", "card mx-3 my-5");
    card_class.setAttribute("name", "card-class"+counter);
    let row_class = document.createElement("div");
    row_class.setAttribute("class", "row no-gutters bg-dark text-white-50");
    row_class.setAttribute("name", "row-class"+counter);
    let profile_class = '<div class="col-auto" style="flex-grow:0 !important;">'+
    '<img src="logo.png" style="height:50px;" class="img-fluid" alt=""></img></div>';
    let col_class = document.createElement("div");
    col_class.setAttribute("class", "col");
    col_class.setAttribute("name", "col-class"+counter);
    let card_col_class = document.createElement("div");
    card_col_class.setAttribute("class", "card-block px-2");
    card_col_class.setAttribute("name", "card-col-class"+counter);
    let card_footer = '<div class="card-footer"><span class="btn-toolbar btn-group-sm px-5">'+
        '<button type="button" class="btn text-white-50 mx-auto rounded-circle" data-toggle="modal" data-target="#post-comment"><i class="far fa-comment-alt"></i></button>'+
        '<button type="button" class="btn text-white-50 mx-auto rounded-circle"><i class="fas fa-retweet"></i></button>'+
        '<button type="button" class="btn text-white-50 mx-auto rounded-circle"><i class="far fa-heart"></i></button>'+
        '<button type="button" class="btn text-white-50 mx-auto rounded-circle"><i class="far fa-share-square"></i></button></span></div>';

    //get the tweet info (object parameter) and put it in the header and body of the card.
    let username = newTweet.getUsername();
    let tweet = newTweet.getMessage();
    let card_header = '<div class="card-header"><a href="#" class="link text-decoration-none">@'+username+
    '</a></div><span class="tweet-id" style="display:none;">'+newTweet._id+'</span>';
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
    
    //add click function on the comment button to put the info of the commented tweet
    $('.fa-comment-alt').parent().on('click', function(){
        //get tweet from parents' card using secret id [not very safe, but will do for now]
        let id = $(this).parents(".card-footer").siblings(".tweet-id").text();
        let tweet = allTweets[getTweetPlaceById(id,allTweets)];
        
        //get the new tweet's DOM
        let header = $("#post-comment").find(".card").find(".card-header");
        let body = $("#post-comment").find(".card").find(".card-body");
        let footer = $("#post-comment").find(".card").find(".card-footer");

        //insert the info to the comment modal
        header.html(tweet.getUsername()+"<span class='tweet-id' style='display:none;'>"+tweet.getId()+"</span>");
        body.html(tweet.getMessage());
        footer.text("replying to "+tweet.getUsername());
    });
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

function sidebarTransform(btn, side, sidebar){
    //add transition effect
    sidebar.attr({'style': 'transition: transform 0.5s'});
    //transformation for each side (open and close)
    switch (side){
        case "left":
            if (sidebar.attr("id").includes("left")){   //means hiding, left bar
                sidebar.attr({'style': sidebar.attr("style")+';transform: translate(-85%)'});

                //make sure the main content is adjusting to the change
                $("div[name='main-content").attr({'style': 'transition: all 0.5s'})     //;z-index: -1
                $("div[name='main-content").attr({"class": "col-10 container-fluid ml-4"});

                //also change the button icon! (or at least make it looks like it changes)
                $(btn).find("i").attr({"style": "transition: transform 0.5s; transform: rotate(180deg)"});
            }
            else{   //means showing, right bar
                sidebar.attr({'style': sidebar.attr("style")+';transform: translate(0%)'});

                //make sure the main content is adjusting to the change
                /* NEED TO CONSIDER BOTH BARS DISAPEARANCE BEFORE APPLYING THIS
                $("div[name='main-content").attr({'style': 'transition: all 1s ease'})
                $("div[name='main-content").attr({"class": "col-8 container-fluid"});
                */
            }
            side = "right";
            break;

        case "right":
            if(sidebar.attr("id").includes("left")){    //means showing, left bar
                sidebar.attr({'style': sidebar.attr("style")+';transform: translate(0%)'});
                //make sure the main content is adjusting to the change

                $("div[name='main-content").attr({'style': 'transition: all 0.5s'})     //;z-index: -1
                $("div[name='main-content").attr({"class": "col-8 offset-2 container-fluid"});

                //also change the button icon! (or at least make it looks like it changes)
                $(btn).find("i").attr({"style": "transition: transform 0.5s; transform: rotate(0deg)"});
            }
            else{   //means hiding, right bar
                sidebar.attr({'style': sidebar.attr("style")+';transform: translate(85%)'});

                //make sure the main content is adjusting to the change
                /* NEED TO CONSIDER BOTH BARS DISAPEARANCE BEFORE APPLYING THIS
                $("div[name='main-content").attr({'style': 'transition: all 1s'})
                $("div[name='main-content").attr({"class": "col-10 container-fluid mx-5"});
                */
            }
            side = "left";
            break;
    }
    //change the button to open/close (simply replace the function with the opposite side)
    $(btn).attr({'onclick': "sidebarTransform(this, '"+side+"', $('#"+sidebar.attr('id')+"'))"});
}