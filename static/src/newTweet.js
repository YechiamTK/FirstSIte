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
        
        var modalBody = <Reactstrap.Input type="textarea" className="form control bg-secondary text-white-50 overflow-auto"
                    placeholder="Start typing..." style={{resize:"none"}} rows={5}></Reactstrap.Input>;
        
        var modalFooter = <Reactstrap.Button onClick={()=>{this.handleClick(); this.postTweet()}} className="close" color="default">Tweet</Reactstrap.Button>;

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

const mapDispatchtoProps = {toggleTweet};

const mapStateToProps = state => ({
    showTweet: state.modal.showTweet,
});

export default ReactRedux.connect(mapStateToProps,mapDispatchtoProps)(NewTweet);