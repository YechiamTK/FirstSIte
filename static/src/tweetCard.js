import GenericCard from './genericCard.js';
import {toggleComment, togglePopup} from './modalSlice.js';

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
        const {togglePopup, tweetInfo} = this.props;
        togglePopup(JSON.stringify(tweetInfo));
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
        const bodyArgs = {onClick: this.handlePopup};

        const body = tweetInfo.getMessage();

        const footer = 
            <Reactstrap.ButtonToolbar>
                <Reactstrap.ButtonGroup size="sm" className="px-5">
                    <Reactstrap.Button className="mx-auto text-white-50 rounded-circle" onClick={()=>{this.handleComment()}}>
                        <i className="far fa-comment-alt"></i>
                    </Reactstrap.Button>
                    <Reactstrap.Button className="mx-auto text-white-50 rounded-circle"><i className="fas fa-retweet"></i></Reactstrap.Button>
                    <Reactstrap.Button className="mx-auto text-white-50 rounded-circle"><i className="far fa-heart"></i></Reactstrap.Button>
                    <Reactstrap.Button className="mx-auto text-white-50 rounded-circle"><i className="far fa-share-square"></i></Reactstrap.Button>
                </Reactstrap.ButtonGroup>
            </Reactstrap.ButtonToolbar>;
        
         const headerArgs={};
         const footerArgs={};
        
        return(
        <Reactstrap.Card id={id} className="mx-3 my-5">
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