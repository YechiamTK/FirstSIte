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

    render(){
        const {showComment, toggleComment} = this.props;

        var headerArgs = [className="mt-n3 bg-dark font-weight-bold", style={border: 'none'}];
        var bodyArgs = [className="mt-n4 bg-dark", style={border: 'none'}];
        var footerArgs = [className="mt-n4 bg-dark text-info", style={opacity: 0.8, border: 'none'}];
        var modalBody =
            <Reactstrap.Container fuild>
                <Reactstrap.Row>
                    <Reactstrap.Card className="my-auto w-100" style={{border: 'none'}}>
                        <Reactstrap.Row className="no-gutters bg-dark text-white-50">
                            <Reactstrap.Col xs="auto">
                                <img src="profile.jpg" style="height:50px;" class="img-fluid" alt="" />
                            </Reactstrap.Col>
                            <GenericCard {...headerArgs} {...bodyArgs} {...footerArgs}></GenericCard>
                        </Reactstrap.Row>
                    </Reactstrap.Card>
                </Reactstrap.Row>
                <Reactstrap.Row className="no-gutters bg-dark text-white-50">
                    <Reactstrap.Col xs="auto">
                        <img src="profile.jpg" style="height:50px;" class="img-fluid" alt="" />
                    </Reactstrap.Col>
                    <Reactstrap.Col>
                        <Reactstrap.Input type="textarea" id="tweet-text" className="form-control bg-dark text-white-50 border-dark overflow-auto" 
                        style={{resize: 'none', border:'none'}} rows={4}></Reactstrap.Input>
                    </Reactstrap.Col>
                </Reactstrap.Row>
            </Reactstrap.Container>;

        var modalFooter = <Reactstrap.Button onClick={()=>{toggleComment();postComment()}} class="close btn btn-default">Tweet</Reactstrap.Button>;

        return(
            <>
                {showComment ? (<GenericModal id="comment" body={modalBody} footer={modalFooter}></GenericModal>):null}
            </>);
    }
}

const mapDispatchToProps = dispatch => ({
    toggleComment: ()=>dispatch(toggleComment),
});

const mapStateToProps = state => ({
    showComment: state.modal.showComment,
});

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(NewComment);

/*
<div class="row">
    <div class="card my-auto w-100" style="border: none;">
        <div class="row no-gutters bg-dark text-white-50">
            <div class="col-auto">
                <img src="profile.jpg" style="height:50px;" class="img-fluid" alt="">
            </div>
            <div class="col">
                <div class="px-2">
                    <div class="card-header mt-n3 bg-dark font-weight-bold" style="border:none;"></div>
                    <div class="card-body mt-n4 bg-dark" style="white-space:pre-wrap;border:none;"></div>
                    <div class="card-footer mt-n4 bg-dark text-info" style="opacity: 0.8;border:none;"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row no-gutters bg-dark text-white-50">
    <div class="col-auto">
        <img src="profile.jpg" style="height:50px;" class="img-fluid" alt="">
    </div>
    <div class="col">
        <textarea id="tweet-text" class="form-control bg-dark text-white-50 border-dark overflow-auto" style="resize:none;border:none;" rows="4"></textarea>
    </div>
</div>
*/