import GenericCard from './genericCard.js';
import {toggleComment, togglePopup, setActiveTweet} from './modalSlice.js';

class TweetCard extends React.Component{

    constructor(props){
        super(props);
        var tweetInfo = this.props.tweetInfo;
    }

    handlePopup =()=>{
        const {togglePopup, tweetInfo, setActiveTweet} = this.props;
        setActiveTweet(JSON.stringify(tweetInfo));
        togglePopup();
    }

    handleComment =()=>{
        const {toggleComment, setActiveTweet, tweetInfo} = this.props;
        setActiveTweet(JSON.stringify(tweetInfo));
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
    toggleComment,
    setActiveTweet};

export default ReactRedux.connect(null, mapDispatchToProps)(TweetCard);