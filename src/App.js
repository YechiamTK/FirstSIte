import TopNavbar from './topNavbar.js';
import MainRow from './mainRow.js';
import SidebarLeft from './sidebarLeft.js';
import MainContent from './mainContent.js';
import SidebarRight from './sidebarRight.js';
import NewTweet from './newTweet.js';
import NewComment from './newComment.js';
import PopupTweet from './popupTweet.js';

class App extends React.Component{
    render(){
        const {showTweet} = this.props.showTweet;
        const {showPopup} = this.props.showPopup;
        const {showComment} = this.props.showComment;

        return( 
            <Container fuild>
            <TopNavbar />
            <MainRow>
                <SidebarLeft>
                    {showTweet && <NewTweet />}
                </SidebarLeft>
                <MainContent>
                    {showPopup && <PopupTweet />}
                    {showComment && <NewComment />}
                </MainContent>
                <SidebarRight></SidebarRight>
            </MainRow>
            </Container>
        );
    }

    //put in getElementById('root');
}

const mapStateToProps = state => ({
    showTweet: state.modal.showTweet,
    showPopup: state.modal.showPopup,
    showComment: state.modal.showComment
});

export default connect(mapStateToProps)(App);