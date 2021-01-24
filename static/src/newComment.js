import GenericModal from './genericModal.js';
import GenericCard from './genericCard.js';
import { toggleComment } from './modalSlice.js';

class NewComment extends React.Component{

    constructor(props){
        super(props);
    }

    postComment(){
        /*
        - post it to server (handled as both Tweet and comment to Tweet)
        [function on server-side catches it and posts it?]
        */
    }

    handleComment=()=>{
        const {toggleComment} = this.props;
        toggleComment();
    }

    render(){
        const {showComment} = this.props;

        const headerStyle = {border: 'none'};
        const bodyStyle = {border: 'none'};
        const footerStyle = {opacity: 0.8, border: 'none'};

        const headerArgs = {className:"mt-n3 bg-dark font-weight-bold", style:{headerStyle}};
        const bodyArgs = {className:"mt-n4 bg-dark", style:{bodyStyle}};
        const footerArgs = {className:"mt-n4 bg-dark text-info", style:{footerStyle}};
        const modalBody =
            <Reactstrap.Container fluid>
                <Reactstrap.Row>
                    <Reactstrap.Card className="my-auto w-100" style={{border: 'none'}}>
                        <Reactstrap.Row className="no-gutters bg-dark text-white-50">
                            <Reactstrap.Col xs="auto">
                                <img src={"./profile.jpg"} style={{height: "50px"}} className="img-fluid" alt="" />
                            </Reactstrap.Col>
                            <GenericCard {...{headerArgs: headerArgs, bodyArgs: bodyArgs, footerArgs: footerArgs}}></GenericCard>
                        </Reactstrap.Row>
                    </Reactstrap.Card>
                </Reactstrap.Row>
                <Reactstrap.Row className="no-gutters bg-dark text-white-50">
                    <Reactstrap.Col xs="auto">
                        <img src={"./profile.jpg"} style={{height: "50px"}} className="img-fluid" alt="" />
                    </Reactstrap.Col>
                    <Reactstrap.Col>
                        <Reactstrap.Input type="textarea" id="tweet-text" className="form-control bg-dark text-white-50 border-dark overflow-auto" 
                        style={{resize: 'none', border:'none'}} rows={4}></Reactstrap.Input>
                    </Reactstrap.Col>
                </Reactstrap.Row>
            </Reactstrap.Container>;

        const modalHeader = <Reactstrap.Button onClick={()=>{this.handleComment()}} className="close text-white-50">&times;</Reactstrap.Button>;
        
        const modalFooter = <Reactstrap.Button onClick={()=>{this.handleComment();postComment()}} className="close btn btn-default">Tweet</Reactstrap.Button>;

        const atrs = {
            isOpen: showComment,
            toggle: ()=>this.handleComment(),
            //move toggle to GenericModal?
        };

        return(
            <>
                {showComment ? (<GenericModal other={atrs} header={modalHeader} body={modalBody} footer={modalFooter}></GenericModal>):null}
            </>);
    }
}

const mapDispatchToProps = {toggleComment};

const mapStateToProps = state => ({
    showComment: state.modal.showComment,
});

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(NewComment);