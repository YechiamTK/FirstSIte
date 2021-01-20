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

    handleClick=()=>{
        const {toggleTweet} = this.props;
        toggleTweet();
    }

    render(){
        const {showTweet} = this.props;
        
        var modalHeader = <Reactstrap.Button onClick={()=>{this.handleClick()}} className="close text-white-50">&times;</Reactstrap.Button>;
        //<button type="button" className="close text-white-50" data-dismiss="modal">&times;</button>
        var modalBody = <Reactstrap.Input type="textarea" className="form control bg-secondary text-white-50 overflow-auto"
                    placeholder="Start typing..." style={{resize:"none"}} rows={5}></Reactstrap.Input>;
        //<textarea id="tweet-text" className="form-control bg-secondary text-white-50 border-dark overflow-auto" style={{resize:'none;'}} rows="4"></textarea>
        var modalFooter = <Reactstrap.Button onClick={()=>{this.handleClick(); this.postTweet()}} className="close" color="default">Tweet</Reactstrap.Button>;
        //<button type="button" /*onclick="postTweet()"*/ className="close btn btn-default" data-dismiss="modal">Tweet</button>;

        const atrs = {
            isOpen: showTweet,
            toggle: ()=>this.handleClick(),
            //move toggle to GenericModal?
        };

        return(
            <>
                {showTweet ? (<GenericModal other={atrs} header={modalHeader} body={modalBody} footer={modalFooter} />) : null}
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