import GenericModal from './genericModal.js';
import {toggleTweet} from './modalSlice.js';
//import {connect} from 'react-redux';

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

    render(){
        const {showTweet, toggleTweet} = this.props;
        
        var modalHeader = <span></span>;
        //<button type="button" className="close text-white-50" data-dismiss="modal">&times;</button>
        var modalBody = <Reactstrap.Input type="textarea" className="form control bg-secondary text-white-50 border-dark overflow-auto" 
                    placeholder="Start typing..." style={{resize:'none;'}} rows={5}></Reactstrap.Input>;
        //<textarea id="tweet-text" className="form-control bg-secondary text-white-50 border-dark overflow-auto" style={{resize:'none;'}} rows="4"></textarea>
        var modalFooter = <Reactstrap.Button onclick={()=>{toggleTweet(); postTweet()}} className="close" color="default">Tweet</Reactstrap.Button>;
        //<button type="button" /*onclick="postTweet()"*/ className="close btn btn-default" data-dismiss="modal">Tweet</button>;

        return(
            <>
            {showTweet ? (<GenericModal header={modalHeader} body={modalBody} footer={modalFooter} />) : null}
            </>
        );
    }
}

//const closeTweet = {type: 'modals/toggleModal', payload: ''};
//const mapStateToProps = state => state.postTweet;

//export default connect(mapStateToProps, closeTweet)(NewTweet);

const mapDispatchtoProps = {toggleTweet};

const mapStateToProps = state => ({
    showTweet: state.modal.showTweet,
});

//(state=>{showTweet: state.modal.showTweet}), (dispatch=>{toggleTweet: ()=>dispatch(toggleTweet)})
export default ReactRedux.connect(mapStateToProps,mapDispatchtoProps)(NewTweet);