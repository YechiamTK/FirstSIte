import GenericModal from './genericModal.js';
import {connect} from 'react-redux';

class NewTweet extends React.Component{

    constructor(props){
        super(props);
        //this.setState = {showHide: this.props.show ? {display: 'block'} : {display: 'none'}};
    }

    postTweet(){
        /*
        - get Tweets' data
        - post it to server
        [function on server-side catches it and posts it?]
        */
    }

    render(props){
        var modalHeader = <span></span>;
        //<button type="button" className="close text-white-50" data-dismiss="modal">&times;</button>
        var modalBody = <Input type="textarea" className="form control bg-secondary text-white-50 border-dark overflow-auto" 
                    placeholder="Start typing..." style={{resize:'none;'}} rows={5}></Input>;
        //<textarea id="tweet-text" className="form-control bg-secondary text-white-50 border-dark overflow-auto" style={{resize:'none;'}} rows="4"></textarea>
        var modalFooter = <Button /*onclick="postTweet()"*/ className="close" color="default">Tweet</Button>;
        //<button type="button" /*onclick="postTweet()"*/ className="close btn btn-default" data-dismiss="modal">Tweet</button>;

        return(
            <GenericModal /*display={this.showHide}*/ header={modalHeader} body={modalBody} footer={modalFooter} />
        );
    }
}

//const closeTweet = {type: 'modals/toggleModal', payload: ''};
//const mapStateToProps = state => state.postTweet;

//export default connect(mapStateToProps, closeTweet)(NewTweet);

export default NewTweet;