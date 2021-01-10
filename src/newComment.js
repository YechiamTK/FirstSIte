import GenericModal from './genericModal.js';
import GenericCard from './genericCard.js';

class NewComment extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        var headerArgs = [className="mt-n3 bg-dark font-weight-bold", style={border: 'none'}];
        var bodyArgs = [className="mt-n4 bg-dark", style={border: 'none'}];
        var footerArgs = [className="mt-n4 bg-dark text-info", style={opacity: 0.8, border: 'none'}];
        var modalBody =
            <Container fuild>
                <Row>
                    <Card className="my-auto w-100" style={{border: 'none'}}>
                        <Row className="no-gutters bg-dark text-white-50">
                            <Col xs="auto">
                                <img src="profile.jpg" style="height:50px;" class="img-fluid" alt="" />
                            </Col>
                            <GenericCard {...headerArgs} {...bodyArgs} {...footerArgs}></GenericCard>
                        </Row>
                    </Card>
                </Row>
                <Row className="no-gutters bg-dark text-white-50">
                    <Col xs="auto">
                        <img src="profile.jpg" style="height:50px;" class="img-fluid" alt="" />
                    </Col>
                    <Col>
                        <Input type="textarea" id="tweet-text" className="form-control bg-dark text-white-50 border-dark overflow-auto" style={{resize: 'none', border:'none'}} rows={4}></Input>
                    </Col>
                </Row>
            </Container>;

        var modalFooter = <Button /*onClick="newComment(this)*/ class="close btn btn-default" /*data-dismiss="modal"*/>Tweet</Button>;

        return(<GenericModal id="comment" body={modalBody} footer={modalFooter}></GenericModal>);
    }
}

export default NewComment;

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