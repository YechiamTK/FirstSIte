import TweetCard from './tweetCard.js';

class MainContent extends React.Component{

    constructor(props){
        super(props);
        var tweets = this.props.tweets;
    }

    render(){
        return(
            <div className="col-8 offset-2 container-fluid">
                {this.props.tweets.map((tweet, i) => <div><TweetCard tweetInfo={tweet} place={i}/></div>)}
            </div>);
    }   
}

export default MainContent;