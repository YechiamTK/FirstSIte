import TopNavbar from './topNavbar.js';
import MainRow from './mainRow.js';
import SidebarLeft from './sidebarLeft.js';
import MainContent from './mainContent.js';
import SidebarRight from './sidebarRight.js';
 import NewTweet from './newTweet.js';
 import NewComment from './newComment.js';
 import PopupTweet from './popupTweet.js';
 import LoginScreen from './loginScreen.js';
 import { signInAttempt } from './flaskSlice.js';

class App extends React.Component{
    render(){

        const {tweets, signIn} = this.props;
        
        return( 
            <Reactstrap.Container fluid className="d-flex vh-100">
                {signIn ?
                (<>
                    <TopNavbar />
                    <MainRow tweets={tweets} >
                        <SidebarLeft />
                        <MainContent />
                        <SidebarRight />
                    </MainRow>
                    <NewTweet />
                    <NewComment />
                    <PopupTweet />
                </>) :
                (<LoginScreen />)
                }
            </Reactstrap.Container>
                
        );
    }
}

const mapDispatchtoProps={signInAttempt};

const mapStateToProps = state => ({
    signIn: state.flask.signIn,
});

export default ReactRedux.connect(mapStateToProps, mapDispatchtoProps)(App);