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

        const {tweets, signIn, id} = this.props;
        
        return( 
            <>
                {signIn ?
                    (<Reactstrap.Container id={id} fluid className="vh-100">
                        <TopNavbar />
                        <MainRow tweets={tweets} >
                            <SidebarLeft />
                            <MainContent />
                            <SidebarRight />
                        </MainRow>
                        <NewTweet id={id}/>
                        <NewComment />
                        <PopupTweet />
                    </Reactstrap.Container>) :
                    <Reactstrap.Container fluid className="d-flex vh-100">
                        <LoginScreen />
                    </Reactstrap.Container>
                }
            </>
        );
    }
}

const mapDispatchtoProps={signInAttempt};

const mapStateToProps = state => ({
    signIn: state.flask.signIn,
    id: state.flask.id
});

export default ReactRedux.connect(mapStateToProps, mapDispatchtoProps)(App);