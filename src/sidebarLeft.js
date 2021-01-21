import SideBarLeftOption from './SidebarLeftOption.js';
import ProfileFooter from './profileFooter.js';
import NewTweet from './newTweet.js';
import {toggleTweet} from './modalSlice.js';

class SidebarLeft extends React.Component{

    /* constructor(props){
        super(props);

        //this.handleClick = this.handleClick.bind(this);
    } */

    handleClick=()=>{
        const {toggleTweet} = this.props;
        toggleTweet();
    }

    render(){
        //const {toggleTweet} = this.props;

        const arrowStyle = {
            bordeRadius: '50%',
            position: 'absolute', 
            top: '45%', 
            right: '-0.5rem', 
            zIndex: '2',
            opacity: '1!important',
            transition: 'transform 0.5s'};
        var transformSidebarLeft = this.props.transformSidebarLeft; 
        const oppositeTransform = (this.props.leftTransform == "left") ? "right" : "left";
        const transformBar = (this.props.leftTransform == "left") ? {transform: 'translate(-80%)'} : {transform: 'translate(0%)'};
        const transformArrow = (this.props.leftTransform == "left") ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'};

        /* const [isOpen, setIsOpen] = useState(false);

        const toggle = () => setIsOpen(!isOpen); */

        const lg = ()=> {console.log("clicked!")};

        return(
        <Reactstrap.Col xs="2" style={{position: "fixed", transition: 'transform 0.5s', ...transformBar}} id="sidebar-left">
            <aside>
                <Reactstrap.Button color="info" style={{...arrowStyle,...transformArrow}} onClick={()=>transformSidebarLeft(oppositeTransform)}>
                    <i className="fas fa-arrow-left"></i>
                </Reactstrap.Button>
            </aside>
            <Reactstrap.Container fluid>
                <Reactstrap.ListGroup flush  className="bg-secondary h-100" id="sb-left">
                    <SideBarLeftOption option="#Explore" />
                    <SideBarLeftOption option="Bookmarks" />
                    <SideBarLeftOption option="Lists" />
                    <SideBarLeftOption option="Moments" />
                    <SideBarLeftOption option="Settings" />
                    <Reactstrap.ListGroupItem className="bg-secondary border-0 d-flex justify-content-center align-items-center">
                        <Reactstrap.Button color="info" size="lg" block onClick={()=>{this.handleClick()}}>Tweet</Reactstrap.Button>
                    </Reactstrap.ListGroupItem>
                    <ProfileFooter name="user-name" username="@Username" />
                </Reactstrap.ListGroup>
            </Reactstrap.Container>
        </Reactstrap.Col>);
    }
}

//const postTweet = {type: 'modal/toggleTweet', payload: ''};
const mapDispatchToProps = {toggleTweet};
//const mapStateToProps = state => state.postTweet;

export default ReactRedux.connect(null, mapDispatchToProps)(SidebarLeft);

/*
<div className="col-2 position-fixed" id="sidebar-left">
    <aside>
        <button className="btn btn-info" style={arrowStyle + transformArrow} onClick={()=>transformSidebarLeft(oppositeTransform)}><i className="fas fa-arrow-left"></i></button>
    </aside>
    <ul  className="list-group bg-secondary h-100 collapse show" id="sb-left" style={{transition: 'transform 0.5s'} + transformBar}>
        <SideBarLeftOption option="#Explore" />
        <SideBarLeftOption option="Bookmarks" />
        <SideBarLeftOption option="Lists" />
        <SideBarLeftOption option="Moments" />
        <SideBarLeftOption option="Settings" />
        <li className="list-group-item bg-secondary border-0 d-flex justify-content-center align-items-center">
            <button type="button" className="btn btn-info btn-lg btn-block" dataToggle="modal" dataTarget="#post-tweet-id">Tweet</button>
        </li>
        <ProfileFooter name="user-name" username="@Username" />
    </ul>
</div>
*/