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

        const {tweets} = this.props;

        return( 
            <Reactstrap.Container fluid>
                <TopNavbar />
                <MainRow tweets={tweets} >
                    <SidebarLeft />
                    <MainContent />
                    <SidebarRight />
                </MainRow>
                <NewTweet />
                <NewComment />
                <PopupTweet />
            </Reactstrap.Container>
                
        );
    }
}

export default App;