import SideBarLeftOption from './SidebarLeftOption.js';
import ProfileFooter from './profileFooter.js';
import {connect} from 'react-redux';
import NewTweet from './newTweet.js';
import {toggleTweet} from './modalSlice.js';

class SidebarLeft extends React.Component{

    constructor(props){
        super(props);
        //this.state = {show:false};
        
        //this.showModal = thi.showModal.bind(this);
        //this.hideModal = thi.hideModal.bind(this);
    }

    postTweetHandler = () =>{
        this.props.postTweet(this.state.postTweet);

        //this.setState(postTweet=false)?
    }

    
    //showModal = () => this.setState({show:true})

    //hideModal = () => this.setState({show:true})

    render(){
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
        const transformBar = (this.props.leftTransform == "left") ? {transform: 'translate(-85%)'} : {transform: 'translate(0%)'};
        const transformArrow = (this.props.leftTransform == "left") ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}

        const {toggleTweet} = this.props.showTweet;

        return(
        <Col xs="2" style={{position: "fixed"}} id="sidebar-left">
            <aside>
                <Button color="info" style={arrowStyle + transformArrow} onClick={()=>transformSidebarLeft(oppositeTransform)}>
                    <i className="fas fa-arrow-left"></i>
                </Button>
            </aside>
            <Collapse isOpen={isOpen} style={{transition: "transform 0.5s"} + transformBar}>
                <ul  className="list-group bg-secondary h-100 collapse show" id="sb-left" style={{transition: 'transform 0.5s'} + transformBar}>
                    <SideBarLeftOption option="#Explore" />
                    <SideBarLeftOption option="Bookmarks" />
                    <SideBarLeftOption option="Lists" />
                    <SideBarLeftOption option="Moments" />
                    <SideBarLeftOption option="Settings" />
                    <li className="bg-secondary border-0 d-flex justify-content-center align-items-center">
                        <Button color="info" size="lg" block onClick={toggleTweet}>Tweet</Button>
                        <NewTweet></NewTweet>
                    </li>
                    <ProfileFooter name="user-name" username="@Username" />
                </ul>
            </Collapse>
        </Col>);
    }
}

//const postTweet = {type: 'modal/toggleTweet', payload: ''};
const mapDispatchToProps = dispatch => ({toggleTweet: () => dispatch(toggleTweet)});
//const mapStateToProps = state => state.postTweet;

export default connect({}, mapDispatchToProps)(SidebarLeft);

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