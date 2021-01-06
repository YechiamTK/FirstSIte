import GenericModal from './genericModal.js';

class NewTweet extends React.Component{

    constructor(props){
        super(props);
    }

    postTweet(){
        /*
        - get Tweets' data
        - post it to server
        [function on server-side catches it and posts it?]
        */
    }

    render(props){
        var header = <span></span>;
        //<button type="button" className="close text-white-50" data-dismiss="modal">&times;</button>
        var body = <Input type="textarea" className="form control bg-secondary text-white-50 border-dark overflow-auto" 
                    placeholder="Start typing..." style={{resize:'none;'}} rows={5}></Input>;
        //<textarea id="tweet-text" className="form-control bg-secondary text-white-50 border-dark overflow-auto" style={{resize:'none;'}} rows="4"></textarea>
        var footer = <Button /*onclick="postTweet()"*/ className="close" color="default">Tweet</Button>;
        //<button type="button" /*onclick="postTweet()"*/ className="close btn btn-default" data-dismiss="modal">Tweet</button>;

        return(
            <GenericModal header={header} body={body} footer={footer} />
        );
    }
}

export default NewTweet;