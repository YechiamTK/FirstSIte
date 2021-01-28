import GenericModal from './genericModal.js';
import {toggleTweet} from './modalSlice.js';
import {updateTweets} from './flaskSlice.js';

class NewTweet extends React.Component{

    constructor(props){
        super(props);
    }

    postTweet=()=>{
        const {updateTweets} = this.props;
        updateTweets();
    }

    handleClick=()=>{
        const {toggleTweet} = this.props;
        toggleTweet();
    }

    render(){
        const {showTweet} = this.props;
        
        var modalHeader = <Reactstrap.Button onClick={()=>{this.handleClick()}} className="close text-white-50">&times;</Reactstrap.Button>;
        
        var modalBody = 
        <Reactstrap.Form id="postform" method="post" action="/postTweet" onSubmit={()=>{setTimeout(()=>{this.postTweet(), this.handleClick()}, 500)}}>
            <Reactstrap.Input type="textarea" className="form control bg-secondary text-white-50 overflow-auto"
                    placeholder="Start typing..." style={{resize:"none"}} name="newtweet" rows={5}>
            </Reactstrap.Input>
        </Reactstrap.Form>;

        
        var modalFooter = <Reactstrap.Button type="submit" form="postform" className="close" color="default">Tweet</Reactstrap.Button>;

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

const mapDispatchtoProps = {toggleTweet, updateTweets};

const mapStateToProps = state => ({
    showTweet: state.modal.showTweet
});

export default ReactRedux.connect(mapStateToProps,mapDispatchtoProps)(NewTweet);