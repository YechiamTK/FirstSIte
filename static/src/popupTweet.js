import GenericModal from './genericModal.js';
import GenericCard from './genericCard.js';
import { togglePopup } from './modalSlice.js';
import CommentSection from './commentSection.js';

class PopupTweet extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showSection: false,
            comments: {}
        };
    }

    handlePopup=()=>{
        const {togglePopup} = this.props;
        this.setState({
            showSection: false
        });
        togglePopup();
    }


    fetchCommentsFromServer=(tweetId)=>{
        let xhttp = new XMLHttpRequest();
        let data = "Error";
        //let comments = [];
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200){
                data = this.responseText;
                data = JSON.parse(data);
                //data.forEach((o,i,a)=>newTweet(a[i],newTweets, true));
            }
        };
        xhttp.open("GET", '/fetchComments/'+tweetId, false);
        xhttp.send();
        return data
        //updateTweets();
    }

    toggleCommentSection=(tweetId)=>{
        this.setState({
            comments: this.fetchCommentsFromServer(tweetId),
            showSection: !this.state.showSection
        });
    }

    render(){
        const {showPopup} = this.props;
        const {tweet} = this.props;
        
        let usrname = "",
            message = "",
            tweetId = "";

        if(Object.keys(tweet).length!==0 && tweet.payload!==undefined){
            const parsedTweet = JSON.parse(tweet.payload);
            message = parsedTweet._message;
            usrname = parsedTweet._username;
            tweetId = parsedTweet._id;
        }

        const header = <Reactstrap.Button onClick={()=>{this.handlePopup()}} className="close text-white-50">&times;</Reactstrap.Button>;

        //NEED TO INSERT CARD INFO, HOW?
        const cardfooter =
            <Reactstrap.ButtonToolbar>
                <Reactstrap.ButtonGroup size="sm" className="px-5">
                    <Reactstrap.Button className="mx-auto text-white-50 rounded-circle"><i className="far fa-comment-alt"></i></Reactstrap.Button>
                    <Reactstrap.Button className="mx-auto text-white-50 rounded-circle" onClick={()=>{this.toggleCommentSection(tweetId)}}><i className="far fa-comments"></i></Reactstrap.Button>
                    <Reactstrap.Button className="mx-auto text-white-50 rounded-circle"><i className="fas fa-retweet"></i></Reactstrap.Button>
                    <Reactstrap.Button className="mx-auto text-white-50 rounded-circle"><i className="far fa-heart"></i></Reactstrap.Button>
                    <Reactstrap.Button className="mx-auto text-white-50 rounded-circle"><i className="far fa-share-square"></i></Reactstrap.Button>
                </Reactstrap.ButtonGroup>
            </Reactstrap.ButtonToolbar>;

        const body =
            <>
                <Reactstrap.Row className="no-gutters bg-dark text-white-50">
                    <Reactstrap.Col xs="auto">
                        <img src={"./profile.jpg"} style={{height: "50px"}} className="img-fluid" />
                    </Reactstrap.Col>
                    <GenericCard cardheader={usrname} cardbody={message} cardfooter={cardfooter} />
                </Reactstrap.Row>
            </>;

        const footer = (this.state.showSection && this.state.comments.length!==0) ? (<CommentSection comments={this.state.comments} />) : null;

        const id = "popup";

        const atrs = {
            isOpen: showPopup,
            toggle: ()=>this.handlePopup(),
            //move toggle to GenericModal?
        };

        return (<> {showPopup ? (<GenericModal other={atrs} header={header} body={body} footer={footer} id={id} />) : null} </>);
    }
}

const mapDispatchToProps={togglePopup};

const mapStateToProps = state => ({
    showPopup: state.modal.showPopup,
    tweet: state.modal.tweet,
});

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(PopupTweet);