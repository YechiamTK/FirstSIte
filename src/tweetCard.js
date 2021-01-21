import GenericCard from './genericCard.js';
import {toggleComment, togglePopup} from './modalSlice.js';
import PopupTweet from './popupTweet.js';
//import NewComment from './newComment.js'

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

    handlePopup =()=>{
        const {togglePopup} = this.props;
        togglePopup();
    }

    handleComment =()=>{
        const {toggleComment} = this.props;
        toggleComment();
    }

    render(){

        const {tweetInfo} = this.props;
        
        const id = tweetInfo.getId();

        const header = <a className="link text-decoration-none" onClick={()=>{this.handlePopup()}}>{this.props.tweetInfo.getUsername()}</a>;

        //could be useless, will return to it later
        const bodyArgs = {/* onClick={setInfo},  type:"button", /*dataToggle:"modal", dataTarget:"#tweet-id"*/};

        const body = tweetInfo.getMessage();

        const footer = 
            <Reactstrap.ButtonToolbar /*key={id}*/>
                <Reactstrap.ButtonGroup size="sm" className="px-5" /*key={id}*/>
                    <Reactstrap.Button className="mx-auto text-white-50 rounded-circle" onClick={()=>{this.handleComment()}}/*data-toggle="modal" data-target="#post-comment"*/>
                        <i className="far fa-comment-alt"></i>
                    </Reactstrap.Button>
                    {/*<Button className="mx-auto text-white-50 rounded-circle" onClick={toggleCommentSection} /*data-toggle="modal" data-target="#tweet-id"/>
                        {/*<span dataToggle="collapse" dataTarget="#comments">/}
                            <i className="far fa-comment-alt"></i>
                        {/*</span>/}
                    </Button>*/}
                    <Reactstrap.Button className="mx-auto text-white-50 rounded-circle"><i className="fas fa-retweet"></i></Reactstrap.Button>
                    <Reactstrap.Button className="mx-auto text-white-50 rounded-circle"><i className="far fa-heart"></i></Reactstrap.Button>
                    <Reactstrap.Button className="mx-auto text-white-50 rounded-circle"><i className="far fa-share-square"></i></Reactstrap.Button>
                </Reactstrap.ButtonGroup>
            </Reactstrap.ButtonToolbar>;
        
         const headerArgs={};
         const footerArgs={};
        
        return(
        <Reactstrap.Card id={id} className="mx-3 my-5" onClick={()=>{this.handlePopup()}}>
            {/* <PopupTweet /> */}
            <Reactstrap.Row className="no-gutters bg-dark text-white-50">
                <Reactstrap.Col xs="auto" style={{flexGrow: '0 !important'}}>
                    <img src={"./profile.jpg"} style={{height:'50px'}} className="img-fluid" alt="" />
                </Reactstrap.Col>
                <GenericCard {...{headerArgs: headerArgs, bodyArgs: bodyArgs, footerArgs: footerArgs, cardheader:header, cardbody:body, cardfooter:footer}} />
            </Reactstrap.Row>
        </Reactstrap.Card>);
    }
}


const mapDispatchToProps = {
    togglePopup,
    toggleComment};

export default ReactRedux.connect(null, mapDispatchToProps)(TweetCard);

/*
<div className="card mx-3 my-5" id={this.props.tweetInfo.getId()}>
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
</div>
*/