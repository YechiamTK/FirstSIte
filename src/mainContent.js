import TweetCard from './tweetCard.js';

class MainContent extends React.Component{

    constructor(props){
        super(props);
        var tweets = this.props.tweets;
    }

    render(){
        return(
            <Col xs={{size: 8, offset: 2}}>
                <Container fuild={true}>
                    {this.props.tweets.map((tweet, i) => <div><TweetCard tweetInfo={tweet} place={i}/></div>)}
                </Container>
            </Col>);
    }   
}

export default MainContent;