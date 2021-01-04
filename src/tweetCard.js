class TweetCard extends React.Component{

    constructor(props){
        super(props);
        var tweetInfo = this.props.tweetInfo;
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

    render(){
        return(<div className="card mx-3 my-5" id={this.props.tweetInfo.getId()}>
                    <div className="row no-gutters bg-dark text-white-50">
                        <div className="col-auto" style={{flexGrow: '0 !important'}}>
                            <img src={"./profile.jpg"} style={{height:'50px'}} className="img-fluid" alt="" />
                        </div>
                        <div className="col">
                            <div className="px-2">
                                <div className="card-header"><a href="#" className="link text-decoration-none">{this.props.tweetInfo.getUsername()}</a></div>
                                <div className="card-body" onClick={this.setInfo} type="button" data-toggle="modal" data-target="#tweet-id">{this.props.tweetInfo.getMessage()}</div>
                                <div className="card-footer">
                                    <span className="btn-toolbar btn-group-sm px-5">
                                        <button type="button" className="btn mx-auto text-white-50 rounded-circle" data-toggle="modal" data-target="#post-comment"><i className="far fa-comment-alt"></i></button>
                                        <button type="button" className="btn mx-auto text-white-50 rounded-circle" data-toggle="modal" data-target="#tweet-id"><span data-toggle="collapse" data-target="#comments"><i className="far fa-comments"></i></span></button>
                                        <button type="button" className="btn mx-auto text-white-50 rounded-circle"><i className="fas fa-retweet"></i></button>
                                        <button type="button" className="btn mx-auto text-white-50 rounded-circle"><i className="far fa-heart"></i></button>
                                        <button type="button" className="btn mx-auto text-white-50 rounded-circle"><i className="far fa-share-square"></i></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>           
                </div>);
    }
}

export default TweetCard;