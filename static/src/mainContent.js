import { updateTweets } from './flaskSlice.js';
import TweetCard from './tweetCard.js';
import {newTweet} from './script.js';

class MainContent extends React.Component{

    constructor(props){
        super(props);
        this.state = {tweets: this.state ? this.state.tweets : this.props.tweets};
        this.handleUpdate = this.handleUpdate.bind(this);
        this.fetchTweetsFromServer = this.fetchTweetsFromServer.bind(this);
    }

    fetchTweetsFromServer=()=>{
        //const {updateTweets} = this.props;
        let xhttp = new XMLHttpRequest();
        let data = "Error";
        let newTweets = [];
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200){
                data = this.responseText;
                data = JSON.parse(data);
                data.forEach((o,i,a)=>newTweet(a[i],newTweets, true));
            }
        };
        xhttp.open("GET", '/fetchTweets', false);
        xhttp.send();
        return newTweets
        //updateTweets();
        
    }    
    
    handleUpdate=()=>{
        const {updateTweets} = this.props;  
        const {update} = this.props;
        if(update){
            //this.state = {tweets: []};
            //this.updateFromServer(this.state.tweets);
            this.setState({tweets: this.fetchTweetsFromServer()});
            updateTweets();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (prevProps.update !== this.props.update){
            this.handleUpdate();
        }
    }

    render(){
        //this.handleUpdate();

        var cols = (this.props.leftTransform == "left") ?  {size: 10} : {size: 8, offset: 2};
        var margin = (this.props.leftTransform == "left") ? "ml-4" : "";

        return(
            <Reactstrap.Col xs={cols} className={margin} style={{transition: 'all 0.5s'}}>
                <Reactstrap.Container fluid>
                    {(this.state.tweets != undefined) ? (this.state.tweets.map((tweet, i) => <TweetCard key={tweet.getId()} id={tweet.getId()} tweetInfo={tweet} place={i}/>)) : null}
                </Reactstrap.Container>
            </Reactstrap.Col>);
    }   
}

const mapDispatchtoProps={updateTweets};

const mapStateToProps = state => ({
    update: state.flask.update,
});

export default ReactRedux.connect(mapStateToProps, mapDispatchtoProps)(MainContent);