import TweetCard from './tweetCard.js';

class MainContent extends React.Component{

    constructor(props){
        super(props);
        var tweets = this.props.tweets;
    }

    render(){
        var cols = (this.props.leftTransform == "left") ?  {size: 10} : {size: 8, offset: 2};
        var margin = (this.props.leftTransform == "left") ? "ml-4" : "";

        return(
            <Reactstrap.Col xs={cols} className={margin} style={{transition: 'all 0.5s'}}>
                <Reactstrap.Container fluid>
                    {(this.props.tweets != undefined) ? (this.props.tweets.map((tweet, i) => <TweetCard key={tweet.getId()} id={tweet.getId()} tweetInfo={tweet} place={i}/>)) : null}
                </Reactstrap.Container>
            </Reactstrap.Col>);
    }   
}

export default MainContent;