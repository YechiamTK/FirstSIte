import GenericModal from './genericModal.js';
import GenericCard from './genericCard.js';

class PopupTweet extends React.Component{

    constructor(props){
        super(props);
    }

    render(props){
        var header =<span></span>;

        //NEED TO INSERT CARD INFO, HOW?
        var cardfooter =
        <ButtonToolbar>
            <ButtonGroup size="sm" className="px-5">
                <Button className="mx-auto text-white-50 rounded-circle"><i className="far fa-comment-alt"></i></Button>
                <Button className="mx-auto text-white-50 rounded-circle" /*onClick="showHideComments()"*/><i className="far fa-comments"></i></Button>
                <Button className="mx-auto text-white-50 rounded-circle"><i className="fas fa-retweet"></i></Button>
                <Button className="mx-auto text-white-50 rounded-circle"><i className="far fa-heart"></i></Button>
                <Button className="mx-auto text-white-50 rounded-circle"><i className="far fa-share-square"></i></Button>
            </ButtonGroup>
        </ButtonToolbar>;

        var body =
            <Row className="no-gutters bg-dark text-white-50">
                <Col xs="auto">
                    <img src="profile.jpg" style="height:50px;" class="img-fluid" alt="" />
                </Col>
                <GenericCard cardfooter={this.cardfooter}></GenericCard>
            </Row>;

        var footer =<span></span>;

        var id = "popup";

        return (<GenericModal body={this.body} id={this.id}></GenericModal>);
    }
}

export default PopupTweet;