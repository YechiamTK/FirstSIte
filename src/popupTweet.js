import GenericModal from './genericModal.js';
import GenericCard from './genericCard.js';
import { togglePopup } from './modalSlice.js';
import CommentSection from './commentSection.js';

class PopupTweet extends React.Component{

    constructor(props){
        super(props);
        this.state = {showSection: false};
    }

    render(props){
        const {togglePopup, showPopup} = this.props;
        

        //add close button?
        const header =<span></span>;

        //NEED TO INSERT CARD INFO, HOW?
        const cardfooter =
            <Reactstrap.ButtonToolbar>
                <Reactstrap.ButtonGroup size="sm" className="px-5">
                    <Reactstrap.Button className="mx-auto text-white-50 rounded-circle"><i className="far fa-comment-alt"></i></Reactstrap.Button>
                    <Reactstrap.Button className="mx-auto text-white-50 rounded-circle" /*onClick="{toggleCommentSection}*/><i className="far fa-comments"></i></Reactstrap.Button>
                    <Reactstrap.Button className="mx-auto text-white-50 rounded-circle"><i className="fas fa-retweet"></i></Reactstrap.Button>
                    <Reactstrap.Button className="mx-auto text-white-50 rounded-circle"><i className="far fa-heart"></i></Reactstrap.Button>
                    <Reactstrap.Button className="mx-auto text-white-50 rounded-circle"><i className="far fa-share-square"></i></Reactstrap.Button>
                </Reactstrap.ButtonGroup>
            </Reactstrap.ButtonToolbar>;

        var body =
            <>
                <Reactstrap.Row className="no-gutters bg-dark text-white-50">
                    <Reactstrap.Col xs="auto">
                        <img src="profile.jpg" style="height:50px;" class="img-fluid" alt="" />
                    </Reactstrap.Col>
                    <GenericCard cardfooter={this.cardfooter} />
                </Reactstrap.Row>
                <CommentSection style={{display: this.state.showSection ? 'block' : 'none'}} onClick={()=> this.state.showSection = !this.state.showSection}/>
            </>;

        const footer =<span></span>;

        const id = "popup";

        return (<> {showPopup ? (<GenericModal body={this.body} id={this.id} />) : null} </>);
    }
}

const mapDispatchToProps = dispatch => ({
    togglePopup: () => dispatch(togglePopup),
});

const mapStateToProps = state => ({
    showPopup: state.modal.showPopup,
});

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(PopupTweet);